import Head from 'next/head';
import RecentOrders from '../components/RecentOrders';

export default function Home() {
  return (
    <>
      <Head>
        <title>Finanion Dashboard</title>
        <meta
          name="description"
          content="This is sample dashboard design for Finanion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 h-full">
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <RecentOrders />
        </div>
      </main>
    </>
  );
}
