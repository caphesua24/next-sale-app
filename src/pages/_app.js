import '@/styles/globals.css';
import { StoreProvider } from '../../utils/Store';
// import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
// import { SessionContextProvider } from '@supabase/auth-helpers-react';
// import { useState } from 'react';
function MyApp({ Component, pageProps }) {
  // const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <StoreProvider
    // supabaseClient={supabaseClient}
    // initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
      supabase
    </StoreProvider>
  );
}

export default MyApp;
