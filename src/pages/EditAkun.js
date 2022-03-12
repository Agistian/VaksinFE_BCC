import React, { useState } from "react";
import styled from 'styled-components';
import HideAppBar from '../components/OtherNav';
import Footer from '../components/Footer';
import '../App.css';
import Button from '@mui/material/Button';
import user from '../asset/icon/user.svg';
import { tweetAPI } from '../config/api';
import useSWR from 'swr';
import axios from 'axios';
import { ErrorMessage } from './Signup';
import { useAuth } from '../config/Auth';
import Form from 'react-bootstrap/Form';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import {MainForm, Input, MainButton} from '../components/AccountForm';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

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

const Button2 = styled.button`
    background-color: transparent;
    color: #black;
    outline: none;
    border: none;
    padding: 1rem 0;
    border-radius: 1rem;
    transition: 0.2s all;
    margin-top: 1rem;
    &:hover {
        cursor: pointer;
        background-color: #E3E3FB;
    }
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
    const [forms, setForms] = useState({
		email: '',
		password: '',
		name: '',
	});
	const { authToken } = useAuth();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const navigate = useNavigate()

    //Datepicker
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleUbah = (newValue) => {
        setValue(newValue);
    };
    //Datepicker

    return (
        <div  style={{width:'100%'}}>
               <div>
               <HideAppBar />
                <div style={{height:'150px'}}>
                    <Teks style={{marginLeft:'4.5em',fontFamily:'Poppins-Medium', fontSize:'17px', paddingTop: '60px'}}>Akun Saya</Teks>
                    
                    <Content style={{width:'100%', marginTop:'20px', display:'flex', justifyContent:'left'}}>
                            <div style={{width:'30%', height:'900px', backgroundColor:'white', marginLeft:'5%', marginRight:'5%', marginTop:'20px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', border:'1px solid black', borderRadius:'10px'}}>    
                               
                                <div style={{display:'flex', justifyContent:'left', marginLeft:'25px', marginTop:'25px', marginBottom:'25px'}}>
                                    <img src={user} width="40px" height="40px" style={{marginTop:'1.6em'}}/>
                                    <Teks style={{marginLeft:'10px',marginRight:'10px', fontFamily:'Poppins-Medium', paddingTop: '15px', fontSize:'25px'}}>Gabriella Evan</Teks>
                                </div>
                                <hr style={{color:'black', height:'3px'}}/>
                                
                                <Button2 variant="contained" style={{backgroundColor:'#E3E3FB',marginLeft:'20px',fontFamily:'Poppins-Regular', textTransform: 'capitalize', textAlign:'left', paddingLeft:'30px', fontSize:'17px', width:'300px'}}
                                >Akun Saya</Button2>

                                <Button2 variant="contained" onClick={() => navigate("/riwayatvak")} style={{ marginLeft:'20px',fontFamily:'Poppins-Regular', textTransform: 'capitalize', textAlign:'left', paddingLeft:'30px', fontSize:'17px', width:'300px'}}
                                >Riwayat Vaksin</Button2>

                                <Button2 variant="contained" onClick={() => navigate("/riwayattran")} style={{marginLeft:'20px',fontFamily:'Poppins-Regular', textTransform: 'capitalize', textAlign:'left', paddingLeft:'30px', fontSize:'17px', width:'300px'}}
                                >Riwayat Transaksi</Button2>

                                <Button2 variant="contained" style={{marginLeft:'20px',fontFamily:'Poppins-Regular', textTransform: 'capitalize', textAlign:'left', paddingLeft:'30px', fontSize:'17px', width:'300px'}}
                                >Keluar</Button2>
                            </div>


                            <div style={{width:'70%', height:'900px', backgroundColor:'white', marginRight:'5%',  marginTop:'20px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', border:'1px solid black', borderRadius:'10px'}}>
                                <Teks style={{marginLeft:'1em', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '30px',marginBottom:'25px', fontSize:'32px'}}>Akun Saya</Teks>
                               
                                <hr style={{color:'black', height:'3px'}}/>
                                
                                
                                <MainForm>
                                    
                                    <div style={{display:'flex', justifyContent:'left',borderRadius:'10px',marginLeft:'3em', marginTop:'1em',paddingTop:'2em', paddingBottom:'2em', marginRight:'3em'}}>
                                        <div>
                                            <Teks style={{marginTop:'20px', fontFamily:'Poppins-Regular', textAlign:'left', paddingLeft:'30px', fontSize:'17px', width:'300px'}}>Nama</Teks>
                                            <Teks style={{marginTop:'40px', fontFamily:'Poppins-Regular', textAlign:'left', paddingLeft:'30px', fontSize:'17px', width:'300px'}}>Email</Teks>
                                            <Teks style={{marginTop:'40px', fontFamily:'Poppins-Regular', textAlign:'left', paddingLeft:'30px', fontSize:'17px', width:'300px'}}>Password</Teks>
                                            <Teks style={{marginTop:'40px', fontFamily:'Poppins-Regular', textAlign:'left', paddingLeft:'30px', fontSize:'17px', width:'300px'}}>Tanggal Lahir</Teks>
                                            <Teks style={{marginTop:'40px', fontFamily:'Poppins-Regular', textAlign:'left', paddingLeft:'30px', fontSize:'17px', width:'300px'}}>Jenis Kelamin</Teks>
                                            <Teks style={{marginTop:'40px', fontFamily:'Poppins-Regular', textAlign:'left', paddingLeft:'30px', fontSize:'17px', width:'300px'}}>No Telepon</Teks>
                                            <Teks style={{marginTop:'40px', fontFamily:'Poppins-Regular', textAlign:'left', paddingLeft:'30px', fontSize:'17px', width:'300px'}}>NIK</Teks>
                                            <Teks style={{marginTop:'40px', fontFamily:'Poppins-Regular', textAlign:'left', paddingLeft:'30px', fontSize:'17px', width:'300px'}}>NIM / NIP</Teks>
                                        </div>
                                        <div >
                                            <Input
                                                type="text"
                                                name="name"
                                                value={'Gabriella Evan'}
                                                style={{backgroundColor:'#E3E3FB', borderRadius:'20px', width:'530px'}}
                                                
                                            ></Input>
                                            <Input
                                                type="email"
                                                name="email"
                                                value={'gabriel.evan@gmail.com'}
                                                style={{backgroundColor:'#E3E3FB', borderRadius:'20px', width:'530px'}}
                                                
                                            ></Input>
                                            <Input
                                                type="password"
                                                name="password"
                                                value={'password'}
                                                style={{backgroundColor:'#E3E3FB', borderRadius:'20px', width:'530px'}}
                                                
                                            ></Input>

                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <Stack spacing={3}>
                                                <DatePicker
                                                    
                                                    value={value}
                                                    onChange={(newValue) => {
                                                    setValue(newValue);
                                                    }}
                                                    InputProps={{style: {fontSize: 15, borderRadius:'15px',backgroundColor:'#E3E3FB',fontFamily:'Poppins-Regular'}}} 
                                                    renderInput={(params) => (
                                                    <TextField {...params}/>
                                                    )}
                                                />
                                                </Stack>
                                            </LocalizationProvider>
                                            
                                            <div style={{marginTop:'20px'}}>
                                                <Form>
                                                    {['radio'].map((type) => (
                                                        <div key={`inline-${type}`} className="mb-3" style={{display:'flex', justifyContent:'left'}}>
                                                        <Form.Check
                                                            inline
                                                            label="Laki-laki"
                                                            name="group1"
                                                            type={type}
                                                            id={`inline-${type}-1`}
                                                            style={{paddingTop:'5px',height:'40px',fontFamily:'Poppins-Regular', fontSize:'17px', backgroundColor:'#E3E3FB',borderRadius:'10px',paddingLeft:'50px', paddingRight:'10px'}}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="Perempuan"
                                                            name="group1"
                                                            type={type}
                                                            id={`inline-${type}-2`}
                                                            style={{paddingTop:'5px',height:'40px',fontFamily:'Poppins-Regular', fontSize:'17px', backgroundColor:'#E3E3FB',borderRadius:'10px',paddingLeft:'50px', paddingRight:'10px'}}
                                                        />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                            

                                            <Input
                                                type="text"
                                                name="notelp"
                                                value={'081234764328'}
                                                style={{backgroundColor:'#E3E3FB', borderRadius:'20px', width:'530px'}}
                                                
                                            ></Input>
                                            <Input
                                                type="text"
                                                name="nik"
                                                value={'517840234757001'}
                                                style={{backgroundColor:'#E3E3FB', borderRadius:'20px', width:'530px'}}
                                                
                                            ></Input>
                                            <Input
                                                type="text"
                                                name="nim"
                                                value={'205170437921'}
                                                style={{backgroundColor:'#E3E3FB', borderRadius:'20px', width:'530px'}}
                                                
                                            ></Input>
                                        </div>
                                    </div>
                                        <MainButton style={{marginLeft:'35%', marginRight:'35%',width:'30%', height:'50px', marginTop:'20px', paddingTop:'0px', paddingBottom:'0px', fontSize:'20px'}}>Simpan</MainButton>
                                 
                                </MainForm>
                            </div>
                    </Content>
                    <div style={{backgroundColor:'#F9F9F9', height:'900px'}} />
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