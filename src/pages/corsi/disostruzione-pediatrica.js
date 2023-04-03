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



const disostruzione_pediatrica = () => {
    return (
        <>
            <Head>
                <title>Corso di Disostruzione Pediatrica da Tecnici del Soccorso - Prevenzione Formazione Sicurezza</title>
                <meta name="description" content="Scopri i Tecnici del Supporto!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{backgroundColor:"white"}}>
                <Navbar/>
                <CorsoComponent 
                    nomeCorso="Disostruzione Pediatrica" 
                    descCorso="Il programma del corso di Disostruzione Pediatrica, è finalizzato alla formazione, informazione e l’aggiornamento di personale sanitario e laico, con lo scopo di sviluppare le competenze in termini di conoscenze teoriche e abilità pratiche per la gestione del soffocamento del bambino Il corso di formazione ha l’obiettivo di coniugare una parte dei saperi teorici con una prevalente attività di pratica applicativa al fine di soddisfare precise esigenze di formazione espresse in ambito di soccorso extraospedaliero.<br/>
                    Il corso di formazione e informazione in tecniche di Disostruzione delle viee aeree e Rianimazione Cardio polmonare di Base in Età pediatrica e neonatale è rivolto a personale delle mense, educatori, animatori, personali impiegati in ludoteche e centri ricreativo-didattici per bambini. Il corso è sviluppato con metodi didattici attivi finalizzati ad ottimizzare l’apprendimento:<br/>
                    - lezione frontale<br/>
                    - esercitazioni pratiche con isole da 4 discenti.<br/>"
                    why="La frequenza del corso, permette di acquisire manovre salvavita semplici da attuare, in caso di soffocamento da parte di bambini, dovuti a corpi estranei che ne bloccano il respiro. <br/>Il discente, potrà esercitarsi su diversi manichini simulatori, attuando direttamente su di essi le manovre salvavita."
                    vantaggi="
                    <h4 className='minititle'>Standard qualitativi Elevati</h4>
                    <br/><br/>
                    Il metodo di insegnamento sarà quello dell’imparare facendo, attraverso l’esercitazione pratica su manichini che simulano scenari reali.
                    <br/><br/>
                    <h4 className='minititle'>Personale Qualificato</h4>
                    <br/><br/>
                    I Tecnici del soccorso, predisporranno la presenza di almeno un Medico, all’interno di ogni sessione formativa proposta."
                    condizioni=""
                    prova=""
                />
            </main>
        </>
  );
};
export default disostruzione_pediatrica;