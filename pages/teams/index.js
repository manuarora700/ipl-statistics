import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

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
        <h1 className={styles.title}>
          Teams
        </h1>

        <p className={styles.description}>
          Click on cards to see Individual Performances{' '}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        

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
