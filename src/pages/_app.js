import Layout from "@/components/Layout";
import GlobalContextProvider from "@/context/global";
import "@/styles/globals.scss";
export default function App({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContextProvider>
  );
}
