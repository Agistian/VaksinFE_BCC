import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import { alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ExpdIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../config/Auth';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { makeStyles } from '@mui/styles';
import '../App.css';
import styled from 'styled-components';
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';


  function HideOnScroll(props) {
    const { children, window } = props;
    
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  //scroll
  function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };

    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };
  //scroll

  //const menu navbar
  const Search = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignContent: 'right',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid #6F70DA',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '15ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  
  // //const menu navbar
  
 
  //profildropdown
    const useStyles = makeStyles({
      flexGrow: {
        flex: '1',
      },
      button: {
        backgroundColor: '#F4FEFF',
        color: '#fff',
        border:'1px solid #6F70DA',
        borderRadius:'10px',
        '&:hover': {
          backgroundColor: '#F4FEFF',
          color: '#6F70DA',
      },
    }})
  //profildropdown

  const Button2 = styled.button`
    background-color: #6F70DA;
    color: #FFFFFF;
    outline: none;
    border: none;
    height:40px;
    font-size: 2rem;
    font-family: Poppins-Bold;
    width:80px;
    border-radius: 1rem;
    border: 1px solid #6F70DA;
    transition: 0.2s all;
    &:hover {
        cursor: pointer;
        background-color: #FFFFFF;
        color: #6F70DA;
    }
`;

const Teks = styled.div`
    display:flex;
    align-items:center;
    color:white;
    font-style: 'Poppins';
    font-weight: 700;
    font-size: 35px;
    text-align: center;
    letter-spacing: 0.05em;
    p{
        font-style: 'Poppins';
        justify-content:center;
        font-size: 25px;
        font-weight: 650;
        letter-spacing: 0.03em;
    }
    
`;
  
  export default function HideAppBar(props) {

    const classes = useStyles();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElUser2, setAnchorElUser2] = React.useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleOpenUserMenu2 = (event) => {
      setAnchorElUser2(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const handleCloseUserMenu2 = () => {
      setAnchorElUser2(null);
    };
    
    const { setAndGetTokens, ketId} = useAuth();
    
    const isAnyToken = JSON.parse(localStorage.getItem('token'));
    // console.log(isAnyToken);
    
    const handleLogout = () => {
      console.log('oke');
      setAndGetTokens();
      localStorage.clear();
      alert("Berhasil Keluar");
      window.location.reload(false);
      navigate('/', { replace: true });
      
    };

    const navigate = useNavigate()
   
      return (
          <React.Fragment >
          <CssBaseline />
          <HideOnScroll {...props}>
              
              <AppBar style={{boxShadow: '0px 0px 0px', backgroundColor: '#F4FEFF'}}>
                <Toolbar style={{paddingTop:'30px',paddingLeft:'50px', display:'flex', justifyContent: 'space-between'}}>
                  <Typography variant="h3" component="div" style={{  fontFamily: 'OpenSans-Bold',color: 'black'}}>
                    B-HEALTH
                  </Typography>

                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'right' }}>
                      {/* <Button
                        onClick={() => navigate("/")}
                        sx={{ my: 2, color: 'black', display: 'block', paddingTop:'7.5px', fontFamily: 'OpenSans-Bold'}}
                        style={{fontSize: '1.5em'}}
                      >HOME
                      </Button> */}
                      
                      
                      <Button
                        onClick={handleOpenUserMenu}
                        sx={{ my: 2, color: 'black', display: 'block', fontSize: '1.5em', fontFamily: 'OpenSans-Bold'}}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                          <path d="M30.625 14.5834H4.375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M30.625 8.75H4.375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M30.625 20.4166H4.375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M30.625 26.25H4.375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      {/* <ExpdIcon /> */}
                      </Button>
            

                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <MenuItem onClick={() => navigate("/akun")}>
                        <Typography textAlign="center" style={{fontSize:'15px'}}>Halaman Utama</Typography>
                      </MenuItem>
                      <MenuItem onClick={() => navigate("/riwayatvak")}>
                        <Typography textAlign="center" style={{fontSize:'15px'}}>Reservasi Vaksin</Typography>
                      </MenuItem>
                      <MenuItem onClick={() => navigate("/riwayattran")}>
                        <Typography textAlign="center" style={{fontSize:'15px'}}>Reservasi Tes Covid</Typography>
                      </MenuItem>
                      <MenuItem onClick={() => navigate("/riwayattran")}>
                        <Typography textAlign="center" style={{fontSize:'15px'}}>Tiket Vaksin</Typography>
                      </MenuItem>
                      <MenuItem onClick={() => navigate("/riwayattran")}>
                        <Typography textAlign="center" style={{fontSize:'15px'}}>Berita</Typography>
                      </MenuItem>
                      

                      { isAnyToken != null ? (
                        <>
                        <MenuItem onClick={() => navigate("/riwayattran")}>
                          <Typography textAlign="center" style={{fontSize:'15px'}}>Upload Hasil Vaksin</Typography>
                        </MenuItem>

                        <MenuItem onClick={handleLogout} >
                          <Typography textAlign="center" style={{fontSize:'15px'}}>Logout
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 17L21 12L16 7" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 12H9" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          </Typography>
                        </MenuItem>
                        </>
                      ):(
                        <MenuItem onClick={() => navigate("/login")} >
                          <Typography textAlign="center" style={{fontSize:'15px'}}>Login 
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 17L15 12L10 7" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 12H3" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          </Typography>
                        </MenuItem>
                      )}
                    </Menu>
                  </Box>  
                        
                  {/* { isAnyToken == null ? (
                    <Button2 onClick={() => navigate("/login")}  style={{marginLeft:'5px', fontFamily: 'OpenSans-Bold', fontSize:'1.5em'}}
                    >SIGN IN</Button2>
                  ):(
                    <Button2
                      onClick={handleOpenUserMenu2}
                      className={classes.button}
                      style={{marginLeft:'10px', my: 2, display: 'block', fontSize: '1.5em', fontFamily: 'OpenSans-Bold',width:'150px'}}
                    >Gabriella Evan <ExpdIcon />
                    </Button2>
                  )} */}

                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser2}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser2)}
                      onClose={handleCloseUserMenu2}
                    >
                      <MenuItem onClick={() => navigate("/akun")}>
                      <Typography textAlign="center" style={{fontSize:'15px'}}>Akun Saya</Typography>
                      </MenuItem>
                      <MenuItem onClick={() => navigate("/riwayatvak")}>
                      <Typography textAlign="center" style={{fontSize:'15px'}}>Riwayat Vaksin</Typography>
                      </MenuItem>
                      <MenuItem onClick={() => navigate("/riwayattran")}>
                      <Typography textAlign="center" style={{fontSize:'15px'}}>Riwayat Transaksi</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleLogout} >
                      <Typography textAlign="center" style={{fontSize:'15px'}}>Keluar</Typography>
                      </MenuItem>
                    </Menu>
                </Toolbar>
              </AppBar>
          </HideOnScroll>
          <Toolbar id="back-to-top-anchor" style={{backgroundImage:"url('./bg_header.png')"}}/>
          <Container  >
              <Box sx={{ my: 2}} >
              {[...new Array(12)]
                  .map(
                  () => ``,
                  )
                  .join('\n')}
              </Box>
          </Container>
          <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
          </React.Fragment>
        
        // <nav className="navbar navbar-expand-lg"  style={{backgroundColor:'#030025',position:'fixed', top:'0', width:'100%', zIndex:'1'}}>
        //       <div class="container-fluid">
        //           <a class="navbar-brand col-2" href="#" onClick={()=> navigate("/")}>
        //             {/* <img src="../logo/BUIGIA.png" alt="Logo" onClick={()=> navigate("/")} height="40" class="d-inline-block align-text-top" /> */}
        //             <Teks>BACAKUY!</Teks>
        //           </a>
        //           {/* <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //               <span class="navbar-toggler-icon"></span>
        //           </button> */}
        //           <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        //               <div className='col-8 ' style={{display:'flex'}} >
        //                   <ul class="navbar-nav ml-lg-10 mb-2 mb-lg-0" >
        //                               {/* <div className="nav-link menu active" onClick={() => navigate("/")} id="/">Home</div> */}
        //                       {/* <CustomLink href="/">Home</CustomLink> */}
        //                       {/* <CustomLink href="/learn-color">Learn Color</CustomLink>
        //                       <CustomLink href="/consultant">Consultation</CustomLink>
        //                       <CustomLink href="/about-us">About Us</CustomLink> */}
        //                   </ul>
        //               </div>

        //               { isAnyToken == null ? (
        //                 <div className='col-3' style={{display:'flex',marginLeft:'30px'}} >
        //                   <div className="col-12 justify-content" style={{display:'flex',justifyContent:'end', alignItems:'end' ,marginRight:'10px'}}>
        //                           <Button style={{marginRight:'10px'}} onClick={()=> navigate("/login")}>Login</Button>
        //                           {/* <Button style={{}} onClick={()=> navigate("/register")}>Sign Up</Button> */}
        //                   </div>
        //                 </div>
        //               ):(
                
        //                   <div className='col-md-3 justify-content-md-end' style={{display:'flex',marginLeft:'30px'}} >
        //                     {/* <div className="" style={{display:'flex',justifyContent:'end', alignItems:'end' ,marginRight:'10px'}}>
        //                             <Button2 style={{width:'100px', borderColor:'#A63D44', paddingBottom:'30px'}} onClick={handleLogout}>Logout</Button2>
        //                     </div> */}
                          
                            
        //                     {/* onClick={()=> navigate("/profil")} */}
        //                     <Dropdown>
        //                       <Dropdown.Toggle className='dropdownBtn' id="dropdown-basic" style={{backgroundColor:'transparent',borderColor:'transparent'}}>
        //                         <div className='col-1 justify-content-md-end'  style={{justifyContent:'end', cursor:'pointer'}}>
        //                           <img src="./foto/user.png" height="50" width="50"></img>
        //                       </div>
        //                       </Dropdown.Toggle>

        //                       <Dropdown.Menu>
        //                         <Dropdown.Item href="#">Profil</Dropdown.Item>
        //                         <Dropdown.Item href="#" >Keranjang Saya</Dropdown.Item>
        //                         <Dropdown.Item href="#" onClick={()=> navigate("/bacaanku")}>Bacaan Saya</Dropdown.Item>
        //                         <Dropdown.Item href="#/" onClick={handleLogout}>Log Out</Dropdown.Item>
        //                       </Dropdown.Menu>
        //                     </Dropdown>
        //                   </div>
                      
        //               )}
                      
                      
                      
        //           </div>
        //       </div>
        //       <img src="./foto/scrol.png" height="50px" width="50px"
        //       id='btn-back-to-top'
        //       style={{
        //       position: "fixed",
        //       bottom: "20px",
        //       display: "none",
        //       right: "20px",
        //       cursor:'pointer'}}/>

        //       {/* <Modal show={show} onHide={handleClose}>
        //           <Modal.Header closeButton>
        //           <Modal.Title>
        //               <img src="../icon/sukses.png"/>
        //               Keranjang Kosong &nbsp;
        //           </Modal.Title>
        //           </Modal.Header>
        //           <Modal.Body>Keranjang masih kosong, pinjam dulu kuy!</Modal.Body>
        //           <Modal.Footer>
        //           </Modal.Footer>
        //       </Modal> */}

        //       {/* <Modal show={show2} onHide={handleClose2}>
        //           <Modal.Header closeButton>
        //           <Modal.Title>
        //               <img src="../icon/sukses.png"/>
        //               Berhasil Keluar &nbsp;
        //           </Modal.Title>
        //           </Modal.Header>
        //           <Modal.Body>Sampai jumpa lagi!</Modal.Body>
        //           <Modal.Footer>
        //           </Modal.Footer>
        //       </Modal> */}
        // </nav>
 
    
      );
    
  }
