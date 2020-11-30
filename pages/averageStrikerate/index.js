import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import Footer from '../../components/Footer'

import MostRuns from '../../components/MostRuns';

import { Stack, Button } from '@chakra-ui/react';

import Navigation from '../../components/Navigation';
import Header from '../../components/Header';

export async function getStaticProps(context) {
  const res = await fetch(`https://young-wildwood-83401.herokuapp.com/most_runs_average_strikerate`)
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


export default function MostRunsPage({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>IPL Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      
      <main className={styles.main}>
        <Header content="Average Strikerate" description="Most runs and average strikerate for every player" />
        <Navigation home="/" goBack="/"/>
        <MostRuns mostRunsDetails={data}/>
      </main>
    <Footer />
    </div>
  )
}
