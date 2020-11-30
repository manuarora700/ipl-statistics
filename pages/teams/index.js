import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Stack, Button } from '@chakra-ui/react'

export async function getStaticProps(context) {
  const res = await fetch(`https://young-wildwood-83401.herokuapp.com/teams`)
  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}


export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>IPL Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header content="Teams" description="click on the card to view individual stats" />
        <Navigation home="/" goBack="/" />
        <div className={styles.grid}>
          {data.map(team => (
              <Link href={`/teams-statistics/${team.team1}`}>
                <a className={styles.card}>
                <h3>{team.team1}</h3>

                </a>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
