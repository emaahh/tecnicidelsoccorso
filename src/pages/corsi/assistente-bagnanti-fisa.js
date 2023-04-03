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



const assistente_bagnaanti_fisa = () => {
    return (
        <>
            <Head>
                <title>Corso di Assistente Bagnanti F.I.S.A. da Tecnici del Soccorso - Prevenzione Formazione Sicurezza</title>
                <meta name="description" content="Scopri i Tecnici del Supporto!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{backgroundColor:"white"}}>
                <Navbar/>
                <CorsoComponent 
                    nomeCorso="Assistente Bagnanti F.I.S.A." 
                    descCorso="La F.I.S.A. rilascia un brevetto professionale che permette di lavorare nelle piscine e negli stabilimenti balneari posti su laghi e mari che obbligatoriamente devono predisporre di un adeguato servizio di sorveglianza in acqua che per legge, deve essere affidata ai possessori del Brevetto di Assistente Bagnanti.
                            Il Brevetto ha validità biennale e sono previste due categorie di abilitazioni:
                            - Utilizzabile solo per il servizio in piscina e parchi acquatici. Può essere conseguito sostenendo le prove teorico-pratiche in piscina e di primo soccorso in presenza di un medico competente.
                            - Il brevetto più completo, abilita al servizio anche in ambito marino (oltre quanto previsto dai precedenti, esso può essere conseguito sostenendo le stesse prove del brevetto precedente e le prove aggiuntive in mare e teoriche alla presenza di un ufficiale della Capitaneria di Porto.
                            <br/><br/>
                            MODALITÀ DI ISCRIZIONE
                            <br/><br/>
                            Il candidato dovrà sottoscrivere il modulo di iscrizione online su questo sito. Nel caso di minorenni sarà necessario presentare successivamente una istanza aggiuntiva di autorizzazione da parte di un genitore o di chi ne fa le veci. L’età minima per accedere al corso è di 16 anni al momento della compilazione della domanda e non più di 55 anni. Sarà necessario non aver riportato condanne penali passate in giudicato per reati non colposi a pene detentive superiori a un anno ovvero a pene che comportino l’interdizione dai pubblici uffici superiori ad un anno.
                            <br/><br/>
                            Documenti da presentare il primo giorno del corso:
                            <br/><br/>
                            Certificato di medicina sportiva non agonistica con “Idoneità psicofisica per attività di assistente bagnanti” e valutazione dell’ECG. che attesti un visus di almeno 8/10 per occhio anche con correzione di lenti, una adeguata funzionalità dei quattro arti e che la persona non presenti evidenti deficit uditivi. In caso si consiglia di farsi compilare dal medico il Mod.CMNA certificato medico non agonistico.Due fotografie formato tessera (una possibilmente in formato digitale)Dichiarazione sostitutiva di certificazione e atto notorio Mod.DSC DICHIARAZIONE SOSTITUTIVAFotocopia documento di identità"
                    why=""
                    vantaggi=""
                    condizioni="Saper nuotare Sana e robusta costituzione da verificare all’atto dell’iscrizione mediante certificato medico Superamento prova di idoneità al corso, tesa ad accertare il possesso dell’adeguata acquaticità e abilità natatoria"
                    prova="Tuffo: saper eseguire correttamente un tuffo di entrata in acqua dall’altezza circa di 1 mt.Nuoto: nuotare correttamente per almeno 50m crawl; nuotare correttamente per almeno 25m rana; nuotare correttamente per almeno 25m una terza nuotata a sceltaRecupero: recuperare un oggetto a 3 m di profondità o nuotare in apnea subacquea per almeno 12mGalleggiamento: mantenere per almeno 20″ la posizione verticale mantenendo il capo e le mani fuori acqua con il solo sostegno del movimento di gambe"
                />
            </main>
        </>
  );
};
export default assistente_bagnaanti_fisa;