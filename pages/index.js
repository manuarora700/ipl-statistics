import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import { Button, ButtonGroup } from "@chakra-ui/react"

export default function Home({data}) {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>IPL Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">IPL DASHBOARD</a>
        </h1>

        <p className={styles.description}>
          Get started by clicking on whichever card you want to see{' '}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

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

        <Button colorScheme="blue">Button</Button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
    </>
  )
}
