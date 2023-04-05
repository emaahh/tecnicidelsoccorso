import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Navbar from '@/components/Navbar'

import { setCookie } from 'cookies-next';


import { useAppContext } from '../context/state';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const Registrazione = () => {
    const mycontext = useAppContext();

    const [showPassword, setShowPassword] = React.useState(false);
    const [showpartitaIva, setShowpartitaIva] = React.useState(false);
    const [showcodicefiscale, setShowcodicefiscale] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    function checkIfEmail(str) {
        // Regular expression to check if string is email
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
      
        return regexExp.test(str);
    }
    function containsOnlyNumbers(str) {
        return /^\d+$/.test(str);
    }
      
      
  
    const [loading, setLoading] = React.useState(true);
    function handleClick() {
      setLoading(true);
    }

    const [error, setError] = useState('Inserire i dati mancanti e cliccare su "Controlla dati"')
    

    const [Nome, setNome] = useState("")
    const updateNome = event => {setNome(event.target.value)};

    const [Cognome, setCognome] = useState("")
    const updateCognome = event => {setCognome(event.target.value)};

    const [Email, setEmail] = useState("")
    const updateEmail = event => {setEmail(event.target.value.trim())};

    const [Password, setPassword] = useState("")
    const updatePassword = event => {setPassword(event.target.value.trim())};

    const [Fiscale, setFiscale] = useState("")
    const updateFiscale = event => {setFiscale(event.target.value.trim())};
    
    const [Iva, setIva] = useState("")
    const updateIva = event => {setIva(event.target.value.trim())};

    const [Univoco, setUnivoco] = useState("")
    const updateUnivoco = event => {setUnivoco(event.target.value.trim())};

    const [Pec, setPec] = useState("")
    const updatePec = event => {setPec(event.target.value.trim())};

    const [Legale, setLegale] = useState("")
    const updateLegale = event => {setLegale(event.target.value)};

    const [professione, setProfessione] = useState("");
    const updateProfessione = (event) => {setProfessione(event.target.value);};


    const CheckDati = () => {
        if(checkIfEmail(Email) == true){
            if(checkIfEmail(Pec) == true){
              if(Nome==""){
                setError("Inserire un Nome")
              }
              else if(Cognome==""){
                setError("Inserire un Cognome")
              }
              else if(Email.trim()==""){
                setError("Inserire una Email")
              }
              else if(Password.trim()==""){
                setError("Inserire una Password")
              }
              else if(showpartitaIva == true && Iva.trim()==""){
                setError("Inserire la Partita IVA")
              }
              else if(showcodicefiscale == true && Fiscale.trim()==""){
                setError("Inserire il Codice Fiscale")
              }
              else if(showcodicefiscale==false && showpartitaIva==false){
                setError("Selezione Codice Fiscale e/o Partita IVA")
              }
              else if(Univoco.trim()==""){
                setError("Inserire il Codice Univoco")
              }
              else if(Pec.trim()==""){
                setError("Inserire la PEC")
              }
              else if(Legale==""){
                setError("Inserire la Sede Legale")
              }
              else if(professione==""){
                setError("Seleziona la tua Professione")
              }
              else if(Iva!="" && containsOnlyNumbers(Iva)==false){
                setError("La Partita IVA richiede solo numeri")
              }else {
                Sign()
                setError("")
                setRisposta("")
      
              }
                
            }else{
                setError("Inserire una PEC valida")
            }
        }else{
            setError("Inserire un email valida")
        }
    }


    const [risposta, setRisposta] = useState();
    
    const Sign = () => {
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(
          {
            Nome:Nome, 
            Cognome:Cognome,
            Email:Email,
            Password:Password,
            Fiscale:Fiscale,
            Iva:Iva,
            Univoco:Univoco,
            Pec:Pec,
            Legale:Legale,
            professione:professione
          })
      };
      fetch('/api/account/registrazione', requestOptions)
          .then(response => response.json())
          .then(data => {
            if(!data.risposta){
              setRisposta('esiste già un account con questa Email')
            }else{
              setCookie('data', {
                Nome:Nome, 
                Cognome:Cognome,
                Email:Email,
                Password:Password,
                Fiscale:Fiscale,
                Iva:Iva,
                Univoco:Univoco,
                Pec:Pec,
                Legale:Legale,
                professione:professione
              }, {maxAge:new Date().getTime() + (60*60*60*60*1000)});

              mycontext.setCurrentUser({
                Nome:Nome, 
                Cognome:Cognome,
                Email:Email,
                Password:Password,
                Fiscale:Fiscale,
                Iva:Iva,
                Univoco:Univoco,
                Pec:Pec,
                Legale:Legale,
                professione:professione
              })
            }
          });
    }
    

    return (
        <>
          <Container maxWidth="xl">

            <br/>
            <br/>
            <h1 style={{fontWeight:"900", color:"#333333"}}>REGISTRAZIONE</h1>
            <br/>
            <br/>


              <center>
                <TextField
                  required
                  id="filled-required"
                  label="Nome"
                  type="text"
                  variant="filled"
                  style={{padding:"8px"}}
                  value={Nome}
                  onChange={updateNome}
                  
                />
                <TextField
                  required
                  id="filled-required"
                  label="Cognome"
                  type="text"
                  variant="filled"
                  value={Cognome}
                  onChange={updateCognome}
                  style={{padding:"8px"}}
                />

                <TextField
                  required
                  id="filled-required"
                  label="Email"
                  type="email"
                  variant="filled"
                  style={{padding:"8px"}}
                  value={Email}
                  onChange={updateEmail}
                />
                

                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled" required value={Password} onChange={updatePassword}>
                  <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <br/>
                <br/>
                  
                  <div style={{display:"inline-flex", alignItems:"center"}}>
                    <FormControlLabel style={{color:"black"}} control={<Checkbox onChange={()=>setShowcodicefiscale(!showcodicefiscale)}/>} label={showcodicefiscale? '✅ Cod. Fiscale': "🟥 Cod. Fiscale"} />
                    <FormControlLabel style={{color:"black"}} control={<Checkbox onChange={()=>setShowpartitaIva(!showpartitaIva)}/>} label={showpartitaIva? '✅ Part. IVA': "🟥 Part. IVA"} />
                  </div>
               
                
                  
                <br/>
                <br/>
                
                {
                  showpartitaIva?
                    <TextField
                        inputProps={{ maxLength: 11 }}
                        required
                        id="filled-required"
                        label="Partita IVA"
                        variant="filled"
                        style={{padding:"8px"}}
                        value={Iva}
                        onChange={updateIva}
                    />
                  :
                    null
                }
                {
                  showcodicefiscale?
                    <TextField
                        required
                        id="filled-required"
                        label="Codice Fiscale"
                        type="text"
                        variant="filled"
                        style={{padding:"8px"}}
                        value={Fiscale}
                        onChange={updateFiscale}
                        inputProps={{ maxLength: 16 }}
                    />
                  :
                  null
                }
                
                
                <br/>
                <br/>

                <TextField
                    required
                    id="filled-required"
                    label="Codice Univoco"
                    type="text"
                    inputProps={{ maxLength: 6 }}
                    variant="filled"
                    style={{padding:"8px"}}
                    value={Univoco}
                    onChange={updateUnivoco}
                />

                <TextField
                    required
                    id="filled-required"
                    label="PEC"
                    type="email"
                    variant="filled"
                    style={{padding:"8px"}}
                    value={Pec}
                    onChange={updatePec}
                />

                <TextField
                    required
                    id="filled-required"
                    label="Sede Legale"
                    type="text"
                    variant="filled"
                    style={{padding:"8px"}}
                    value={Legale}
                    onChange={updateLegale}
                />

                <br/>
                <br/>

                <FormControl style={{width:"50vw"}}>
                  <InputLabel id="demo-simple-select-label">Professione</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={professione}
                    label="Professione"
                    onChange={updateProfessione}
                  >
                    <MenuItem value={'Medico'}>Medico</MenuItem>
                    <MenuItem value={'Infermiere'}>Infermiere</MenuItem>
                    <MenuItem value={'Specializzando'}>Specializzando</MenuItem>
                    <MenuItem value={'Soccorritore'}>Soccorritore</MenuItem>
                    <MenuItem value={'Cittadino'}>Cittadino</MenuItem>
                  </Select>
                </FormControl>
                
                <br/>
                <br/>
                <br/>
                <br/>
                <p>{error}</p>
                <p>{risposta}</p>
                <br/>
                
                <Button variant="contained" onClick={CheckDati}>Registrati</Button>
              
                
              </center>
            </Container>
        
    </>
  );
};
export default Registrazione;