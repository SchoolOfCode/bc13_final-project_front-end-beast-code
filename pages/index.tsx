import Head from 'next/head'
import LandingHeader from '../components/LandingHeader'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cheers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingHeader/>
    </>
  );
}
