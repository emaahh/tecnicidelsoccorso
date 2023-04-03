import Head from 'next/head'
import Navbar from '@/components/Navbar'
import * as React from 'react';
import Link from 'next/link'

//mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CorsoCard = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }} style={{marginBottom:"50px", borderRadius:"15px", boxShadow:"none"}}>
            <CardActionArea style={{borderRadius:"15px"}}>
                <CardMedia
                    component="img"
                    height="auto"
                    image={props.image}
                    alt={"Corso di " + props.name + " da Tecnici del Soccorso"}
                    style={{borderRadius:"15px"}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{fontWeight:"700"}}>
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};
export default CorsoCard;