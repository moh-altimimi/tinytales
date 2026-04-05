import {useEffect, useState} from 'react';

import {supabaseClient} from '../lib/supabase';

export function useAuthSession() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadSession = async () => {
      const {data} = await supabaseClient.auth.getSession();

      if (!isMounted) {
        return;
      }

      setIsAuthenticated(Boolean(data.session));
      setIsLoading(false);
    };

    void loadSession();

    const {data} = supabaseClient.auth.onAuthStateChange((_, session) => {
      if (!isMounted) {
        return;
      }

      setIsAuthenticated(Boolean(session));
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
      data.subscription.unsubscribe();
    };
  }, []);

  return {isLoading, isAuthenticated};
}
