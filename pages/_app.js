import '@/styles/globals.css';
import Layout from '@/layouts';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Finanion Dashboard</title>
        <meta
          name="description"
          content="This is sample dashboard design for Finanion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
