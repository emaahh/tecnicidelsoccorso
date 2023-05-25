import * as React from 'react';

import Head from 'next/head'
import Navbar from '@/components/Navbar'
import CorsoComponent from '@/components/CorsoComponent';

//mui
import Container from '@mui/material/Container';
import { Paper, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Chip from '@mui/material/Chip';



const pediatric_advanced_life_support  = () => {
    return (
        <>
            <Head>
                <title>Corso di Pediatric advanced life support (PALS) da Tecnici del Soccorso - Prevenzione Formazione Sicurezza</title>
                <meta name="description" content="Scopri i Tecnici del Supporto!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{backgroundColor:"white"}}>
                <Navbar/>
                <CorsoComponent 
                    nomeCorso="Pediatric advanced life support (PALS)" 
                    descCorso="Questo corso in aula, basato su video e guidato da un istruttore, usa una serie di emergenze pediatriche simulate per rafforzare i concetti importanti di un approccio sistematico alla valutazione, al supporto vitale di base, agli algoritmi per il trattamento PALS, alla rianimazione efficace e alle dinamiche di team in ambito pediatrico. 
                    <br/>L’obiettivo del corso PALS è migliorare la qualità dell’assistenza fornita ai bambini gravemente malati o feriti, con conseguente miglioramento degli esiti."
                    why=""
                    vantaggi=""
                    condizioni=""
                    prova=""
                />
            </main>
        </>
  );
};
export default pediatric_advanced_life_support;