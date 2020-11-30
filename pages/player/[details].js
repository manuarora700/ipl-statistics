import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import { useRouter } from 'next/router';

import '../../components/ViewData';
import ViewData from '../../components/ViewData';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

export async function getServerSideProps(context) {
  const res = await fetch(`https://young-wildwood-83401.herokuapp.com/players`)
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
  return players.filter(name => name.Player_Name === nameOfPlayer)
}

export default function Details({data}) {

    const router = useRouter();
    const name = router.query.details;

    let playerDetails = filterByValue(data, name)[0];
  return (
    <>

    <div className={styles.container}>
      <Head>
        <title>IPL Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header content="Player details" description="Individual player details" />
        <Navigation home="/" goBack="/players" />
        <ViewData playerDetails={playerDetails} />
      </main>

      <Footer />
    </div>
    </>
  )
}
