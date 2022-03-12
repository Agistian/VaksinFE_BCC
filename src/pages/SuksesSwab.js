import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../App.css';
import { style } from "@mui/system";
import Button from '@mui/material/Button';
import Berhasil from '../asset/icon/berhasik.svg';
import keuntungan from '../asset/icon/keuntungan.png';
import untung from '../asset/icon/frame.svg';
import { useAuth } from '../config/Auth';
import { tweetAPI } from '../config/api';
import useSWR from 'swr';
import axios from 'axios';
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
    margin-left: 110px;
    display: flex;
    justify-content: left;
`;


const Home = () => {
    const { authToken } = useAuth();
    const navigate = useNavigate()

    return (
        <div>
            <div style={{backgroundColor:'#E3E3FB'}}>
                <Teks style={{ textAlign:'center',paddingTop:'30px', paddingBottom:'30px', fontSize:'32px'}}>B-HEALTH X KLINIK UB</Teks>
            </div>
            <Content style={{height:'90%', backgroundColor:'#F9F9F9'}}>
                <div style={{width:'50%', paddingTop: '80px', paddingLeft:'30px', height: '100%', marginRight:'60px'}}>
                    <img src={Berhasil} alt="keuntungan" height="357px" width="500px" style={{marginLeft:'70px'}}/>
                    <Teks style={{textAlign:'center', fontFamily:'Poppins-Medium', color:'#28A470'}}>Booking Berhasil!</Teks>
                </div>
                <div style={{paddingTop:'80px', height: '100%', width:'80%'}}>
                    <Teks style={{fontSize:'25px', fontFamily:'Poppins-Medium'}}>Berikut Detail Tiket Anda</Teks>
                    <br/>
                    <div style={{display:'flex', justifyContent:'left'}}>
                        <div style={{width:'230px'}}>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}>No Tiket</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}>Tanggal Transaksi</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}>Nama Pasien</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}>NIK</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}>NIM/NPM</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}>Jenis Layanan</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}>Tanggal Kunjungan</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}>Jadwal</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}>Total Biaya</Teks>
                        </div>
                        <div>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}><span style={{fontFamily:'Poppins-Regular'}}>: </span>A003PU</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}><span style={{fontFamily:'Poppins-Regular'}}>: </span>11-03-2022</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}><span style={{fontFamily:'Poppins-Regular'}}>: </span>Gabrielle Evan</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}><span style={{fontFamily:'Poppins-Regular'}}>: </span>517840234757001</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}><span style={{fontFamily:'Poppins-Regular'}}>: </span>205170437921</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}><span style={{fontFamily:'Poppins-Regular'}}>: </span>SWAB Antigen</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}><span style={{fontFamily:'Poppins-Regular'}}>: </span>23 - 03 - 2022</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Regular',fontSize:'17px'}}><span style={{fontFamily:'Poppins-Regular'}}>: </span>10.30 WIB</Teks>
                            <Teks style={{marginBottom:'10px', fontFamily:'Poppins-Medium', color:'#28A470',fontSize:'17px'}}><span style={{fontFamily:'Poppins-Regular'}}>: </span>Rp 100.000</Teks>
                        </div>

                    </div>
                    <br/>
                    <Teks style={{fontFamily:'Poppins-Regular', color:'red', marginRight:'90px', marginTop:'30px',fontSize:'17px'}}>* Silahkan tunjukkan No Tiket anda dan melakukan pembayaran di kasir</Teks>
                    <br/>
                    <Button variant="contained" onClick={() => navigate("/")} style={{marginTop:'30px', marginBottom:'50px', backgroundColor: '#6F70DA', fontFamily:'Poppins-Medium', textTransform: 'capitalize', fontSize:'17px'
                    
                    }}>Home Page</Button>
                </div>
            </Content>
        </div>
    );
};

export default Home;