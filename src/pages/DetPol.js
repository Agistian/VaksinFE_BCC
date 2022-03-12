import React, { useState } from "react";
import styled from 'styled-components';
import HideAppBar from '../components/OtherNav';
import Footer from '../components/Footer';
import '../App.css';
import Button from '@mui/material/Button';
import { tweetAPI } from '../config/api';
import useSWR from 'swr';
import axios from 'axios';
import { ErrorMessage } from './Signup';
import { useAuth } from '../config/Auth';
import {InfoPas} from '../components/Poli';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import {MainForm, Input, MainButton, GButton} from '../components/AccountForm';

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
    const {  setAndGetTokens } = useAuth();
	const [forms, setForms] = useState({
		email: '',
		password: '',
		name: '',
	});
	const [isError, setIsError] = useState({ status: false, message: '' });

	const { authToken } = useAuth();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const navigate = useNavigate()

    return (
        <div  style={{width:'100%'}}>
               <div>
               <HideAppBar />
                <div style={{height:'150px'}}>
                    <Teks style={{marginLeft:'4.5em',fontFamily:'Poppins-Medium', fontSize:'17px', paddingTop: '60px'}}>Informasi / <button onClick={() => navigate("/laypol")} style={{border:'none', backgroundColor:'transparent'}}><Teks style={{fontFamily:'Poppins-Medium', fontSize:'17px'}}>Layanan Poli </Teks></button> / 
                    <button onClick={() => navigate("/jadpol")} style={{border:'none', backgroundColor:'transparent'}}><Teks style={{fontFamily:'Poppins-Medium', fontSize:'17px'}}>Jadwal Poli </Teks></button> / 
                    <button onClick={() => navigate("/dafpol")} style={{border:'none', backgroundColor:'transparent'}}><Teks style={{fontFamily:'Poppins-Medium', fontSize:'17px'}}>Daftar Poli </Teks></button> /
                    <button onClick={() => navigate("/detpol")} style={{border:'none', backgroundColor:'transparent'}}><Teks style={{fontFamily:'Poppins-SemiBold', fontSize:'17px'}}> Detail Booking </Teks></button>
                    
                    </Teks>
                    
                    <Content style={{width:'100%', marginTop:'20px'}}>
                            <div style={{width:'100%', height:'850px', backgroundColor:'white', marginLeft:'5%', marginRight:'5%', marginTop:'20px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}>
                                <Teks style={{marginLeft:'2.3em', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '50px',fontSize:'32px'}}>Detail Booking</Teks>

                                <div style={{marginLeft:'70px', marginRight:'80px', marginTop:'40px',display:'flex',alignContent:'center'}}>
                                        <div style={{width:'50%',height:'50%', border:'1px solid #909090', borderRadius:'10px'}}>
                                            <Teks style={{textAlign:'left', fontFamily:'Poppins-Medium', paddingLeft:'40px', paddingBottom: '10px', paddingTop: '20px', fontSize:'20px'}}>
                                            Informasi Pasien
                                            </Teks>
                                            <div>
                                                <InfoPas/>
                                            </div>
                                            
                                        </div>
                                        <div style={{width:'50%', border:'1px solid #909090', marginLeft:'60px', borderRadius:'10px'}}>
                                            <Teks style={{textAlign:'left',fontFamily:'Poppins-Medium', paddingLeft:'40px', paddingBottom: '10px', paddingTop: '20px', fontSize:'20px'}}>
                                            Informasi Transaksi
                                            </Teks>
                                           
                                            <div style={{marginLeft:'5px'}}>
                                                <MainForm>
                                                    <div style={{paddingTop:'10px'}}>        
                                                        <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em', paddingBottom:'20px'}}>
                                                            <Teks style={{width:'180px', paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Jenis Layanan </Teks>
                                                            <Teks style={{paddingLeft:'10px', fontSize:'17px', fontFamily:'Poppins-Regular'}}><span style={{fontSize:'17px', fontFamily:'Poppins-Regular'}}>: </span>Poli Umum (Pemeriksaan Dokter Umum)</Teks>    
                                                        </div>

                                                        <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                                                            <Teks style={{width:'180px',paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Tanggal Kunjungan</Teks>
                                                            <Teks style={{paddingLeft:'10px', fontSize:'17px', fontFamily:'Poppins-Regular'}}><span style={{fontSize:'17px', fontFamily:'Poppins-Regular'}}>: </span>23 - 03 - 2022</Teks>    
                                                        </div>

                                                        <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                                                            <Teks style={{width:'180px',paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Jadwal </Teks>
                                                            <Teks style={{paddingLeft:'10px', fontSize:'17px', fontFamily:'Poppins-Regular'}}><span style={{fontSize:'17px', fontFamily:'Poppins-Regular'}}>: </span>08.00 - 10.00 WIB</Teks>    
                                                        </div>

                                                        <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                                                            <Teks style={{width:'180px',paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Dokter</Teks>
                                                            <Teks style={{paddingLeft:'10px', fontSize:'17px', fontFamily:'Poppins-Regular'}}><span style={{fontSize:'17px', fontFamily:'Poppins-Regular'}}>: </span>dr. Andreas Gladwin</Teks>    
                                                        </div>

                                                        <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                                                            <Teks style={{width:'180px',paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Biaya</Teks>
                                                            <Teks style={{paddingLeft:'10px', fontSize:'17px', fontFamily:'Poppins-Regular'}}><span style={{fontSize:'17px', fontFamily:'Poppins-Regular'}}>: </span>Rp 40.000</Teks>    
                                                        </div>

                                                        <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                                                            <Teks style={{width:'180px',paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Biaya Admin</Teks>
                                                            <Teks style={{paddingLeft:'10px', fontSize:'17px', fontFamily:'Poppins-Regular'}}><span style={{fontSize:'17px', fontFamily:'Poppins-Regular'}}>: </span>-</Teks>    
                                                        </div>

                                                        <hr/>
                                                        
                                                    </div> 
                                                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px', paddingTop:'10px', marginTop:'20px'}}>
                                                            <Teks style={{width:'180px',paddingLeft:'30px', fontSize:'17px', fontFamily:'Poppins-Medium'}}>Total Biaya</Teks>
                                                            <Teks style={{paddingLeft:'10px', fontSize:'17px', fontFamily:'Poppins-Medium', color:'#28A470'}}><span style={{fontSize:'17px', fontFamily:'Poppins-Regular'}}>: </span>Rp 40.000</Teks>    
                                                    </div>

                                                    <MainButton onClick={() => navigate("/sukses")}style={{marginLeft:'10%', marginRight:'10%', fontFamily:'Poppins-Regular', marginTop:'20px'}}>Booking Sekarang</MainButton>
                                                    <br/>
                                                    <GButton onClick={() => navigate("/dafpol")} style={{marginLeft:'10%', marginRight:'10%', fontFamily:'Poppins-Regular'}}>Cancel Booking</GButton>
                                                </MainForm>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            
                    </Content>
                    <div style={{backgroundColor:'#F9F9F9', height:'850px'}} />
                        <Content style={{backgroundColor:'#F9F9F9', height:'345px'}}>
                            <Footer style={{position:'absolute'}}/>
                        </Content>
                    </div>
               </div>
        </div>
    );
};

export default LayPoli;