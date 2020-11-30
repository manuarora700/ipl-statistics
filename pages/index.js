import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>IPL Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <Header content="Welcome to IPL dashboard" description="Click on the cards to view data" />

        <div className={styles.grid}>
          
            <Link href="/teams">
            <a className={styles.card}>
              <h3>Teams</h3>

            </a>
            </Link>

            <Link href="/players">
            <a className={styles.card}>
              <h3>Players</h3>

            </a>
            </Link>

            <Link href="/averageStrikerate">
            <a className={styles.card}>
              <h3>Average and Stike Rates</h3>

            </a>
            </Link>
          
        </div>

      </main>

      <Footer />
    </div>
    </>
  )
}
