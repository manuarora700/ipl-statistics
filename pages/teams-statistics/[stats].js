import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import { useRouter } from 'next/router';

import TeamDetailsTable from '../../components/TeamDetailsTable';


export async function getServerSideProps(context) {
  const res = await fetch(`https://young-wildwood-83401.herokuapp.com/teams_home_and_away_statistics`)
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

function filterByValueTeam(teams, teamName) {
    return teams.filter(team => team.team === teamName)
  }


export default function TeamsStatistics({data}) {

  console.log(data);
    const router = useRouter();
    const teamName = router.query.stats;
    console.log(teamName);
    // console.log(teamName);


    let teamDetails = filterByValueTeam(data, teamName)[0];


    // console.log(teamDetails);
  return (
    <div className={styles.container}>
      <Head>
        <title>IPL Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>

      <TeamDetailsTable teamDetails={teamDetails}/>
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
  )
}
