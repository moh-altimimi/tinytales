import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'

import { supabaseClient } from './supabase'

const hasuraHttpEndpoint = process.env.EXPO_PUBLIC_HASURA_ENDPOINT
const hasuraWsEndpoint = process.env.EXPO_PUBLIC_HASURA_WS_ENDPOINT

if (!hasuraHttpEndpoint) {
  throw new Error('Missing env var: EXPO_PUBLIC_HASURA_ENDPOINT')
}

if (!hasuraWsEndpoint) {
  throw new Error('Missing env var: EXPO_PUBLIC_HASURA_WS_ENDPOINT')
}

const httpLink = new HttpLink({
  uri: hasuraHttpEndpoint,
})

const authLink = setContext(async (_, { headers }) => {
  const {
    data: { session },
  } = await supabaseClient.auth.getSession()

  const accessToken = session?.access_token

  return {
    headers: {
      ...headers,
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
  }
})

const wsLink = new GraphQLWsLink(
  createClient({
    url: hasuraWsEndpoint,
    connectionParams: async () => {
      const {
        data: { session },
      } = await supabaseClient.auth.getSession()

      const accessToken = session?.access_token

      return accessToken ? { Authorization: `Bearer ${accessToken}` } : {}
    },
  })
)

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  authLink.concat(httpLink)
)

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})

supabaseClient.auth.onAuthStateChange((event) => {
  if (event === 'TOKEN_REFRESHED' || event === 'SIGNED_OUT' || event === 'SIGNED_IN') {
    apolloClient.resetStore().catch(() => {})
  }
})

