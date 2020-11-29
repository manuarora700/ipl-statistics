import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

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


export default function MostRuns({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>IPL Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">IPL DASHBOARD</a>
        </h1>

        <p className={styles.description}>
          Get started by clicking on whichever card you want to see{' '}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        {/* {data.map(team => {
            <a href="#" className = {styles.card}>
              <h3>Custom Team</h3>
              <p>Custom Team Paragraph</p>
            </a>
            </a>
        })} */}

        

        <div className={styles.grid}>
          {data.map(stats => (
              <Link href={`/player/${stats.batsman}`}>
                <a className={styles.card}>
                <h3>Name: {stats.batsman}</h3>
                <p>Total Runs: {stats.total_runs}</p>
                <p>Out: {stats.out}</p>
                <p># of Balls: {stats.numberofballs}</p>
                <p>Average: {stats.average}</p>
                <p>StrikeRate: {stats.strikerate}</p>
                <p>CLICK FOR PLAYER INFO</p>
                </a>
            </Link>
          ))}
        </div>
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
