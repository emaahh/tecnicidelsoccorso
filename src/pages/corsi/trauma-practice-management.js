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



const trauma_practice_management = () => {
    return (
        <>
            <Head>
                <title>Corso di Trauma Practice Management da Tecnici del Soccorso - Prevenzione Formazione Sicurezza</title>
                <meta name="description" content="Scopri i Tecnici del Supporto!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{backgroundColor:"white"}}>
                <Navbar/>
                <CorsoComponent 
                    nomeCorso="Trauma Practice Management" 
                    descCorso="Il corso Trauma Practice Management e Soccorso Sanitario in Ambiente Extraospedaliero, interamente strutturato dal team medico Tecnici del Soccorso, è finalizzato alla formazione e all’aggiornamento del personale sanitario e laico, con lo scopo di sviluppare le competenze in termini di conoscenze teoriche e abilità pratiche per la gestione del soccorso extraospedaliero in emergenza-urgenza.
                    Il corso ha l’obiettivo di coniugare una parte teorica con una prevalente attività di pratica applicativa, al fine di soddisfare precise esigenze di formazione espresse in ambito di soccorso extraospedaliero.
                    I corsi sono indirizzati a medici specializzandi e specialisti, studenti del corso di laurea di medicina e degli altri corsi di laurea sanitari, infermieri, ostetriche, soccorritori che operano nei dipartimenti di emergenza/urgenza intra ed extra ospedaliera, nonché al personale laico.
                    Il corsi avranno una durata di 8 ore, su un’unica giornata formativa e prevederà una sezione teorica frontale e un’ampia sezione pratica."
                    why="La frequenza del Corso, permette al discente di acquisire le procedure operative per il trattamento di pazienti politraumatizzati, in situazioni di emergenza extraospedaliere attraverso sessioni teorico\pratiche e con simulazione di casi reali.<br/>
                    I nominativi dei partecipanti verranno registrati persso banca dati C.O.118 di Catania"
                    vantaggi="<h4 className='minititle'>Standard qualitativi Elevati</h4>
                    <br/><br/>
                    ll metodo adottato per il trasferimento di nozioni ai discenti è quello dell’avvicendamento di lezioni teoricopratiche con l’impiego di figuranti reali che simuleranno situazioni di maxiemergenze ed emergenze exstraospedaliere.
                    <br/><br/>
                    <h4 className='minititle'>Personale Qualificato</h4>
                    <br/><br/>
                    Durante il corso, il discente, potrà disporre di Istruttori altamente qualificati con decennale esperienza nell’ambito dell’emergenza e della formazione in ambito sanitario.<br/>
                    I docenti presenti saranno esclusivamente medici, infermieri e soccorritori."
                    condizioni=""
                    prova=""
                />
            </main>
        </>
  );
};
export default trauma_practice_management;