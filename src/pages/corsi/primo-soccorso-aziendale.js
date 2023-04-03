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



const primo_soccorso_aziendale = () => {
    return (
        <>
            <Head>
                <title>Corso di Primo Soccorso Aziendale da Tecnici del Soccorso - Prevenzione Formazione Sicurezza</title>
                <meta name="description" content="Scopri i Tecnici del Supporto!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{backgroundColor:"white"}}>
                <Navbar/>
                <CorsoComponent 
                    nomeCorso="Istruttore B.L.S." 
                    descCorso="Il Corso di primo soccorso aziendale ha lo scopo di formare\informare i lavoratori che sono stati designati dal datore di lavoro, a tutte le procedure da mantenere in caso di emergenza sanitaria. Il corso, rispetta quelli che sono i requisiti previsti dal Decreto Ministeriale n. 388 del 15 luglio 2003, recando disposizioni in materia di pronto soccorso aziendale in conformità a quanto previsto dall’art. 45 del D. Lgs. 81/08 D.Lgs 81/08 in ambito di sicurezza sui luoghi di lavoro.
                    Il corso ha l’obiettivo di formare e informare gli addetti al pronto soccorso aziendale, in maniera efficace ed esauriente, trasferendo ai partecipanti le opportune conoscenze di natura tecnica nonché le necessarie abilità di natura pratica.
                    <br/><br/>
                    Il corso Primo Soccorso rivolto agli Addetti al Primo Soccorso di Aziende del:<br/>
                    <h4 className='minititle'>Gruppo A:</h4>
                    - Aziende od unità produttive con obbligo di notifica di cui all’art.2 del D.L.vo 334/99 (aziende a rischio di incidenti rilevanti connessi a determinate sostanze pericolose): centrali termoelettriche e laboratori nucleari di cui al D.L.vo 230/95; aziende estrattive e altre attività minerarie di cui al D.L.vo 624/96, lavori in sotterraneo (D.P.R. 320/56) e le aziende che fabbricano esplosivi, polveri e munizioni;
                    oppure<br/>
                    - Aziende od unità produttive con oltre 5 lavoratori indicate nelle statistiche INAIL del triennio precedente aggiornate al 31 dicembre con indice infortunistico di inabilità permanente superiore a 4.
                    oppure<br/>
                    - Aziende del comparto dell’agricoltura con oltre 5 lavoratori a tempo indeterminato
                    <br/><br/>
                    <h4 className='minititle'>Gruppo B:</h4>
                    - Aziende o unità produttive con almeno 3 lavoratori che non rientrino nel gruppo A.
                    <br/><br/>
                    <h4 className='minititle'>Gruppo C:</h4><br/>
                    - Aziende con meno di 3 lavoratori che non rientrino nel gruppo A."
                    why="La frequenza del Corso, permette al discente di conseguire la opportune conoscenze dettate dalle attuali normative sulla sicurezza nei luoghi di lavoro."
                    vantaggi="<h4 className='minititle'>Standard qualitativi Elevati</h4>
                    <br/><br/>
                    Il corso permette di acquisire attraverso metodologie dinamiche di insegnamento, le nozioni previste dalla normativa nazionale in ambito di sicurezza.
                    <br/><br/>
                    <h4 className='minititle'>Personale Qualificato</h4>
                    <br/><br/>
                    I Tecnici del soccorso, predisporranno la presenza di formatori Medici, all’interno di ogni sessione formativa proposta."
                    condizioni=""
                    prova=""
                />
            </main>
        </>
  );
};
export default primo_soccorso_aziendale;