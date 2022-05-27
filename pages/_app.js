import "../styles/globals.css";
import Head from "next/head";
import { Fragment } from "react";
import { GlobalContextProvider } from "../store/globalProvider";
import { SearchContextProvider } from "../store/searchProvider";
import {WatchContextProvider} from "../store/watchlistProvider";
import {Provider} from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/portfolioIcon.ico" />
      </Head>
      <Provider session={pageProps.session}>
        <GlobalContextProvider>
          <SearchContextProvider>
            <WatchContextProvider>
              <Component {...pageProps} />
            </WatchContextProvider>
          </SearchContextProvider>
        </GlobalContextProvider>
      </Provider>
    </Fragment>
  );
}

export default MyApp;
