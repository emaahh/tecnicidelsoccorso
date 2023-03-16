import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from 'next/link'


import Chip from '@mui/material/Chip';

import CallRoundedIcon from '@mui/icons-material/CallRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { BsInstagram, BsYoutube } from "react-icons/bs";


export const Footer = () => {
  return (
    <Box sx={{width: "100%", height: "auto", backgroundColor: "#bf1e2e", paddingTop: "1rem", paddingBottom: "1rem"}}>
        <br/>
        <Container maxWidth="lg">
            <Grid container direction="column">
            <Grid item xs={12} style={{display:"flex", justifyContent: 'space-between', flexWrap: 'wrap'}}>

                <Typography color="white" variant="h4">
                    <img src="/favicon.ico" height="30px"/><strong> TECNICI DEL SOCCORSO</strong><br/>
                    <Chip icon={<CallRoundedIcon style={{color:"white"}}/>} sx={{color:"white"}} label="+39 347 0115111" />
                    &nbsp;
                    <Link href={'mailto:info@tecnicidelsoccorso.it'}><Chip style={{cursor:'pointer!important'}} icon={<AlternateEmailRoundedIcon style={{color:"white"}}/>} sx={{color:"white"}} label="info@tecnicidelsoccorso.it"/></Link>
                </Typography>

                <Typography color="white" variant="h6" style={{fontSize:"15px", maxWidth: '50%'}}>
                    <br/>
                    Tecnici del Soccorso è un’azienda nata al fine di
                    commercializzare prodotti destinati all’ambito
                    sanitario e alla sicurezza sui luoghi di lavoro.
                    <br/>
                    <br/>

                    <Link href={'https://www.facebook.com/tecnicidelsoccorso'} target="blank"><Chip icon={<FacebookRoundedIcon style={{color:"white"}}/>} style={{cursor:'pointer!important'}} sx={{color:"white"}} label="Facebook"/></Link>
                    <br/><p style={{fontSize:"8px"}}>&nbsp;</p>
                    <Link href={'https://www.instagram.com/tecnicidelsoccorso/'} target="blank"><Chip icon={<BsInstagram style={{color:"white", fontSize:"20px"}}/>} style={{cursor:'pointer!important'}} sx={{color:"white"}} label=" Instagram"/></Link>
                    <br/><p style={{fontSize:"8px"}}>&nbsp;</p>
                    <Link href={'https://www.youtube.com/@tecnicidelsoccorso1245'} target="blank"><Chip icon={<BsYoutube style={{color:"white", fontSize:"20px"}}/>} style={{cursor:'pointer!important'}} sx={{color:"white"}} label="YouTube"/></Link>     
                </Typography>
                
            </Grid>
            <Grid item xs={12}>
                <Typography color="#ffffff59" variant="subtitle1"><br/>
                {`Copyright ©${new Date().getFullYear()} all rights reserved`}
                </Typography>
            </Grid>
            </Grid>
        </Container>
    </Box>
  );
};

export default Footer;
 