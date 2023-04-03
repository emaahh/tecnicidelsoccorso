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



const istruttore_acls = () => {
    return (
        <>
            <Head>
                <title>Corso di Istruttore A.C.L.S. da Tecnici del Soccorso - Prevenzione Formazione Sicurezza</title>
                <meta name="description" content="Scopri i Tecnici del Supporto!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{backgroundColor:"white"}}>
                <Navbar/>
                <CorsoComponent 
                    nomeCorso="Istruttore A.C.L.S." 
                    descCorso="Il Corso di Istruttore Advanced Cardiovascular Life Support, da la possibilità a quanti volessero intraprendere l’esperienza della formazione, di essere abilitati ad erogare corsi in qualità di formatore ACLS, in base alle linee guida della didattica American Heart Association.
                    La durata del corso è di 24 ore, suddiviso in 3 giornate lavorative. Titolo di accesso è quello di Esecutore ACLS, che potrà essere conseguito direttamente presso i Tecnici del Soccorso, in uno dei corsi organizzati bimestralmente. Per scelta, il corso è aperto esclusivamente a personale Medico.
                    Diventando Istruttore ACLS si acquisiranno le procedure e gli standard previsti dall’American Heart Association, che permettono di rilasciare ai discenti il patentino abilitativo con validità internazionale.
                    L’Istruttore ACLS della TDS, entrerà a far parte di una rete solida di istruttori presenti su tutto il territorio siciliano, che gli offrirà l’opportunità di vivere importanti esperienze formative e di trasformare la passione dell’insegnamento delle manovre rianimatorie in un’attività professionalizzante in contatto con professionisti e studenti sull’intero territorio siciliano e non.
                    Al discente che prenderà parte al corso, verrà consegnato un manuale, delle schede riassuntive per lo svolgimento dei corsi, una pocket mask e l’accesso alla FAD necessaria al conseguimento del titolo di Istruttore.
                    A fine corso, il candidato “Istruttore ACLS”, dovrà sostenere una prova di valutazione finale suddivisa in:<br/>
                    - Test Scritto, con obiettivo minimo 80% delle risposte esatte<br/>
                    - Prova Pratica, di conduzione di una classe di discenti candidati alla qualifica di “Esecutore BLSD”.<br/>
                    L’attestato rilasciato ha la validità di 2 anni dalla data di rilascio.<br/>"
                    why="La frequenza del Corso, permette al discente di conseguire la qualifica di Istruttore Advanced Cardiovascular Life Support, con l’abilitazione all’erogazione di corsi certificati American Heart Association per la formazione di candidati Esecutore ACLS.
                    <br/><br/>
                    La qualifica conseguita, può trovare la seguente spendibilità:
                    <br/><br/>
                    - Validità ai fini Concorsuali<br/>
                    - Crediti Formativi Scolastici<br/>
                    - Curriculum personale<br/>"
                    vantaggi="<h4 className='minititle'>Standard qualitativi Elevati</h4>
                    <br/><br/>
                    l metodo adottato per il trasferimento di nozioni ai discenti è quello del “practice while watching”, ovvero esercitarsi su manichini mentre si osserva il video proposto direttamente dall’American Heart Association. Tale Metodologia permette un apprendimento standardizzato in qualunque parte del mondo.
                    <br/><br/>
                    <h4 className='minititle'>Personale Qualificato</h4>
                    <br/><br/>
                    In aula, il discente, potrà disporre di Istruttori altamente qualificati, appartenenti alla rete internazionale dei Faculty American Heart Association, con un bagaglio pluriennale nell’esperienza della formazione in ambito sanitario."
                    condizioni=""
                    prova=""
                />
            </main>
        </>
  );
};
export default istruttore_acls;