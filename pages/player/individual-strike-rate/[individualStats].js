import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import Link from 'next/link';

import { useRouter } from 'next/router';

import IndividualStats from '../../../components/IndividualStats';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Navigation from '../../../components/Navigation';

export async function getServerSideProps(context) {
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

function filterByValue(players, nameOfPlayer) {
  return players.filter(name => name.batsman === nameOfPlayer)
}

export default function IndividualDetails({data}) {

    const router = useRouter();
    const name = router.query.individualStats;

    let playerDetails = filterByValue(data, name)[0];


    console.log(playerDetails);

    // console.log(name);

  return (
    <>

    <div className={styles.container}>
      <Head>
        <title>IPL Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Header content="Individual player details" description="Most runs and average strikerate of an individual" />
        <Navigation home="/" goBack="/players" />
      <IndividualStats individualDetails={playerDetails} />

      </main>

      <Footer />
    </div>
    </>
  )
}
