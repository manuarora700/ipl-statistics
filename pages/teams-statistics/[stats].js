import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import { useRouter } from 'next/router';

import TeamDetailsTable from '../../components/TeamDetailsTable';

import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


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

    const router = useRouter();
    const teamName = router.query.stats;

    let teamDetails = filterByValueTeam(data, teamName)[0];


    // console.log(teamDetails);
  return (
    <div className={styles.container}>
      <Head>
        <title>IPL Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
      <Header content="Team Statistics" description="Induvidual performances and stats" />
      <Navigation home="/" goBack="/teams" />

      <TeamDetailsTable teamDetails={teamDetails}/>
      </main>

      <Footer />
    </div>
  )
}
