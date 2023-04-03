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



const Esecutore_basic_life_support = () => {
    return (
        <>
            <Head>
                <title>Corso di Esecutore Basic Life Support Defibrillation da Tecnici del Soccorso - Prevenzione Formazione Sicurezza</title>
                <meta name="description" content="Scopri i Tecnici del Supporto!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{backgroundColor:"white"}}>
                <Navbar/>
                <CorsoComponent 
                    nomeCorso="Esecutore Basic Life Support Defibrillation" 
                    descCorso="Il Corso di Esecutore Basic Life Support Defibrillation, disponibile nelle edizioni “Heartsaver Courses” (Laico) e “Healthcare Course” (Sanitario) fornisce una formazione standardizzata a livello internazionale, nell’ambito della Rianimazione Cardiopolmonare, secondo le linee guida American Heart Association.
                                <br/><br/>
                                Gli istruttori, con l’aiuto anche di video esplicativi e attraverso il metodo del “practice while watching” (ovvero esercitarsi su manichini mentre si osserva il video proposto), saranno a completa disposizione del discente per spiegare quali procedure bisogna seguire in diverse situazioni di urgenza.
                                <br/><br/>
                                Il corso prevede inoltre un’intensa attività esercitarva con l’ausilio di manichini e attrezzatura di primo soccorso (maschere, palloni di ventilazione, ecc.), tra cui anche Defibrillatori Semi Automatici Esterni (Trainer DAE) che permetteranno di rendere quanto pi˘ reale possibile la simulazione di un Arresto Cardiaco.
                                <br/><br/>
                                Al discente che prender‡ parte al corso, verrà consegnato un manuale interamente a colori, delle schede riassuntive delle procedure di Rianimazione Cardio Polmonare ed una pocket mask.
                                <br/><br/>
                                A fine corso, il candidato “Esecutore BLS”, dovrà sostenere una prova di valutazione finale suddivisa in:
                                - Test Scritto, con obiettivo minimo 80% delle risposte esatte
                                - Prova Pratica, obiettivo minimo 100% della performance di RCP per Adulto e Lattante.
                                <br/><br/>
                                Il corso, accreditato all’Assessorato alla Salute della Regione Siciliana, rilascia un attestato ed una card della validità di 2 anni."
                    why="
                    La frequenza del Corso, permette al discente di conseguire la qualifica di Operatore Basic Life Support, con l’abilitazione all’utilizzo del Defibrillatore Automatico Esterno (DAE). La qualifica conseguita, può trovare la seguente spendibilità :
                    <br/><br/>
                    - Validità ai fini concorsuali <br/>
                    - Validità per strutture sportive (ai sensi del decreto balduzzi)"
                    vantaggi="
                    <h4 className='minititle'>Standard qualitativi Elevati</h4>
                    <br/><br/>
                    Il metodo di insegnamento “practice while watching”,brevettato dall’American Heart Association, permette di garantire uno standard internazionalmente valido.
                    <br/><br/>
                    <h4 className='minititle'>Personale Qualificato</h4>
                    <br/><br/>
                    Il metodo adottato per il trasferimento di nozioni ai discenti, è quello del “practice while watching” ovvero esercitarsi su manichini mentre si osserva il video proposto direttamente dall’American Heart Association. Tale Metodologia permette un apprendimento standardizzato in qualunque parte del mondo.
                    I Tecnici del soccorso, predisporranno la presenza di almeno un Medico, all’interno di ogni sessione formativa proposta."
                    condizioni=""
                    prova=""
                />
            </main>
        </>
  );
};
export default Esecutore_basic_life_support;