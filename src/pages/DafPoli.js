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
import {Informasi} from '../components/Poli';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import {MainForm, Input, MainButton} from '../components/AccountForm';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DatePicker from '@mui/lab/DatePicker';


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

    const { authToken } = useAuth();
    const currUser =  axios.get('http://localhost:8080/user', {
					headers: { Authorization: `Bearer ${authToken}` },
				});
    
    const {  setAndGetTokens } = useAuth();
    
	const [forms, setForms] = useState({
		email: '',
		password: '',
		name: '',
	});

    //update
   
        console.log(authToken);
    
    //update
	const [isError, setIsError] = useState({ status: false, message: '' });

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const navigate = useNavigate();

    //select
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    //select

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
                    <Teks style={{marginLeft:'4.5em',fontFamily:'Poppins-Medium', fontSize:'17px', paddingTop: '60px'}}>Informasi / <button onClick={() => navigate("/laypol")} style={{border:'none', backgroundColor:'transparent'}}><Teks style={{fontFamily:'Poppins-Medium', fontSize:'17px'}}>Layanan Poli </Teks></button> / 
                    <button onClick={() => navigate("/jadpol")} style={{border:'none', backgroundColor:'transparent'}}><Teks style={{fontFamily:'Poppins-Medium', fontSize:'17px'}}>Jadwal Poli </Teks></button> / 
                    <button onClick={() => navigate("/dafpol")} style={{border:'none', backgroundColor:'transparent'}}><Teks style={{fontFamily:'Poppins-SemiBold', fontSize:'17px'}}>Daftar Poli </Teks></button>
                    
                    </Teks>
                    
                    <Content style={{width:'100%', marginTop:'20px'}}>
                            <div style={{width:'100%', height:'1200px', backgroundColor:'white', marginLeft:'5%', marginRight:'5%', marginTop:'20px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}>
                                <Teks style={{marginLeft:'2.3em', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '50px',fontSize:'32px'}}>Pendaftaran Poliklinik</Teks>

                                <div style={{marginLeft:'70px', marginRight:'80px', marginTop:'40px',display:'flex',alignContent:'center'}}>
                                        <div style={{width:'50%', border:'1px solid #909090', borderRadius:'10px'}}>
                                            <Teks style={{textAlign:'left', fontFamily:'Poppins-Medium', paddingLeft:'40px', paddingBottom: '10px', paddingTop: '20px', fontSize:'20px'}}>
                                            Informasi Khusus
                                            </Teks>
                                            
                                            <div>
                                                <Informasi/>
                                            </div>
                                            
                                        </div>
                                        <div style={{width:'50%', border:'1px solid #909090', marginLeft:'100px', borderRadius:'10px'}}>
                                            <Teks style={{textAlign:'left',fontFamily:'Poppins-Medium', paddingLeft:'40px', paddingBottom: '10px', paddingTop: '20px', fontSize:'20px'}}>
                                            Layanan Poli
                                            </Teks>
                                           
                                            <div style={{marginLeft:'30px', marginRight:'30px'}}>
                                                <MainForm>
                                                    <div className='Bagi'>
                                                        <Teks style={{color: 'red'}}> *</Teks><Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Masukkan NIK/KK Anda :</Teks>
                                                    </div>
                                                    <Input
                                                        type="text"
                                                        name="nik"
                                                        label="Enter your identity card number"
                                                        onChange={(e) => {
                                                            setForms(() => ({
                                                                ...forms,
                                                                email: e.target.value
                                                            }))
                                                        }}
                                                        style={{backgroundColor:'#E3E3FB', borderRadius:'20px'}}
                                                    ></Input>

                                                    <div className='Bagi'>
                                                    <Teks style={{color: 'red'}}> </Teks><Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Masukkan NIM/NIP Anda :</Teks>
                                                    </div>
                                                    <Input 
                                                        type="text"
                                                        name="nim"
                                                        label="Enter your student id / employee id"
                                                        onChange={(e) => {
                                                            setForms(() => ({
                                                                ...forms,
                                                                password: e.target.value
                                                            }))
                                                        }}
                                                        style={{backgroundColor:'#E3E3FB', borderRadius:'20px'}}
                                                    />

                                                    <div className='Bagi'>
                                                    <Teks style={{color: 'red'}}> *</Teks><Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Masukkan No Telp Anda :</Teks>
                                                    </div>
                                                    <Input 
                                                        type="text"
                                                        name="notelp"
                                                        label="Enter your phone number"
                                                        onChange={(e) => {
                                                            setForms(() => ({
                                                                ...forms,
                                                                password: e.target.value
                                                            }))
                                                        }}
                                                        style={{backgroundColor:'#E3E3FB', borderRadius:'20px'}}
                                                    />

                                                    <div className='Bagi'>
                                                    <Teks style={{color: 'red'}}> *</Teks><Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Pilih Jenis Layanan :</Teks>
                                                    </div>
                                                 
                                                    <inputlabel
                                                        id="demo-simple-select-label" 
                                                        label="Age"
                                                    >
                                                    </inputlabel>
                                                    <Select
                                                        inputid="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age}
                                                        label="Age"
                                                        onChange={handleChange}
                                                        style={{backgroundColor:'#E3E3FB',borderRadius:'15px'}}
                                                        
                                                    >
                                                        <MenuItem style={{fontFamily:'Poppins-Regular', fontSize:'15px'}} value={10}>Poli umum (Pemeriksaan Dokter Umum & Konsultasi)</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                   
                                                    <div className='Bagi'>
                                                    <Teks style={{color: 'red'}}> *</Teks><Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Tanggal Kunjungan :</Teks>
                                                    </div>
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

                                                    <div className='Bagi'>
                                                    <Teks style={{color: 'red'}}> *</Teks><Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Pilih Jadwal Kunjungan :</Teks>
                                                    </div>
                                                    <inputlabel
                                                        id="demo-simple-select-label2" 
                                                        label="Age"
                                                        className="MuiInput-input"
                                                    >
                                                    </inputlabel>
                                                    <Select
                                                        inputid="demo-simple-select-label2"
                                                        id="demo-simple-select2"
                                                        value={age}
                                                        label="Age"
                                                        onChange={handleChange}
                                                        style={{backgroundColor:'#E3E3FB',borderRadius:'15px'}}
                                                        InputLabelProps={{ style: { fontSize: 17 } }}
                                                        className="MuiInput-input"
                                                    >
                                                        <MenuItem style={{fontFamily:'Poppins-Regular', fontSize:'15px'}} value={10}> 08.00 - 10.00</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>

                                                    <div className='Bagi'>
                                                    <Teks style={{color: 'red'}}> *</Teks><Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Pilih Dokter yang Tersedia :</Teks>
                                                    </div>
                                                    <inputlabel
                                                        id="demo-simple-select-label3" 
                                                        label="Age"
                                                    >
                                                    </inputlabel>
                                                    <Select
                                                        inputid="demo-simple-select-label3"
                                                        id="demo-simple-select3"
                                                        value={age}
                                                        label="Age"
                                                        onChange={handleChange}
                                                        style={{backgroundColor:'#E3E3FB',borderRadius:'15px'}}
                                                        InputLabelProps={{ style: { fontSize: 15} }}
                                                    >
                                                        <MenuItem style={{fontFamily:'Poppins-Regular', fontSize:'15px'}} value={10}>Poli umum (Pemeriksaan Dokter Umum & Konsultasi)</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>

                                                    <MainButton onClick={() => navigate("/detpol")}>Lanjut Detail Booking</MainButton>


                                                </MainForm>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            
                    </Content>
                    <div style={{backgroundColor:'#F9F9F9', height:'1200px'}} />
                        <Content style={{backgroundColor:'#F9F9F9', height:'345px'}}>
                            <Footer style={{position:'absolute'}}/>
                        </Content>
                    </div>
               </div>
        </div>
    );
};

export default LayPoli;