import Head from 'next/head'
import Navbar from '@/components/Navbar'


//mui
import Container from '@mui/material/Container';
import { Paper, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Chip from '@mui/material/Chip';
//carosello
import Carousel from 'react-material-ui-carousel'
//facebook
import { FacebookEmbed } from 'react-social-media-embed';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tecnici del Soccorso - Prevenzione Formazione Sicurezza</title>
        <meta name="description" content="Scopri i Tecnici del Supporto!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{backgroundColor:"white"}}>
        <Navbar/>
        <Container maxWidth="xl">

          <br/>
          <br/>
          <h1 style={{fontWeight:"900", color:"#333333"}}>BENVENUTI IN TECNICI DEL SOCCORSO</h1>
          <Container maxWidth="sm" style={{marginLeft:"0", paddingLeft:"0"}}>
            <h3 style={{fontWeight:"100", color:"#333333"}}>VOGLIAMO RAPPRESENTARE QUEL LUOGO IDEALE PER LA PREVENZIONE, DOVE CI SI PUÒ FORMARE IN MANIERA SERIA E CON ALTI STANDARD QUALITATIVI.</h3>
          </Container>
          <br/>
          
          <br/>
          <br/>

          <Carousel swipe={true} navButtonsAlwaysVisible={true}>
            <Paper style={{borderRadius:"15px", overflow:"hidden", height:"45vh"}}>
              
                <img style={{height:'45vh', width:'100%', objectFit:"cover"}} src='https://i.imgur.com/kH1BcrW.jpg'/>
                
                <div className='homeCorsoCard'>
                  <h2>Assistente bagnanti</h2>
                  <p className='corsoDesc'>Il corso di Assistente Bagnanti Fisa abilita al controllo della sicurezza dei bagnanti negli impianti balneari marini , nelle piscine</p>
                  <br/>
                  <Chip color="error" label="Prenotati!" onClick={()=>alert('dd')} style={{fontSize:"17px", fontWeight:"bold", padding:"15px"}}/>
                </div>

              
            </Paper>

            <Paper style={{borderRadius:"15px", overflow:"hidden", height:"45vh"}}>
              
                <img style={{height:'45vh', width:'100%', objectFit:"cover"}} src='https://i.imgur.com/pAgzzmQ.jpg'/>
                
                <div className='homeCorsoCard'>
                  <h2>Esecutore B.L.S.</h2>
                  <p className='corsoDesc'>Il Corso di Esecutore Basic Life Support, disponibile nelle edizioni  “Heartsaver Courses” (Laico) e “healthcare Course” ( Sanitario ) fornisce una …</p>
                  <br/>
                  <Chip color="error" label="Prenotati!" onClick={()=>alert('dd')} style={{fontSize:"17px", fontWeight:"bold", padding:"15px"}} />
                </div>

              
            </Paper>

            <Paper style={{borderRadius:"15px", overflow:"hidden", height:"45vh"}}>
              
              <img style={{height:'45vh', width:'100%', objectFit:"cover"}} src='https://i.imgur.com/VH4VkPa.jpg'/>
              
              <div className='homeCorsoCard'>
                <h2>Primo Soccorso Aziendale</h2>
                <p className='corsoDesc'>Il Corso di Primo Soccorso Aziendale ha lo scopo di formare e informare i lavoratori che sono stati designati dal datore di lavoro…</p>
                <br/>
                <Chip color="error" label="Prenotati!" onClick={()=>alert('dd')} style={{fontSize:"17px", fontWeight:"bold", padding:"15px"}} />
              </div>

            
          </Paper>

            
          </Carousel>

          <br/>
          <br/>

          <center><h1 style={{fontWeight:"900", color:"#333333"}}>UN’ECCELLENZA ITALIANA</h1></center>
          <br/>
          <Container maxWidth="xl" style={{display:"flex", justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
            <p style={{color:"#333333", maxWidth:"40vh", fontSize:"18px"}}>
              <strong>L’esperienza decennale</strong> nell’ambito della Formazione Sanitaria e della Sicurezza sui luoghi di lavoro, permette di offrire un vasto elenco di corsi altamente professionalizzanti utili ad ampliare le conoscenze e la professionalità di chi intende approcciarsi alle attività formative proposte.
              <br/>
              <br/>
              <strong>Personale altamente qualificato</strong>, associato all’elevata <strong>qualità del prodotto</strong> formativo offerto, permette oggi di inquadrare i Tecnici del Soccorso tra i più <strong>affidabili</strong> nel settore della formazione.
              <br/>
              <br/>
            </p>
            
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftecnicidelsoccorso%2Fphotos%2Fa.1122303901129162%2F3253483844677813%2F&show_text=true&width=500" width="500" height="295" style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

          </Container>


          <br/>
          <br/>
          <br/>
          <center><h2 style={{color:"#333333",fontWeight:"900"}}>I NOSTRI PARTNER</h2></center>
          <br/>
          <div className='partner'>
            <img src='https://i.imgur.com/7xissMx.jpg'/>
            <img src='https://i.imgur.com/czSBlI8.jpg'/>
            <img src='https://i.imgur.com/uEYo8aH.jpg'/>
            <img src='https://i.imgur.com/qskGRGo.jpg'/>
            <img src='https://i.imgur.com/W6vO7Yv.png'/>
            <img src='https://i.imgur.com/3n9mMWz.jpg'/>
          </div>

        </Container>
      </main>
    </>
  )
}
