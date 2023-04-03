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



const esecutore_acls = () => {
    return (
        <>
            <Head>
                <title>Corso di Esecutore A.C.L.S. da Tecnici del Soccorso - Prevenzione Formazione Sicurezza</title>
                <meta name="description" content="Scopri i Tecnici del Supporto!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{backgroundColor:"white"}}>
                <Navbar/>
                <CorsoComponent 
                    nomeCorso="Esecutore A.C.L.S." 
                    descCorso="
                    Il Corso di Esecutore Advanced Cardiovascular Life Support, sottolinea líimportanza della comunicazione e delle dinamiche allíinterno del team di assistenza nonchè del trattamento avanzato dell’immediato post-arresto cardiaco. Il corso ACLS affronta anche argomenti quali la gestione delle vie aeree, il trattamento avanzato dell’Arresto Cardiaco e la relativa farmacologia.
                    <br/><br/>
                    Nel corso ACLS, le competenze sono trasferite attraverso sessioni formative in stazioni di apprendimento e di valutazione, in cui sono presentati scenari basati su casi. Il corso si conclude con successo se vengono dimostrate competenze in tutte le stazioni di apprendimento e viene superata una prova pratica su RCP, AED, ventilazione con sistema pallone-maschera, nonchè una verifica su Megacode e un esame scritto.
                    <br/><br/>
                    I corsi ACLS American Heart prevedono il rilascio, a seguito del superamento della prova teorico/pratica, di un tesserino abilitante con validità internazionale, che dimostrerà la capacità di gestire al meglio il post-arresto cardiaco, utile anche per l’acquisizione di punteggio nei concorsi pubblici.
                    Il corso dura circa 10-12 ore, incluse le esercitazioni e la verifica delle competenze e a fine corso, il candidato “Esecutore ACLS”, dovrà sostenere una prova di valutazione finale suddivisa in:<br/>
                    - Test Scritto, con obiettivo minimo 80% delle risposte esatte<br/>
                    - Prova Pratica, su maninichino, in uno degli scenari “Megacode”.<br/>
                    L’attestato rilasciato ha la validità di 2 anni dalla data di rilascio.<br/>"
                    why="La frequenza del Corso, permette al discente di conseguire la qualifica di Ececutore Advanced Cardiovascular Life Support, certificata American Heart Association.
                    <br/><br/>
                    La qualifica conseguita, può trovare la seguente spendibilità:
                    <br/><br/>
                    - Validità ai fini Concorsuali;<br/>
                    - ECM (se trattasi di corso accreditato);<br/>
                    - Curriculum personale.<br/>"
                    vantaggi="<h4 className='minititle'>Standard qualitativi Elevati</h4>
                    <br/><br/>
                    l metodo adottato per il trasferimento di nozioni ai discenti è quello del “practice while watching”, ovvero esercitarsi su manichini mentre si osserva il video proposto direttamente dall’American Heart Association. Tale Metodologia permette un apprendimento standardizzato in qualunque parte del mondo.
                    Personale Qualificato<br/>
                    In aula, il discente, potrà disporre di Istruttori esclusivamente medici di Area Critica, altamente qualificati, appartenenti alla rete internazionale dei Istruttori ACSL American Heart Association, con un bagaglio pluriennale nell’esperienza della formazione in ambito sanitario."
                    condizioni=""
                    prova=""
                />
            </main>
        </>
  );
};
export default esecutore_acls;