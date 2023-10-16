import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
