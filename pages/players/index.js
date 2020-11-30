import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

import { useState, useEffect } from 'react';

import { Input } from "@chakra-ui/react"

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
  const handleChange = event => {
    setSearchTerm(event.target.value);
    
  
  };
  useEffect(() => {
    const results = data.filter(player =>
      player.Player_Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className={styles.container}>
      <Head>
        <title>IPL Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header content="Player details" description="View details of each and every cricket player" />
        <Navigation home="/" goBack="/" />
        <Input
          type="text"
          placeholder="Search Players..."
          mt={10}
          maxW={400}
          value={searchTerm}
          onChange={handleChange}
        />
        <PlayersTable playerDetails={searchResults} />
      </main>

    <Footer />
    </div>
  )
}
