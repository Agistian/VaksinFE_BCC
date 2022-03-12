import React, { useState } from "react";
import styled from 'styled-components';
import HideAppBar from '../components/OtherNav';
import Footer from '../components/Footer';
import '../App.css';
import Button from '@mui/material/Button';
import Imgpoli from '../asset/icon/imgpoli.svg';
import i from '../asset/icon/i.svg';
import imgjenis from '../asset/icon/imgjenis.svg';
import imgharga from '../asset/icon/imgharga.svg';
import Tabel from '../asset/icon/tabel.svg';
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
    const isAnyToken = JSON.parse(localStorage.getItem('token'));

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const navigate = useNavigate()

    return (
        <div  style={{width:'100%'}}>
               <div>
               <HideAppBar />
                <div style={{height:'150px'}}>
                    <Teks style={{marginLeft:'4.5em',fontFamily:'Poppins-Medium', fontSize:'17px', paddingTop: '60px'}}>Informasi / <button onClick={() => navigate("/laypol")} style={{border:'none', backgroundColor:'transparent'}}><Teks style={{fontFamily:'Poppins-SemiBold', fontSize:'17px'}}>Layanan Poli</Teks></button> </Teks>
                    
                    <Content style={{width:'100%', marginTop:'20px'}}>
                            <div style={{height:'1750px', backgroundColor:'white', marginLeft:'5%', marginRight:'5%', marginTop:'20px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}>
                                <Teks style={{marginLeft:'3em', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '30px', fontSize:'32px'}}>Layanan Poliklinik UB</Teks>
                                
                                <img src={Imgpoli} style={{alignSelf:'center', width:'100%', height:'500px', paddingLeft:'25px', paddingRight:'25px', paddingTop:'20px'}}/>
                                
                                <div style={{display:'flex', justifyContent:'left', marginLeft:'70px'}}>
                                    <img src={i} width="35px" height="35px" style={{marginLeft:'5em', marginTop:'1.6em'}}/>
                                    <Teks style={{marginLeft:'10px', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '20px'}}> Tentang Layanan Poliklinik UB</Teks>
                                    
                                </div>

                                <div style={{width:'80%', marginLeft:'70px'}}>
                                    <Teks style={{textAlign:'justify', paddingLeft:'5.5em', paddingRight: '1em', fontFamily:'Poppins-Regular', paddingTop: '10px', fontSize:'17px'}}>
                                    Layanan Poli UB dibagi menjadi 2 jenis layanan yaitu : Pelayanan medik & penunjang medik. Info lebih lanjut dapat dilihat pada website <a href='https://klinik.ub.ac.id/'>https://klinik.ub.ac.id/</a>
                                    </Teks>
                                </div>
                                
                                <div style={{display:'flex', justifyContent:'left', marginTop:'10px', marginLeft:'70px'}}>
                                    <img src={imgjenis} width="35px" height="35px" style={{marginLeft:'5em', marginTop:'1.6em'}}/>
                                    <Teks style={{marginLeft:'10px', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '20px'}}> Jenis Layanan Poliklinik UB</Teks>
                                </div>

                                <div style={{display:'flex', justifyContent:'center', marginLeft:'70px'}}>
                                        <div style={{width:'50%'}}>
                                            <Teks style={{paddingLeft:'5.5em', paddingRight: '5.5em', fontFamily:'Poppins-Regular', paddingTop: '10px', fontSize:'17px'}}>
                                            Penunjang Medik
                                            </Teks>
                                            <div>
                                                <Medikone/>
                                            </div>
                                            
                                        </div>
                                        <div style={{width:'50%'}}>
                                            <Teks style={{paddingLeft:'5.5em', paddingRight: '5.5em', fontFamily:'Poppins-Regular', paddingTop: '10px', fontSize:'17px'}}>
                                            Pelayanan Medik
                                            </Teks>
                                            <div>
                                                <Mediktwo/>
                                            </div>
                                        </div>
                                </div>

                                <div style={{display:'flex', justifyContent:'left', marginTop:'10px', marginLeft:'70px'}}>
                                    <img src={imgharga} width="35px" height="35px" style={{marginLeft:'5em', marginTop:'1.6em'}}/>
                                    <Teks style={{marginLeft:'10px', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '20px'}}> Harga</Teks>
                                </div>  

                                <div style={{marginTop:'10px', width:'100%', marginLeft:'70px'}}>
                                    <img src={Tabel} width="100%" height="500px"/>
                                </div> 

                                <div style={{display:'flex', justifyContent:'center', marginLeft:'80px', marginTop:'50px'}}>
                                        <div style={{width:'50%'}}>
                                            <Teks style={{textAlign:'right',  fontFamily:'Poppins-Regular', paddingTop: '10px', fontSize:'13px', fontStyle:'italic'}}>
                                            Klik dibawah ini jika ingin langsung melakukan appointment
                                            </Teks>
                                            
                                            {isAnyToken == null ? (
                                            
                                            <div style={{marginLeft:'300px', marginTop:'10px'}}>
                                                <Button variant="contained" onClick={handleOpen} style={{width:'90%', height:'50px', backgroundColor: '#6F70DA', fontFamily:'Poppins-Medium', textTransform: 'capitalize', fontSize:'15px'
                                                }}>Daftar Poliklinik</Button>
                                            </div>) : (
                                                <div style={{marginLeft:'300px', marginTop:'10px'}}>
                                                    <Button variant="contained" onClick={() => navigate("/dafpol")} style={{width:'90%', height:'50px', backgroundColor: '#6F70DA', fontFamily:'Poppins-Medium', textTransform: 'capitalize', fontSize:'15px'
                                                    }}>Daftar Poliklinik</Button>
                                            </div>
                                            )}
                                            
                                            
                                        </div>
                                        <div style={{width:'50%'}}>
                                            <Teks style={{marginLeft:'30px', fontFamily:'Poppins-Regular', paddingTop: '10px', fontSize:'13px', fontStyle:'italic'}}>
                                            Klik dibawah ini untuk melihat lebih lanjut mengenai Jadwal
                                            </Teks>
                                            <div style={{marginLeft:'50px', marginTop:'10px'}}>
                                            <Button onClick={() => navigate("/jadpol")} variant="contained" style={{color:'#6F70DA', width:'60%' , height:'50px', backgroundColor:'transparent', border:'3px solid #6F70DA', fontFamily:'Poppins-Medium', textTransform: 'capitalize', fontSize:'15px'
                                            }}>Jadwal Poli & Info Dokter</Button>
                                            </div>
                                        </div>
                                </div> 
                            </div>
                    </Content>
                    <div style={{backgroundColor:'#F9F9F9', height:'1700px'}} />
                    <Content style={{backgroundColor:'#F9F9F9', height:'335px'}}>
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