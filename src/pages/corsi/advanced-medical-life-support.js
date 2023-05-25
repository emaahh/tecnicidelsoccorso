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



const advanced_medical_life_support = () => {
    return (
        <>
            <Head>
                <title>Corso di Advanced Medical Life Support da Tecnici del Soccorso - Prevenzione Formazione Sicurezza</title>
                <meta name="description" content="Scopri i Tecnici del Supporto!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{backgroundColor:"white"}}>
                <Navbar/>
                <CorsoComponent 
                    nomeCorso="Advanced Medical Life Support." 
                    descCorso="Il corso Advanced Medical Life Support (AMLS) è il gold standard per la formazione in materia di valutazione e il trattamento medico di emergenza (del paziente internistico). Il corso AMLS NAEMT è supportato dalla NAEMSP (Associazione Nazionale dei Medici EMS) e incentiva l’uso dell’Algoritmo AMLS di Valutazione del Paziente, ovvero uno strumento sistematico per valutare e gestire le condizioni mediche urgenti che rappresentano le più comuni chiamate di soccorso per i sistemi di emergenza territoriale. Lo stesso metodo è ugualmente valido ed efficace anche nella funzione di triage che svolta quotidianamente in un dipartimento di emergenza.
                            <br/><br/>
                            Gli studenti imparano a riconoscere e gestire le comuni emergenze mediche attraverso scenari realistici basati sui casi che sfidano gli studenti ad applicare le loro conoscenze su pazienti altamente critici. Il corso enfatizza l’importanza della valutazione della scena, della raccolta anamnestica mediante efficaci espedienti mnemonici, della discussione di gruppo interattiva sulle potenziali strategie di trattamento e dell’esame fisico volto ad escludere sistematicamente o confermare le proprie ipotesi diagnostiche, abituando a considerare di volta in volta le singole possibilità e probabilità nel trattamento delle urgenze di tipo internistico.
                            <br/><br/>
                            Gli argomenti affrontati nel corso includono disturbi respiratori, patologie cardiovascolari, shock, stato mentale alterato, disordini neurologici, disturbi endocrino-metabolici, emergenze ambientali, malattie infettive, disturbi addominali, emergenze tossicologiche ed esposizione a materiali pericolosi.
                            <br/><br/>
                            L’AMLS è appropriato per soccorritori avanzati con approfondite conoscenze mediche (infermieri e medici) ed ha una durata di 2 giorni.
                            <br/><br/>
                            Il superamento del corso richiede una approfondita conoscenza del libro di testo, necessaria per la migliore comprensione dei meccanismi fisiopatologici, e lo sviluppo di abilità volte a identificare e riconoscere i segni clinici di patologia e ricercare gli elementi anamnestici rilevanti.
                            <br/><br/>
                            Il corso, oltre alla presentazione di casi clinici interattivi in aula, si sviluppa con le esercitazione in scenari simulati con paziente reale e con piccole discussioni di gruppo (Critical Thinking Stations). E’ richiesto in fine il superamento di un test scritto finale, che unito ad una buona performance durante il corso consente allo studente di conseguire il certificato di “Advanced Medical Life Support Provider” con una validità di 4 anni, riconosciuto a livello internazionale."
                    why=""
                    vantaggi=""
                    condizioni=""
                    prova=""
                />
            </main>
        </>
  );
};
export default advanced_medical_life_support;