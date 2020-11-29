import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export async function getStaticProps(context) {
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


export default function Players({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>IPL Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {data.map(player => (
            <Link href={`/player/${player.Player_Name}`} >
            <a className={styles.card}>
              <h3>{player.Player_Name}</h3>
              <p>Cick for more info</p>
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
