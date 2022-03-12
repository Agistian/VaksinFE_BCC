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
import {PoliUmum, PoliGigi, PoliKIA, PoliGizi} from '../components/Poli';
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
                    <Teks style={{marginLeft:'4.5em',fontFamily:'Poppins-Medium', fontSize:'17px', paddingTop: '60px'}}>Informasi / <button onClick={() => navigate("/laypol")} style={{border:'none', backgroundColor:'transparent'}}><Teks style={{fontFamily:'Poppins-Medium', fontSize:'17px'}}>Layanan Poli </Teks></button> / <button onClick={() => navigate("/laypol")} style={{border:'none', backgroundColor:'transparent'}}><Teks style={{fontFamily:'Poppins-SemiBold', fontSize:'17px'}}>Jadwal Poli </Teks></button></Teks>
                    
                    <Content style={{width:'100%', marginTop:'20px'}}>
                            <div style={{width:'100%', height:'1870px', backgroundColor:'white', marginLeft:'5%', marginRight:'5%', marginTop:'20px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}>
                                <Teks style={{marginLeft:'3em', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '30px', fontSize:'32px'}}>Jadwal Poliklinik</Teks>
                                
                                <div style={{backgroundColor:'#E3E3FB', marginTop:'30px',textAlign:'center'}}>
                                    <Teks style={{fontFamily:'Poppins-Medium', paddingTop:'20px',paddingBottom:'20px'}}>Pelayanan Medik</Teks>
                                </div>

                                <div style={{marginLeft:'150px', marginRight:'150px', marginTop:'50px',display:'flex',alignContent:'center'}}>
                                        <div style={{width:'50%', backgroundColor:'#E3E3FB', borderRadius:'10px'}}>
                                            <Teks style={{textAlign:'center', fontFamily:'Poppins-SemiBold', paddingBottom: '10px', paddingTop: '10px', fontSize:'17px'}}>
                                            Poli Umum
                                            </Teks>
                                            <hr/>
                                            <div>
                                                <PoliUmum/>
                                            </div>
                                            
                                        </div>
                                        <div style={{width:'50%', backgroundColor:'#E3E3FB', marginLeft:'50px', borderRadius:'10px'}}>
                                            <Teks style={{textAlign:'center',fontFamily:'Poppins-SemiBold', paddingBottom: '10px', paddingTop: '10px', fontSize:'17px'}}>
                                            Poli Gigi
                                            </Teks>
                                            <hr/>
                                            <div>
                                               <PoliGigi/>
                                            </div>
                                        </div>
                                </div>

                                <div style={{marginLeft:'150px', marginRight:'150px', marginTop:'50px',display:'flex',alignContent:'center'}}>
                                        <div style={{width:'50%', backgroundColor:'#E3E3FB', borderRadius:'10px'}}>
                                            <Teks style={{textAlign:'center', fontFamily:'Poppins-SemiBold', paddingBottom: '10px', paddingTop: '10px', fontSize:'17px'}}>
                                            Poli KIA (Kesehatan Ibu dan Anak)
                                            </Teks>
                                            <hr/>
                                            <div>
                                                <PoliKIA/>
                                            </div>
                                            
                                        </div>
                                        <div style={{width:'50%',  marginLeft:'50px'}}>
                                            <div style={{backgroundColor:'#E3E3FB', borderRadius:'10px'}}>
                                                <Teks style={{textAlign:'center',fontFamily:'Poppins-SemiBold', paddingBottom: '10px', paddingTop: '10px', fontSize:'17px'}}>
                                                Poli Gizi
                                                </Teks>
                                                <hr/>
                                                <div>
                                                    <PoliGizi/>
                                                </div>
                                                
                                            </div>
                                            <div style={{marginTop:'50px'}}>
                                                <Teks style={{color:'red', textAlign:'left',fontFamily:'Poppins-SemiBold', paddingBottom: '10px', paddingTop: '10px', fontSize:'17px'}}>
                                                * Sabtu, Minggu dan Tanggal merah Tutup
                                                </Teks>
                                                <Teks style={{color:'red', textAlign:'left',fontFamily:'Poppins-SemiBold', paddingBottom: '10px', paddingTop: '10px', fontSize:'17px'}}>
                                                * Dapat tutup lebih awal jika kuota layanan terpenuhi
                                                </Teks>
                                            </div>
                                                
                                        </div>
                                </div>

                                <div style={{backgroundColor:'#E3E3FB', marginTop:'50px',textAlign:'center'}}>
                                    <Teks style={{fontFamily:'Poppins-Medium', paddingTop:'20px',paddingBottom:'20px'}}>Penunjang Medik</Teks>
                                </div>

                                <div style={{marginLeft:'150px', marginRight:'150px', marginTop:'50px',display:'flex',alignContent:'center'}}>
                                        <div style={{width:'50%', height:'50%', backgroundColor:'#E3E3FB', borderRadius:'10px'}}>
                                            <Teks style={{textAlign:'center', fontFamily:'Poppins-SemiBold', paddingBottom: '10px', paddingTop: '10px', fontSize:'17px'}}>
                                            Farmasi
                                            </Teks>
                                            <hr/>
                                            <div style={{paddingLeft:'30px'}}>
                                                <Teks style={{fontFamily:'Poppins-SemiBold', paddingBottom: '10px', paddingTop: '20px', fontSize:'17px'}}>Jadwal : </Teks>
                                                <Teks style={{fontFamily:'Poppins-Regular', paddingBottom: '10px', paddingTop: '5px', fontSize:'17px'}}>Senin - Kamis : 08.00 - 16.00 WIB</Teks>
                                                <Teks style={{fontFamily:'Poppins-Regular', paddingBottom: '10px', paddingTop: '5px', fontSize:'17px'}}>Jumat : 08.00 - 15.00 WIB</Teks>
                                            </div>
                                            
                                        </div>
                                        <div style={{width:'50%', height:'50%', backgroundColor:'#E3E3FB', marginLeft:'50px', borderRadius:'10px'}}>
                                            <Teks style={{textAlign:'center',fontFamily:'Poppins-SemiBold', paddingBottom: '10px', paddingTop: '10px', fontSize:'17px'}}>
                                            Laboratorium
                                            </Teks>
                                            <hr/>
                                            <div style={{paddingLeft:'30px'}}>
                                                <Teks style={{fontFamily:'Poppins-SemiBold', paddingBottom: '10px', paddingTop: '20px', fontSize:'17px'}}>Jadwal : </Teks>
                                                <Teks style={{fontFamily:'Poppins-Regular', paddingBottom: '10px', paddingTop: '5px', fontSize:'17px'}}>Senin - Kamis : 08.00 - 16.00 WIB</Teks>
                                                <Teks style={{fontFamily:'Poppins-Regular', paddingBottom: '10px', paddingTop: '5px', fontSize:'17px'}}>Jumat : 08.00 - 14.00 WIB</Teks>
                                            </div>
                                        </div>
                                </div>

                                <div style={{marginLeft:'150px', marginRight:'150px', marginTop:'50px',display:'flex',alignContent:'center'}}>
                                        <div style={{width:'48%', height:'50%', backgroundColor:'#E3E3FB', borderRadius:'10px'}}>
                                            <Teks style={{textAlign:'center', fontFamily:'Poppins-SemiBold', paddingBottom: '10px', paddingTop: '10px', fontSize:'17px'}}>
                                            Rekam Medik
                                            </Teks>
                                            <hr/>
                                            <div style={{paddingLeft:'30px'}}>
                                                
                                                <Teks style={{fontFamily:'Poppins-Regular', paddingBottom: '20px', paddingTop: '20px', paddingRight:'15px', fontSize:'17px'}}>*Setiap pelayanan & penunjang medik selalu terdaftar ke dalam rekam medis</Teks>
                                                
                                            </div>
                                            
                                        </div>
                                        
                                </div>

                                <div style={{position:'center', marginTop:'30px'}}>
                                        <div>
                                            <Teks style={{textAlign:'center',  fontFamily:'Poppins-Regular', paddingTop: '10px', fontSize:'15px'}}>
                                            Ingin membuat janji temu ?
                                            </Teks>

                                            {isAnyToken == null ? (
                                                <div style={{marginLeft:'40%', marginRight:'40%',marginTop:'10px'}}>
                                                    <Button variant="contained" onClick={handleOpen} style={{width:'100%',height:'50px', backgroundColor: '#6F70DA', fontFamily:'Poppins-Medium', textTransform: 'capitalize', fontSize:'15px'
                                                    }}>Buat Janji Sekarang</Button>
                                                </div>
                                            ) : (
                                                <div style={{marginLeft:'40%', marginRight:'40%',marginTop:'10px'}}>
                                                    <Button variant="contained" onClick={() => navigate("/dafpol")} style={{width:'100%',height:'50px', backgroundColor: '#6F70DA', fontFamily:'Poppins-Medium', textTransform: 'capitalize', fontSize:'15px'
                                                    }}>Buat Janji Sekarang</Button>
                                                </div>
                                            )}
                                            
                                            
                                        </div>
                                </div> 

                            </div>
                            
                    </Content>
                    <div style={{backgroundColor:'#F9F9F9', height:'1850px'}} />
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