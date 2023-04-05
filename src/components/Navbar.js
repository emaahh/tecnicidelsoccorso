import * as React from 'react';
import Link from 'next/link'


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Link href="/chi-siamo"><ListItemText primary={'CHI SIAMO'} /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <Link href="/tutti-i-corsi"><ListItemText primary={'I NOSTRI CORSI'} /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
                <Link href="/account"><ListItemText primary={'ACCOUNT'} /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText onClick={goToBottom} primary={'CONTATTI'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
    
  const goToBottom = () => {
      window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
      });
  };


  return (
    <AppBar position="static" style={{backgroundColor:'white', boxShadow:"none"}} className='nav'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/"><img src='/images/logo.png' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{paddingBottom: '20px', paddingRight: '20px', paddingTop: '20px', paddingLeft:"0px!important", height: '100px', width: 'auto'}}/></Link>
         

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}} style={{justifyContent: 'flex-end'}}>
           
            <React.Fragment key={'right'}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={toggleDrawer('right', true)}
                    color="inherit"
                >
                    <MenuIcon sx={{color:"black"}}/>
                </IconButton>

                <SwipeableDrawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}
                >
                    {list('right')}
                </SwipeableDrawer>
            </React.Fragment>
        </Box>
              
            
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{justifyContent: 'flex-end'}}>
            <Link href="/chi-siamo"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block' }}>CHI SIAMO</Button></Link>
            <Link href="/tutti-i-corsi"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block' }}>I NOSTRI CORSI</Button></Link>
            <Link href="/account"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block' }}>ACCOUNT</Button></Link>
            <Button onClick={goToBottom} sx={{ my: 2, color: 'black', display: 'block' }}>CONTATTI</Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;