import React from 'react';
import Head from 'next/head'
import Navbar from '@/components/Navbar'

import Registrazione from '@/components/Registrazione';

import { useAppContext } from '../context/state';

import Container from '@mui/material/Container';


export default function account() {
  const mycontext = useAppContext();



  return (
    <>
      <Head>
        <title>Tecnici del Soccorso - Prevenzione Formazione Sicurezza</title>
        <meta name="description" content="Scopri i Tecnici del Supporto!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{backgroundColor:"white"}}>
        <Navbar/>
        <br/>
        <Container maxWidth="xl">
          
          <Registrazione/>
           
        </Container>
        
      </main>
    </>
  )
}