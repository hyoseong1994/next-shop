import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "@/app/globals.css";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
export default MyApp;
