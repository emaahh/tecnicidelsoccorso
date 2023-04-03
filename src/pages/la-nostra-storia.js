import Head from 'next/head'
import Navbar from '@/components/Navbar'
import * as React from 'react';
import Link from 'next/link'

//mui
import Container from '@mui/material/Container';

//photoGallery
//photoGalley
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: 'https://i.imgur.com/5fh0g9h.jpg',
    thumbnail: 'https://i.imgur.com/5fh0g9h.jpg',
  },
  {
    original: 'https://i.imgur.com/mYasHsC.jpg',
    thumbnail: 'https://i.imgur.com/mYasHsC.jpg',
  },
  {
    original: 'https://i.imgur.com/ZE1qQTq.jpg',
    thumbnail: 'https://i.imgur.com/ZE1qQTq.jpg',
  },
  {
    original: 'https://i.imgur.com/ZTdSUVt.jpg',
    thumbnail: 'https://i.imgur.com/ZTdSUVt.jpg',
  },
  {
    original: 'https://i.imgur.com/uaFjIO6.jpg',
    thumbnail: 'https://i.imgur.com/uaFjIO6.jpg',
  },
  {
    original: 'https://i.imgur.com/IDnX4y9.jpg',
    thumbnail: 'https://i.imgur.com/IDnX4y9.jpg',
  },
];

const La_nostra_storia = () => {
  return (
    <>
        <Head>
            <title>La nostra storia - Tecnici del Soccorso</title>
            <meta name="description" content="Conosci i Tecnici del Supporto" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main style={{backgroundColor:"white"}}>
            <Navbar />
            <br/>
            <Container maxWidth="xl" style={{display:"flex", justifyContent: 'space-around', flexWrap: 'wrap'}}>
                <div style={{maxWidth:"50vh"}}>
                    <h1 style={{fontWeight:"900", color:"#333333"}}>Presentazione</h1><br/>
                    <p style={{color:"#333333"}}>
                        La ditta Tecnici del Soccorso di Marco Antonio Palmigiano, costituita nel mese di giugno del 2016 e
                        iscritta alla Camera di Commercio, Industria Artigianato e Agricoltura di Catania, Ragusa e Siracusa
                        e della Sicilia Orientale nel mese di luglio dello stesso anno, offre prodotti, servizi, formazione e
                        consulenza destinati all’ambito Sanitario, della Protezione Civile, Industriale e del Soccorso Tecnico.
                        <br/><br/>
                        Nel mese di luglio del 2016 la struttura diventa un International Training Center American Heart
                        Association per quanto concerne la prestigiosissima società scientifica internazionale per la diffusione, la
                        promozione e l’informazione della rianimazione cardiopolmonare di base ed avanzata in ambiente intra
                        ed extra ospedaliero. Viene accreditata, inoltre, all'Albo degli Enti abilitati all'erogazione dei corsi di
                        formazione finalizzati al rilascio dell'autorizzazione all'impiego dei Defibrillatori Automatici Esterni ai
                        sensi del D.M. 18 marzo 2011 e del Decreto dell'Assessore alla Salute della Regione Sicilia del 29
                        novembre 2016.
                        <br/><br/>
                        Tra i programmi formativi American Heart Association, Tecnici del Soccorso è accreditata per
                        l’erogazione dei corsi BLS, ACLS, PEARS e PALS.
                        Dal mese di Giugno 2018, la ditta Tecnici del Soccorso è stata riconosciuta come Training Center di
                        NAEMT (Società Scientifica Internazionale), per l’erogazione dei corsi PHTLS, per il trauma di base ed
                        avanzato.
                        <br/><br/>
                        Dal 2016 ad oggi la ditta Tecnici del Soccorso avvia la collaborazione all’interno della Scuola di
                        Specializzazione in Anestesia, Rianimazione, Terapia Intensiva e del Dolore dell’Università di Catania
                        per la vendita di Manuali Scientifici e abbigliamento tecnico sanitario da indossare durante le attività dei
                        Medici a bordo di velivoli da soccorso del 118.
                        <br/><br/>
                        Dal 2017 ad oggi la ditta eroga delle forniture di manuali scientifici e dispositivi di protezione individuale
                        (pocket mask) per l’informazione di un importante programma studio Aziendale ACLS all’Azienda
                        Ospedaliera per l’Emergenza Cannizzaro di Catania, organizzando – attraverso personale altamente
                        formato e specializzato dell’Azienda Cannizzaro – la formazione interna di dipendenti tra medici ed
                        infermieri dell’area Emergenza–Urgenza.
                        <br/><br/>
                        In occasione del G7 di Taormina, svoltosi nel mese di Maggio 2017, sono stati forniti i dispositivi di
                        protezione individuale di tipo 3 NBCR (Nucleare Batteriologico Chimico Radiologico) e i caschi per
                        l’emergenza al Servizio Urgenza Emergenza Sanitaria 118 Sicilia.
                        All’Azienda Ospedaliera Garibaldi di Catania sono stati, invece, forniti borsoni per l’emergenza, forbici
                        robin e ampollari per l’approvvigionamento della tensostruttura di decontaminazione, approntata in
                        occasione.
                        <br/><br/>
                        Tra il 2017 e il 2018 la ditta Tecnici del Soccorso ha fornito manuali scientifici e pocket mask a
                        prestigiosissime Case di Cura Catanesi, Associazioni di Volontariato, Medici Senza Frontiere e Club
                        Service.
                        <br/><br/>
                        Nel 2018 la ditta Tecnici del Soccorso diventa centro di assistenza autorizzato dell’Azienda Tedesca
                        Primedic, leader mondiale nel settore di defibrillatori.
                        <br/><br/>
                        Nel 2019 la ditta Tecnici del Soccorso ha erogato corsi BLS, formando 300 tra medici ed infermieri della
                        prestigiosissima Clinica Centro Cuore Morgagni Sud e Nord di Catania e Pedara.
                        <br/><br/>
                        Dal 2017 ad oggi partecipa come partner della ditta Di.Mar.Ca srl alla formazione BLS del personale Eni
                        impiegati nelle centrali siciliane ed estere.
                        <br/><br/>
                        Nel 2019 la ditta Tecnici del Soccorso ha formato numerosi studenti ed insegnanti di ogni ordine e grado.
                        <br/><br/>
                        Dal 2016 ad oggi, ha fornito per conto di Associazioni, Aziende Pubbliche e Private, numerosi prodotti
                        come placche per defibrillatori, Defibrillatori Semi Automatici Esterni, Divise da Soccorso, cassette
                        di Primo Soccorso e Dispositivi di Protezione Individuale di III categoria, in Sicilia e su tutto il
                        territorio nazionale.
                        <br/><br/>
                        Dal 2018 ad oggi la ditta ha erogato servizi di formazione in ambito di simulazione avanzata per corso
                        dell’Ordine dei Medici e degli Odontoiatri di Siracusa.
                        <br/><br/>
                        Dal 2019 la ditta Tecnici del Soccorso di Marco Antonio Palmigiano collabora fattivamente con il Centro
                        Studi Enti Locali S.p.a. come partnership nei progetti formativi finanziati.
                        <br/><br/>
                        Dal 2020 ad oggi, in occasione della pandemia da covid-19, la ditta ha investito sulla formazione
                        specialistica riguardante la vestizione e svestizione di D.P.I. per il personale sanitario intra-extra
                        ospedaliero.
                        <br/><br/>
                        Nel 2021, ha realizzato un percorso specialistico legato alla formazione del personale dedicato alle urgenze
                        presso l’Humanitas Istituto Clinico Catanese.
                        <br/><br/>
                        Dal 2022 ad oggi è stata partner nazionale italiano di un percorso sperimentale europeo per conto di
                        Groupama Assicurazioni in tema di primo soccorso e resilienza di comunità.
                        <br/><br/>
                        Continua la formazione avanzata e la simulazione anche nel 2023 in strutture sanitarie Pubbliche e Private.
                        <br/><br/>
                    </p>
                    <br/>
                    <h4 style={{color:"#333333"}}>
                        Il Titolare Tecnici<br/><br/>
                        del Soccorso<br/><br/>
                        f.to Marco A. Palmigiano
                    </h4>
                </div>
                <div style={{maxWidth:"49vh"}}>
                    <br/>
                    <br/>
                    <br/>
                    <ImageGallery items={images}/>
                </div>
            </Container>
        </main>
    </>
  );
};
export default La_nostra_storia;