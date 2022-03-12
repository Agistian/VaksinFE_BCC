import React, { useState } from "react";
import styled from 'styled-components';
import HideAppBar from '../components/OtherNav';
import Footer from '../components/Footer';
import '../App.css';
import Button from '@mui/material/Button';
import Imgswab from '../asset/icon/imgswab.svg';
import i from '../asset/icon/i.svg';
import imgjenis from '../asset/icon/imgjenis.svg';
import imgharga from '../asset/icon/imgharga.svg';
import seru from '../asset/icon/penting.svg';
import { tweetAPI } from '../config/api';
import useSWR from 'swr';
import axios from 'axios';
import { ErrorMessage } from './Signup';
import { useAuth } from '../config/Auth';
import {Medikone , Mediktwo} from '../components/Poli';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

const Content = styled.div`
	width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const Teks = styled.div`
    font-family: Poppins-SemiBold;
    font-size: 2em;
`;

const Btn = styled.div`
    margin-top: 40px;
    margin-left: 75px;
    display: flex;
    justify-content: left;
`;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#E3E3FB',
    boxShadow: 24,
    p: 4,
  };

const LayPoli = () => {
    const [form, setForm] = useState('');
	const [isError, setIsError] = useState({ status: false, message: '' });
	const { authToken } = useAuth();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const navigate = useNavigate()
    const isAnyToken = JSON.parse(localStorage.getItem('token'));

    return (
        <div  style={{width:'100%'}}>
               <div>
               <HideAppBar />
                <div style={{height:'150px'}}>
                    <Teks style={{marginLeft:'4.5em',fontFamily:'Poppins-Medium', fontSize:'17px', paddingTop: '60px'}}>Informasi / <button onClick={() => navigate("/swab")} style={{border:'none', backgroundColor:'transparent'}}><Teks style={{fontFamily:'Poppins-SemiBold', fontSize:'17px'}}>Layanan Swab</Teks></button> </Teks>
                    
                    <Content style={{width:'100%', marginTop:'20px'}}>
                            <div style={{height:'1350px', backgroundColor:'white', marginLeft:'5%', marginRight:'5%', marginTop:'20px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}>
                                <Teks style={{marginLeft:'3em', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '30px', fontSize:'30px'}}>Layanan SWAB PCR / Antigen</Teks>
                                
                                <img src={Imgswab} style={{alignSelf:'center', width:'100%', height:'500px', paddingLeft:'25px', paddingRight:'25px', paddingTop:'20px'}}/>
                                
                                <div style={{display:'flex', justifyContent:'left', marginLeft:'70px'}}>
                                    <img src={i} width="35px" height="35px" style={{marginLeft:'5em', marginTop:'1.6em'}}/>
                                    <Teks style={{marginLeft:'10px', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '20px'}}> Tentang Layanan SWAB</Teks>
                                    
                                </div>

                                <div style={{width:'80%', marginLeft:'70px'}}>
                                    <Teks style={{textAlign:'justify', paddingLeft:'5.5em', paddingRight: '1em', fontFamily:'Poppins-Regular', paddingTop: '10px', fontSize:'17px'}}>
                                    Klinik UB membuka layanan SWAB Klinik UB pada tanggal 1 Desember 2020 yang bekerjasama dengan penyedia alat swab antigen Covid 19 yaitu PT Oikos Perkasa. Tujuan klinik UB membuka layanan ini adalah untuk membantu percepatan penanganan Covid-19. Akurasi tes ini cukup tinggi dan hasil tes dapat dilihat pada hari yang sama dengan berupa file pdf yang akan dikirimkan melalui email atau Whatsapp. Layanan SWAB Klinik UB dapat diakses oleh sivitas maupun masyarakat umum.
                                    </Teks>
                                </div>

                                <div style={{display:'flex', justifyContent:'center', marginLeft:'70px', marginTop:'20px'}}>
                                    <div style={{width:'50%'}}>
                                        <div style={{display:'flex', justifyContent:'left', marginBottom:'10px'}}>
                                            <img src={imgharga} width="35px" height="35px" style={{marginLeft:'5em', marginTop:'1.6em'}}/>
                                            <Teks style={{marginLeft:'10px', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '20px'}}> Harga</Teks>
                                        </div>
                                        
                                        <div style={{display:'flex', jusftifyContent:'left', marginLeft:'90px', marginBottom:'10px'}}>
                                            <Teks style={{fontFamily:'Poppins-Regular', fontSize:'17px'}}>SWAB PCR </Teks>
                                            <Teks style={{fontFamily:'Poppins-Regular', fontSize:'17px'}}><span style={{marginLeft:'43px', fontFamily:'Poppins-Regular', fontSize:'17px'}}> : Rp </span> 100.000</Teks>
                                        </div>

                                        <div style={{display:'flex', jusftifyContent:'left', marginLeft:'90px'}}>
                                            <Teks style={{fontFamily:'Poppins-Regular', fontSize:'17px'}}>SWAB Antigen </Teks>
                                            <Teks style={{fontFamily:'Poppins-Regular', fontSize:'17px'}}><span style={{marginLeft:'10px', fontFamily:'Poppins-Regular', fontSize:'17px'}}> : Rp </span> 250.000</Teks>
                                        </div>
                                        
                                    </div>
                                    <div style={{width:'50%'}}>
                                        <div style={{display:'flex', justifyContent:'left', marginBottom:'10px'}}>
                                            <img src={imgharga} width="35px" height="35px" style={{marginLeft:'5em', marginTop:'1.6em'}}/>
                                            <Teks style={{marginLeft:'10px', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '20px'}}> Harga</Teks>
                                        </div>
                                        <div>
                                            <div style={{display:'flex', jusftifyContent:'left', marginLeft:'90px', marginBottom:'10px'}}>
                                                <Teks style={{fontFamily:'Poppins-Regular', fontSize:'17px'}}>Hari Buka </Teks>
                                                <Teks style={{fontFamily:'Poppins-Regular', fontSize:'17px'}}><span style={{marginLeft:'13px', fontFamily:'Poppins-Regular', fontSize:'17px'}}> : Rp </span> 100.000</Teks>
                                            </div>

                                            <div style={{display:'flex', jusftifyContent:'left', marginLeft:'90px'}}>
                                                <Teks style={{fontFamily:'Poppins-Regular', fontSize:'17px'}}>Jam Buka </Teks>
                                                <Teks style={{fontFamily:'Poppins-Regular', fontSize:'17px'}}><span style={{marginLeft:'10px', fontFamily:'Poppins-Regular', fontSize:'17px'}}> : Rp </span> 250.000</Teks>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div style={{display:'flex', justifyContent:'left', marginLeft:'70px', marginTop:'20px'}}>
                                    <img src={seru} width="50px" height="60px" style={{marginLeft:'4.5em', marginTop:'1.6em'}}/>
                                    <Teks style={{marginTop:'10px', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '20px'}}> Informasi Penting</Teks>
                                    
                                </div>

                                <div style={{width:'80%', marginLeft:'70px'}}>
                                    <Teks style={{textAlign:'justify', paddingLeft:'5.5em', paddingRight: '1em', fontFamily:'Poppins-Regular', fontSize:'17px'}}>
                                    Sebelum melakukan pendaftaran disarankan untuk melakukan <span style={{fontFamily:'Poppins-SemiBold', fontSize:'17px'}}>update profile</span> pada menu <span style={{fontFamily:'Poppins-SemiBold', fontSize:'17px'}}>Akun Saya</span> terlebih dahulu.
                                    </Teks>
                                </div>


                                <div style={{display:'flex', justifyContent:'center', marginTop:'80px'}}>
                                        <div style={{width:'50%'}}>
                                            <Teks style={{textAlign:'center',  fontFamily:'Poppins-Regular', paddingTop: '10px', fontSize:'13px', fontStyle:'italic'}}>
                                            Klik dibawah ini jika ingin langsung melakukan pendaftaran
                                            </Teks>

                                            {isAnyToken == null ? (
                                                <div style={{ marginTop:'10px', paddingLeft:'25%', paddingRight:'25%'}}>
                                                    <Button variant="contained" onClick={handleOpen} style={{borderRadius:'15px',width:'350px', height:'50px', backgroundColor: '#6F70DA', fontFamily:'Poppins-Medium', textTransform: 'capitalize', fontSize:'17px'
                                                    }}>Daftar SWAB PCR / Antigen</Button>
                                                </div>
                                            ) : (
                                                <div style={{ marginTop:'10px', paddingLeft:'25%', paddingRight:'25%'}}>
                                                    <Button variant="contained" onClick={() => navigate("/dafswab")} style={{borderRadius:'15px',width:'350px', height:'50px', backgroundColor: '#6F70DA', fontFamily:'Poppins-Medium', textTransform: 'capitalize', fontSize:'17px'
                                                    }}>Daftar SWAB PCR / Antigen</Button>
                                                </div>
                                            )}
                                            
                                            
                                        </div>
                                </div> 
                            </div>
                    </Content>
                    <div style={{backgroundColor:'#F9F9F9', height:'1350px'}} />
                    <Content style={{backgroundColor:'#F9F9F9', height:'340px'}}>
                        <Footer style={{position:'absolute'}}/>
                    </Content>
                </div>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Teks id="modal-modal-title" style={{fontFamily:'Poppins-Medium', fontSize:'16px', textAlign:'center'}}>
                        Sign Up/ Login untuk dapat melakukan pendaftaran layanan
                        </Teks>
                        <div style={{display:'flex', justifyContent:'center', marginTop:'30px'}}>
                            <Button variant="contained" onClick={() => navigate("/signup")} style={{width:'40%', height:'30px', backgroundColor: '#6F70DA', fontFamily:'Poppins-Medium', textTransform: 'capitalize', fontSize:'13px'
                            }}>Sign Up</Button> 
                            <Button variant="contained" onClick={() => navigate("/login")} style={{color:'#6F70DA', backgroundColor:'white', border:'3px solid #6F70DA', marginLeft:'20px', width:'40%', height:'30px',  fontFamily:'Poppins-Medium', textTransform: 'capitalize', fontSize:'13px'
                            }}>Sign In</Button>                      
                        </div>
                    </Box>
                </Modal>
               </div>
        </div>
    );
};

export default LayPoli;