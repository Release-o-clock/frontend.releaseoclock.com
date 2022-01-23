import App from "next/app";
import { createContext } from 'react';
import Layout from '../components/Layout'
import '../styles/customTheme.scss'
import { fetchAPI } from '../frontend/lib/api';

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <GlobalContext.Provider value={global}>
      <Layout {...pageProps}>
          <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/api/global");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp
