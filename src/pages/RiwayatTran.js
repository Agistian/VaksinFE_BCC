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
import Table from 'react-bootstrap/Table'

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

    return (
        <div  style={{width:'100%'}}>
               <div>
               <HideAppBar />
                <div style={{height:'150px'}}>
                    <Teks style={{marginLeft:'4.5em',fontFamily:'Poppins-Medium', fontSize:'17px', paddingTop: '60px'}}>Riwayat Transaksi </Teks>
                    
                    <Content style={{width:'100%', marginTop:'20px'}}>
                            <div style={{width:'100%', height:'500px',border:'1px solid black',borderRadius:'10px', backgroundColor:'white', marginLeft:'5%', marginRight:'5%', marginTop:'20px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}>
                                <Teks style={{marginBottom:'30px', marginLeft:'3em', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '30px', fontSize:'32px'}}>Riwayat Transaksi</Teks>
                                <hr/>

                                <div style={{marginLeft:'95px', marginRight:'80px', marginTop:'50px'}}>
                                    <Table striped hover>
                                        <thead style={{backgroundColor:'#6F70DA'}}>
                                            <tr style={{fontFamily:'Poppins-SemiBold', fontSize:'18px', color:'white'}}>
                                            <th>No</th>
                                            <th>Jenis Layanan</th>
                                            <th>Tanggal Transaksi</th>
                                            <th>Tanggal Kunjungan</th>
                                            <th>Harga</th>
                                            <th>No. Tiket</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{fontFamily:'Poppins-Regular', fontSize:'17px'}}>
                                            <td>1</td>
                                            <td>Poli Gigi (Tindakan Ringan)</td>
                                            <td>20-03-2022</td>
                                            <td>02-02-2022 09.00 - 11.00</td>
                                            <td>Rp. 100.000</td>
                                            <td>A005PG</td>
                                            </tr>
                                            <tr style={{fontFamily:'Poppins-Regular', fontSize:'17px'}}>
                                            <td>2</td>
                                            <td>SWAB Antigen </td>
                                            <td>20-03-2022</td>
                                            <td>02-02-2022 09.00 - 11.00</td>
                                            <td>Rp. 100.000</td>
                                            <td>A005PG</td>
                                            </tr>
                                            <tr style={{fontFamily:'Poppins-Regular', fontSize:'17px'}}>
                                            <td>3</td>
                                            <td>Poli Umum (Pemeriksaan Dokter Umum)</td>
                                            <td>20-03-2022</td>
                                            <td>02-02-2022 09.00 - 11.00</td>
                                            <td>Rp. 100.000</td>
                                            <td>A005PG</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                    </Content>
                    <div style={{backgroundColor:'#F9F9F9', height:'480px'}} />
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