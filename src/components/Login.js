import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Router from 'next/router';

import PocketBase from 'pocketbase'
const pb = new PocketBase('https://tds-db.pockethost.io')


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

const Log = async (Email, Password) => {
  
  const data = {
    'email':Email,
    'password':Password,
  }


  try{
    await pb.collection('users').authWithPassword(data.email, data.password)
    Router.reload()
  }
  catch (err) {
    console.error(err)
    console.log(err.data)
    
    if (err.data.code){
      return 'non trovato'
    }
  }
}

const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);

  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    function checkIfEmail(str) {
        // Regular expression to check if string is email
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
      
        return regexExp.test(str);
    }

      
      
  
    const [loading, setLoading] = React.useState(true);
    function handleClick() {
      setLoading(true);
    }

    const [error, setError] = useState('Inserire i dati mancanti e cliccare su "Controlla dati"')
    
    
    const [Email, setEmail] = useState("")
    const updateEmail = event => {setEmail(event.target.value.trim())};

    const [Password, setPassword] = useState("")
    const updatePassword = event => {setPassword(event.target.value.trim())};


    const CheckDati = () => {
        if(checkIfEmail(Email) == true){
          if(Email.trim()==""){
            setError("Inserire una Email")
          }
          else if(Password.trim()==""){
            setError("Inserire una Password")
          } else {
            setError("")
            setRisposta("")
            Log(Email, Password)
            .then((a) =>{
              setRisposta(a)
            })  
          }
        }else{
            setError("Inserire un email valida")
        }
    }


    const [risposta, setRisposta] = useState();
    
    
    

    return (
        <>
          <Container maxWidth="xl">

            <br/>
            <br/>
            <h1 style={{fontWeight:"900", color:"#333333"}}>LOGIN</h1>
            <br/>
            <br/>


              <center>

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
                <br/>
                <p>{error}</p>
                <p>{risposta}</p>
                <br/>
                
                <Button variant="contained" onClick={CheckDati}>Accedi</Button>
              
                
              </center>
            </Container>
        
    </>
  );
};
export default Login;