import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link';

import { useRouter } from 'next/router';

import '../../components/ViewData';
import ViewData from '../../components/ViewData';

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

      <ViewData playerDetails={playerDetails} />

            


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
