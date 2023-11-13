import React, { useState } from "react";
import styled from 'styled-components';
import HideAppBar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';
import axios from 'axios';
import { useAuth } from '../config/Auth';
import {InformasiSwab} from '../components/Poli';
import { useNavigate } from 'react-router-dom';
import {MainForm, Input, MainButton} from '../components/AccountForm';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Form from 'react-bootstrap/Form';

const Content = styled.div`
	width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const Teks = styled.div`
    font-family: Poppins-SemiBold;
    font-weight: 700;
    font-size: 45px;
`;

const Teks2 = styled.div`
    color: #979797;
    text-align: justify;
    font-family: Poppins-Medium;
    font-size: 15px;
`;

const Teks3 = styled.div`
    font-family: Poppins-SemiBold;
    background: var(--text, linear-gradient(90deg, #45BDBF 0.21%, #005C7B 99.79%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 45px;
`;

const Button = styled.button`
    background: var(--button, linear-gradient(98deg, #56E0E0 0.33%, #007299 93.35%));
	font-weight: bold;
	color: #fff;
	outline: none;
	border: none;
	padding: 10px 10px;
	font-size: 2rem;
	font-family: inherit;
	border-radius: 39px;
	transition: 0.2s all;
	margin-top: 20px;
	&:hover {
		cursor: pointer;
		background: var(--button, linear-gradient(98deg, #41AAAA 0.33%, #007299 93.35%));
	}
`;

const Shape = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    border-radius: 8px;
    border: 1px solid var(--stroke-light, #DEE2E6);
    background: var(--gray-white, #FFF);
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.08), 0px 0px 2px 0px rgba(0, 0, 0, 0.12);
    margin-bottom: 20px;
`;
  
const DafVaksin = () => {
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
        <div>
            <HideAppBar />

            <Teks2 style={{marginLeft:'7.5em', marginRight: '2em', marginTop:'40px',color:'black', cursor:'pointer', paddingTop:'30px'}} onClick={() => navigate("/reservasi")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path d="M8.5 15L1.5 8L8.5 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                &nbsp;
                Jadwal Vaksin
            </Teks2>
                
            <Content style={{width:'100%', marginTop:'20px', marginBottom:'20px', justifyContent:'center', alignItems:'center'}}>
                    <div style={{width:'100%', backgroundColor:'white', marginLeft:'5%', marginRight:'5%', marginTop:'20px', borderRadius:'30px',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', textAlign:'center'}}>
                        <Teks style={{marginLeft:'2.3em', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '50px',fontSize:'32px'}}>
                            Form Reservasi Vaksin
                        </Teks>
                        
                        <Teks2 style={{textAlign:'center'}}>
                            Silahkan isikan data Anda dengan sesuai untuk melakukan reservasi Vaksinasi.
                        </Teks2>

                        <div style={{marginLeft:'70px', marginRight:'80px', marginTop:'40px',display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <MainForm className="col-md-12"  style={{display:'flex'}}>

                                <div style={{display:'flex', width:'100%',flexDirection:'row', backgroundColor:'red'}}>
                                    <div className="col-md-6">
                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Nama Depan :</Teks>
                                        </div>
                                        <Input
                                            type="text"
                                            name="name"
                                            label="Masukkan nama depan anda"
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    name: e.target.value
                                                }))
                                            }}
                                            style={{backgroundColor:'#E3E3FB', borderRadius:'20px'}}
                                        ></Input>

                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>NIK :</Teks>
                                        </div>
                                        <Input 
                                            type="text"
                                            name="nik"
                                            label="Masukkan nik anda"
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    nik: e.target.value
                                                }))
                                            }}
                                            style={{backgroundColor:'#E3E3FB', borderRadius:'20px'}}
                                        />
                                        
                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Tanggal Lahir :</Teks>
                                        </div>

                                        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <Stack>
                                            <DatePicker
                                                
                                                value={value}
                                                onChange={(newValue) => {
                                                setValue(newValue);
                                                }}
                                                InputProps={{style: {fontSize: 15, borderRadius:'15px',backgroundColor:'#E3E3FB',fontFamily:'Poppins-Regular'}}} 
                                                renderInput={(params) => (
                                                <TextField {...params} />
                                                )}
                                            />
                                            </Stack>
                                        </LocalizationProvider> */}

                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>No Telpon :</Teks>
                                        </div>
                                        <Input 
                                            type="text"
                                            name="notelp"
                                            label="Masukkan no telp anda"
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    notelp: e.target.value
                                                }))
                                            }}
                                            style={{backgroundColor:'#E3E3FB', borderRadius:'20px'}}
                                        />
                                    
                                    </div>

                                    <div className="col-md-6">
                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Nama Belakang :</Teks>
                                        </div>
                                        <Input
                                            type="text"
                                            name="namebehind"
                                            label="Masukkan nama belakang anda"
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    namebehind: e.target.value
                                                }))
                                            }}
                                            style={{backgroundColor:'#E3E3FB', borderRadius:'20px'}}
                                        ></Input>

                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Jenis Kelamin :</Teks>
                                        </div>

                                        <div>
                                            <Form>
                                                {['radio'].map((type) => (
                                                    <div key={`inline-${type}`} className="mb-3" style={{display:'flex', justifyContent:'left'}}>
                                                    <Form.Check
                                                        inline
                                                        label="Laki-laki"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                        style={{fontFamily:'Poppins-Regular', fontSize:'17px', backgroundColor:'#E3E3FB',borderRadius:'10px',paddingLeft:'50px', paddingRight:'10px'}}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Perempuan"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        style={{fontFamily:'Poppins-Regular', fontSize:'17px', backgroundColor:'#E3E3FB',borderRadius:'10px',paddingLeft:'50px', paddingRight:'10px'}}
                                                    />
                                                    </div>
                                                ))}
                                            </Form>
                                        </div>

                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Umur :</Teks>
                                        </div>
                                        <Input 
                                            type="text"
                                            name="age"
                                            label="Masukkan umur anda"
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    age: e.target.value
                                                }))
                                            }}
                                            style={{backgroundColor:'#E3E3FB', borderRadius:'20px'}}
                                        />

                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Email :</Teks>
                                        </div>
                                        <Input 
                                            type="text"
                                            name="email"
                                            label="Masukkan email anda"
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    email: e.target.value
                                                }))
                                            }}
                                            style={{backgroundColor:'#E3E3FB', borderRadius:'20px'}}
                                        />

                                    </div>
                                </div>
                                
                                <div>
                                    <div className='Bagi'>
                                        <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Alamat Lengkap :</Teks>
                                    </div>
                                    <Input 
                                        type="textarea"
                                        name="alamat"
                                        label=""
                                        onChange={(e) => {
                                            setForms(() => ({
                                                ...forms,
                                                alamat: e.target.value
                                            }))
                                        }}
                                        style={{backgroundColor:'#E3E3FB', borderRadius:'20px'}}
                                    />
                                </div>

                                <Button>Simpan Form</Button>

                            </MainForm>
                        </div>
                    </div>
                    
            </Content>
               
            <Footer style={{position:'absolute'}}/>
        </div>
    );
};

export default DafVaksin;