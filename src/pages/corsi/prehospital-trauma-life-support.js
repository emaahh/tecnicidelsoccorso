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



const prehospital_trauma_life_support = () => {
    return (
        <>
            <Head>
                <title>Corso di Prehospital Trauma Life Support (PHTLS) da Tecnici del Soccorso - Prevenzione Formazione Sicurezza</title>
                <meta name="description" content="Scopri i Tecnici del Supporto!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{backgroundColor:"white"}}>
                <Navbar/>
                <CorsoComponent 
                    nomeCorso="Prehospital Trauma Life Support (PHTLS)" 
                    descCorso="Il Prehospital Trauma Life Support (PHTLS) della NAEMT è riconosciuto in tutto il mondo come il
                        principale programma di formazione per il trattamento del paziente traumatizzato in emergenza nella
                        fase preospedaliera del soccorso. La missione del PHTLS è quella di promuovere l’eccellenza nella
                        gestione dei pazienti traumatologici da parte di tuttii professionisti coinvolti nel soccorso preospedaliero
                        del trauma. Il PHTLS è stato sviluppato dalla NAEMT in collaborazione con l’American College of
                        Surgeons - Committee on Trauma. L’ACS-COT fornisce la direzione medica e la supervisione dei
                        contenuti per il programma PHTLS.
                        <br/><br/>
                        I corsi PHTLS migliorano la qualità della cura del trauma e ne riducono la mortalità. Il programma si
                        basa su una filosofia che identifica il paziente traumatologico multi-sistemico quale una entità unica con
                        caratteristiche specifiche di trattamento. Questo significa che l’approccio del paziente traumatizzato
                        differisce dalle modalità di trattamento a volte indicate come classiche o tradizionali.
                        <br/><br/>
                        Il PHTLS promuove infatti il Critical Thinking, il “ragionamento critico” come elemento fondante di una
                        assistenza di qualità. Questo si basa sulla convinzione che, data una buona base di nozioni e la
                        conoscenza dei principi chiave, i soccorritori professionisti siano in grado di prendere decisioni
                        ragionate riguardo all’assistenza ai pazienti.
                        <br/><br/>
                        Il corso PHTLS, come il suo manuale, viene continuamente aggiornato e revisionato, in conformità con
                        le raccomandazioni ATLS e in base ai progressi o alle modifiche osservate sul campo, ma anche
                        tenendo conto delle opinioni dei partecipanti ai corsi.
                        <br/><br/>
                        Sebbene il PHTLS sia nato negli Stati Uniti, ha continuato ad evolversi diffondendosi in molti altri paesi
                        ed è diventando il programma didattico di riferimento nelle molte nazioni che lo hanno acquisito come
                        standard. L’Italia è stata uno dei primi paesi europei ad adottare questo programma didattico,fin dal
                        lontano 1998.
                        <br/><br/>
                        Il corso utilizza il manuale PHTLS, conosciuto ed apprezzato a livello internazionale, che tatta i
                        seguenti argomenti:<br/>
                         &nbsp;&nbsp;- Fisiologia della vita e della morte<br/>
                         &nbsp;&nbsp;- Valutazione della scena e del paziente<br/>
                         &nbsp;&nbsp;- Gestione delle vie aeree<br/>
                         &nbsp;&nbsp;- Respirazione, ventilazione e ossigenazione<br/>
                         &nbsp;&nbsp;- Circolazione, emorragia e shock<br/>
                         &nbsp;&nbsp;- Pazienti particolari e con disabilità<br/>
                         &nbsp;&nbsp;- Casi simulati di pazienti<br/>
                        <br/><br/>
                        PHTLS è il gold standard mondiale nell’educazione al trattamento preospedaliero del trauma e viene
                        attualmente insegnato in 64 paesi. PHTLS è adatto a medici ed infermieri coinvolti attivamente nel
                        soccorso preospedaliero del trauma."
                    why=""
                    vantaggi=""
                    condizioni="
                    - Superamento degli esami pratici e del test finale, con un punteggio minimo del 76%.<br/><br/>
                    - Numero di giorni: 2 giorni.<br/><br/>
                    - Validità della certificazione internazionale rilasciata: 4 anni.<br/><br/>
                    - Docenti: Istruttori PHTLS esperti.<br/><br/>"
                    prova=""
                />
            </main>
        </>
  );
};
export default prehospital_trauma_life_support;