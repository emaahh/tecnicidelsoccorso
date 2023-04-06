import React, {useState} from 'react';
import Head from 'next/head'
import Navbar from '@/components/Navbar'

import { getCookie, setCookie, deleteCookie } from 'cookies-next';


import Registrazione from '@/components/Registrazione';
import Login from '@/components/Login';

import { useAppContext } from '../context/state';

import Container from '@mui/material/Container';


export default function account() {
  const mycontext = useAppContext();

  const [changeform, setChangeform] = useState(true)

  const data = getCookie('data')
  if(data){
    mycontext.setCurrentUser(JSON.parse(data))
  }

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
        <br/>
        <Container maxWidth="xl">
          
          {
            mycontext.currentUser!='sloggato'?
              <>    
                <Container maxWidth="xl">

                  <br/>
                  <br/>
                  <h1 style={{fontWeight:"900", color:"#333333"}}>I TUOI DATI</h1>
                  <br/>
                  <br/>

                    <center>
                      <h2 style={{fontWeight:"900", color:"#333333"}}>Ciao! {mycontext.currentUser.Nome}</h2>

                      <button onClick={()=>{deleteCookie("data"), mycontext.setCurrentUser("sloggato")}}>Esci</button>
                    </center>

                </Container>
                
                


              </> 
              :
              <>
                {
                  changeform?
                    <>
                      <Registrazione/>
                      <button onClick={()=>setChangeform(false)}>Hai già un account?</button>
                    </>
                    :
                    <>
                      <Login/>
                      <button onClick={()=>setChangeform(true)}>Non hai un account?</button>
                    </>
                }

              </>
              
          }

         
           
        </Container>
        
      </main>
    </>
  )
}