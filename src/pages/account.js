import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import Navbar from '@/components/Navbar'

import PocketBase from 'pocketbase'
const pb = new PocketBase('https://tds-db.pockethost.io')


import Registrazione from '@/components/Registrazione';
import Login from '@/components/Login';



import Container from '@mui/material/Container';


export default function account() {


  const [changeform, setChangeform] = useState(true)
 
  const [user, setUser] = useState(pb.authStore.model);

  useEffect(() => {
    return pb.authStore.onChange((token, model) => {
      setUser(model);
    });
  }, []);

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
            user?
            <div>    


                    <h1 style={{fontWeight:"900", color:"#333333"}}>I TUOI DATI</h1>


                    <center>
                      <h2 style={{fontWeight:"900", color:"#333333"}}>Ciao! {pb.authStore.model.nome}</h2>

                      <button onClick={()=>{pb.authStore.clear()}}>Esci</button>
                    </center>


              </div> 
              :
              <div>
                {
                  changeform?
                    <div>
                      <Registrazione/>
                      <button onClick={()=>setChangeform(false)}>Hai già un account?</button>
                    </div>
                    :
                    <div>
                      <Login/>
                      <button onClick={()=>setChangeform(true)}>Non hai un account?</button>
                    </div>
                }

              </div>
              
          }

         
           
        </Container>
      </main>
    </>
  )
}