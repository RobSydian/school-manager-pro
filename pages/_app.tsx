import GlobalStyles from "../styles/globalStyles";
import type { AppProps } from "next/app";
import Layout from "../components/structure/layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
