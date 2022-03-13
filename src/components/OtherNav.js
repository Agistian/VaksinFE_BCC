import * as React from 'react';
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
import '../App.css';
import ExpdIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../config/Auth';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from 'styled-components';

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
      backgroundColor: '#6F70DA',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#ffff',
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

    const { setAndGetTokens } = useAuth();
    const handleLogout = () => {
      console.log('oke');
      setAndGetTokens();
      localStorage.clear();
      alert("Berhasil Keluar");
      navigate('/', { replace: true });
    };

    const isAnyToken = JSON.parse(localStorage.getItem('token'));

    const navigate = useNavigate()
    return (
        <React.Fragment >
        <CssBaseline />
        <HideOnScroll {...props}>
            <AppBar style={{boxShadow: '0px 0px 0px', backgroundColor: '#F9F9F9'}}>
              <Toolbar style={{paddingTop:'30px',paddingLeft:'50px', display:'flex', justifyContent: 'space-between'}}>
                <Typography variant="h3" component="div" style={{  fontFamily: 'OpenSans-Bold',color: 'black'}}>
                  B-HEALTH
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'right' }}>
                    <Button
                      onClick={() => navigate("/")}
                      sx={{ my: 2, color: 'black', display: 'block', paddingTop:'7.5px', fontFamily: 'OpenSans-Bold'}}
                      style={{fontSize: '1.5em'}}
                    >HOME
                    </Button>
                    
                 
                    <Button
                      onClick={handleOpenUserMenu}
                      sx={{ my: 2, color: 'black', display: 'block', fontSize: '1.5em', fontFamily: 'OpenSans-Bold'}}
                    >Informasi <ExpdIcon />
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
                    <MenuItem onClick={() => navigate("/laypol")}>
                    <Typography textAlign="center" style={{fontSize:'15px'}}>Layanan Poli</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => navigate("/swab")}>
                    <Typography textAlign="center" style={{fontSize:'15px'}}>Layanan Swab</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => navigate("/jadpol")}>
                    <Typography textAlign="center" style={{fontSize:'15px'}}>Jadwal Poli</Typography>
                    </MenuItem>
                  </Menu>
                </Box>  

                  { isAnyToken == null ? (
                    <Button2 onClick={() => navigate("/login")}  style={{marginLeft:'5px', fontFamily: 'OpenSans-Bold', fontSize:'1.5em'}}
                    >SIGN IN</Button2>
                  ):(
                    <Button2
                      onClick={handleOpenUserMenu2}
                      className={classes.button}
                      style={{marginLeft:'10px', my: 2, display: 'block', fontSize: '1.5em', fontFamily: 'OpenSans-Bold',width:'150px'}}
                    >Gabriella Evan <ExpdIcon />
                    </Button2>
                  )}
             

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
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
        </React.Fragment>
    );
  }
