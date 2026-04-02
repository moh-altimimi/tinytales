import '../global.css'

import { ApolloProvider } from '@apollo/client/react'
import { Stack } from 'expo-router'
import Toast from 'react-native-toast-message'

import { apolloClient } from '../lib/apollo'

export default function RootLayout() {
  return (
    <ApolloProvider client={apolloClient}>
      <Stack screenOptions={{ headerShown: false }} />
      <Toast />
    </ApolloProvider>
  )
}

