import "@/styles/globals.css";
import Layout from "@/compoents/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
<Component {...pageProps} />
</Layout>
  )
}
