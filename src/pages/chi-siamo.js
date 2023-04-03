import Head from 'next/head'
import Navbar from '@/components/Navbar'
import * as React from 'react';
import Link from 'next/link'


//mui
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

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



const Chi_siamo = () => {
  return (
    <>
      <Head>
        <title>Chi siamo - Tecnici del Soccorso</title>
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
            <h1 style={{fontWeight:"900", color:"#333333"}}>CHI SIAMO</h1>
          </Container>
          
          <br/>
          <br/>
          <Container maxWidth="xl" style={{display:"flex", justifyContent: 'space-around', flexWrap: 'wrap'}}>
            <h3 style={{fontWeight:"100", color:"#333333", maxWidth:"50vh"}}>
              Tecnici del Soccorso nasce nel 2016 con l'obiettivo di commercializzare prodotti per la sicurezza sul lavoro e il settore sanitario e diffondere la formazione in questi ambiti. 
              <br/><br/>
              L'azienda è gestita da un pool di medici, infermieri e professionisti del soccorso e ad oggi conta più di 20 specialisti distribuiti in tutta la Sicilia. 
              <br/><br/>
              Nel luglio 2016, l'azienda è diventata un International Training Center dell'American Heart Association, aumentando la sua reputazione nella formazione in Basic Life Support e Advanced Cardiovascular Life Support. 
              <br/><br/>
              Nel giugno 2017, l'azienda è stata accreditata all'albo degli enti abilitati all'erogazione dei corsi di formazione per l'uso dei Defibrillatori Automatici Esterni.
              <br/><br/>
            </h3>
            <img style={{width:"50vh", objectFit:"contain", borderRadius:"15px", height: 'fit-content'}} src='https://www.tecnicidelsoccorso.it/wp-content/uploads/2019/04/48364169_2896576800368521_8691704237215711232_o-1024x576.jpg'/>
          </Container>

          <br/>

          <Container maxWidth="xl" style={{display:"flex", justifyContent: 'space-around', flexWrap: 'wrap'}}>
            <Link href="/la-nostra-storia" style={{padding:"10px"}}><Button variant="contained" style={{padding:"15px", borderRadius:"15px", backgroundColor:"#bf1e2e"}}><p style={{color:"white"}}>Tutta la nostra storia</p></Button></Link>
            <Link href="" style={{padding:"10px"}}><Button variant="contained" style={{padding:"15px", borderRadius:"15px", backgroundColor:"#bf1e2e"}}><p style={{color:"white"}}>(in arrivo) I nostri training site</p></Button></Link>
          </Container>

          <br/>
          <br/>
          <br/>
          <br/>

          <Container maxWidth="xl" style={{display:"flex", justifyContent: 'space-around', flexWrap: 'wrap'}}>
            <div style={{maxWidth:"350px"}}>
              <center>
                <h1 style={{fontWeight:"900"}}>PROFESSIONALITÀ</h1>
                <p>Con noi potrai sempre disporre di personale altamente qualificato e con decennale esperienza nell’ambito della formazione e dell’emergenza.</p>
              </center>
              <br/> <br/>
            </div>
            <div style={{maxWidth:"300px"}}>
              <center>
                <h1 style={{fontWeight:"900"}}>AFFIDABILITÀ</h1>
                <p>Il cliente verrà seguito costantemente, da personale altamente qualificato pronto a rispondere ad ogni richiesta.</p>
              </center>
              <br/> <br/>
            </div>
            <div style={{maxWidth:"300px"}}>
              <center>
                <h1 style={{fontWeight:"900"}}>QUALITÀ</h1>
                <p>I prodotti offerti dai Tecnici del soccorso, rispondono ai migliori standard qualitativi presenti sul mercato</p>
              </center>
              <br/> <br/>
            </div>
          </Container>

          <br/><br/><br/>
          <ImageGallery items={images}/>

        </Container>
      </main>
    </>
  );
};
export default Chi_siamo;