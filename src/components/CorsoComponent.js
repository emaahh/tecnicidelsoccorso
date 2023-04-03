import * as React from 'react';
import '../styles/Corsopage.module.css'

import Head from 'next/head'
import Navbar from '@/components/Navbar'

//mui
import Container from '@mui/material/Container';
import { Paper, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Chip from '@mui/material/Chip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const CorsoComponent = (props) => {
    
    return (
        <>
                <Container maxWidth="xl">
                    <br/>
                    <br/>
                    <h1 style={{fontWeight:"900", color:"#333333", textTransform:"uppercase"}}>{props.nomeCorso}</h1>
                    <br/>
                    <br/>
                    <br/>

                    <div style={{display:"flex", flexWrap: 'wrap'}}>

                        <Container maxWidth="md">
                            <h3 style={{fontWeight:"800"}}>DESCRIZIONE DEL CORSO</h3>
                            <br/>
                            <h4 style={{fontWeight:"100"}} dangerouslySetInnerHTML={{ __html: props.descCorso }}/>
                            <br/>
                        </Container>

                        <Container maxWidth="xs">
                            <br/>
                            {
                                props.why!=""?
                                    <Accordion>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{color:"black"}}/>} aria-controls="panel1a-content" id="panel1a-header">
                                            <Typography style={{fontWeight:"800"}}>PERCHÈ FREQUENTARE ?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography dangerouslySetInnerHTML={{ __html: props.why }}/>
                                        </AccordionDetails>
                                    </Accordion>
                                :null
                            }{
                                props.vantaggi!=""?
                                    <Accordion>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{color:"black"}}/>} aria-controls="panel1a-content" id="panel1a-header">
                                            <Typography style={{fontWeight:"800"}}>PRINCIPALI VANTAGGI</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography dangerouslySetInnerHTML={{ __html: props.vantaggi }}/>
                                        </AccordionDetails>
                                    </Accordion>
                                :null
                            }{
                                props.condizioni!=""?
                                    <Accordion>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{color:"black"}}/>} aria-controls="panel1a-content" id="panel1a-header">
                                            <Typography style={{fontWeight:"800"}}>CONDIZIONI PRELIMINARI</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography dangerouslySetInnerHTML={{ __html: props.condizioni }}/>
                                        </AccordionDetails>
                                    </Accordion>
                                :null
                            }{
                                props.prova!=""?
                                    <Accordion>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{color:"black"}}/>} aria-controls="panel1a-content" id="panel1a-header">
                                            <Typography style={{fontWeight:"800"}}>PROVE D'IDONIETÀ</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography dangerouslySetInnerHTML={{ __html: props.prova }}/>
                                        </AccordionDetails>
                                    </Accordion>
                                :null
                            }
                            
                        </Container>

                    </div>
                </Container>

        </>
  );
};
export default CorsoComponent;