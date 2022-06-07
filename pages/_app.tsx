import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App, { AppContext, AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "react-query";

import { createEmotionCache, theme } from "../src/config/mui";
import { queryClient } from "../src/config/query";
// import "../styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </CacheProvider>
    </QueryClientProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
export default MyApp;
