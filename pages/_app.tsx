import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Cheers</title>
      </Head>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
