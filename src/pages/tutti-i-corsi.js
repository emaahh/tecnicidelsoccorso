import Head from 'next/head'
import Navbar from '@/components/Navbar'
import * as React from 'react';
import Link from 'next/link'

//mui
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

//component
import CorsoCard from '@/components/CorsoCard';

const Tutti_i_corsi = () => {
  return (
    <>
        <Head>
            <title>I nostri corsi - Tecnici del Soccorso</title>
            <meta name="description" content="Conosci i Tecnici del Supporto" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main style={{backgroundColor:"white"}}>
            <Navbar />
            <Container maxWidth="xl">
            <br/>
            <br/>
            <Container maxWidth="xl">
                <h1 style={{fontWeight:"900", color:"#333333"}}>SCOPRI I NOSTRI CORSI</h1>
            </Container>
            
            <br/>
            <br/>
            <Container maxWidth="xl" style={{display:"flex", justifyContent: 'space-around', flexWrap: 'wrap'}}>
                
                <Link href="/corsi/esecutore-basic-life-support"><CorsoCard name="Esecutore Basic Life Support" desc="Il Corso di Esecutore Basic Life Support, disponibile nelle edizioni  “Heartsaver Courses” (Laico) e “healthcare Course” ( Sanitario ) fornisce una …" image="https://i.imgur.com/zflt8ZS.jpg"/></Link>
                <Link href="/corsi/istruttore-basic-life-support"><CorsoCard name="Istruttore Basic Life Support" desc="Il Corso di Istruttore Basic Life Support, da la possibilità a quanti volessero intraprendere l’esperienza della formazione, di essere abilitati…" image="https://i.imgur.com/x2vVbDd.jpg"/></Link>
                <Link href="/corsi/primo-soccorso-aziendale"><CorsoCard name="Primo Soccorso Aziendale" desc="Il Corso di Primo Soccorso Aziendale ha lo scopo di formare e informare i lavoratori che sono stati designati dal datore di lavoro…" image="https://i.imgur.com/f446luT.jpg"/></Link>
                <Link href="/corsi/esecutore-acls"><CorsoCard name="Esecutore ACLS" desc="Il Corso di Esecutore ACLS è un corso avanzato della didattica AHA. Questo corso sottolinea l’importanza della comunicazione e delle dinamiche all’interno del team…" image="https://i.imgur.com/QOai1ba.jpg"/></Link>
                <Link href="/corsi/istruttore-acls"><CorsoCard name="Istruttore ACLS" desc="Il Corso di Istruttore ACLS da la possibilità a quanti volessero intraprendere l’esperienza della formazione, di essere abilitati" image="https://i.imgur.com/7at5RbD.jpg"/></Link>
                <Link href="/corsi/trauma-practice-management"><CorsoCard name="Trauma Practice Management" desc="Corsi di Trauma Practice Management e Soccorso Sanitario in Ambiente Extraospedaliero, internamente strutturato dal team medico del Tecnici del Soccorso…" image="https://i.imgur.com/JgjYVIV.jpg"/></Link>
                <Link href="/corsi/disostruzione-pediatrica"><CorsoCard name="Disostruzione Pediatrica" desc="Il programma del corso di Disostruzione Pediatrica, è finalizzato alla formazione , informazione e aggiornamento del personale sanitario e laico, con lo scopo di sviluppare.." image="https://i.imgur.com/vharoYC.jpg"/></Link>
                <Link href="/corsi/assistente-bagnanti-fisa"><CorsoCard name="Assistente Bagnanti Fisa " desc="Il corso di Assistente Bagnanti Fisa abilita al controllo della sicurezza dei bagnanti negli impianti balneari marini , nelle piscine" image="https://i.imgur.com/KotprX1.jpg"/></Link>

            </Container>

            <br/>
            </Container>
        </main>
    </>
  )
};
export default Tutti_i_corsi;