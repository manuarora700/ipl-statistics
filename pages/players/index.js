import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import { useState, useEffect } from 'react';

import { Input, ButtonGroup } from "@chakra-ui/react"

import PlayersTable from '../../components/PlayersTable';



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

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);
  console.log(data);
  const handleChange = event => {
    setSearchTerm(event.target.value);
    
  
  };
  useEffect(() => {
    const results = data.filter(player =>
      player.Player_Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  console.log(searchResults);
  return (
    <div className={styles.container}>
      <Head>
        <title>IPL Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <Input
        type="text"
        placeholder="Search Players..."
        mt={10}
        maxW={400}
        value={searchTerm}
        onChange={handleChange}
      />


      <main className={styles.main}>
      <PlayersTable playerDetails={searchResults} />
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
