import React ,{useState} from "react";
import styled from 'styled-components';
import HideAppBar from '../components/Navbar';
import Footer from '../components/Footer';
import InfoHome from "../components/InfoHome";
import '../App.css';
// import Button from '@mui/material/Button';
import vaksin2 from '../asset/icon/vaksin2.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../config/Auth';
import { tweetAPI } from '../config/api';
import useSWR from 'swr';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-size: cover;
    background-repeat:no-repeat;
    background-color:white;
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

const Reservasi = () => {
    
    
    const navigate = useNavigate()
    const { authToken } = useAuth();

    // axios.get(`http://localhost:5000/dashboard/`).then((res) => {
    //     console.log(res);
    // // setPost(response.data);
    // }).catch(err => console.log(err));

    return (
        <div>
            <HideAppBar/>
            
            <Content>
                <div className="col-md-6" style={{paddingTop: '30px'}}>
                    <Teks2 style={{marginLeft:'7.5em', marginRight: '2em', marginTop:'40px',color:'black', cursor:'pointer'}} onClick={() => navigate("/")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                            <path d="M8.5 15L1.5 8L8.5 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        &nbsp;
                        Halaman Utama
                    </Teks2>

                    <div style={{display:'flex', marginLeft:'3em', fontSize:'3.5em', marginTop:'20px'}}>
                        <Teks>Pilih&nbsp;</Teks>
                        <Teks3>Jadwal Vaksin
                        </Teks3>
                    </div >
                        
                    <div style={{marginLeft:'10em'}}>
                        <img src={vaksin2} alt="Logo" />
                    </div>
                </div>

                <div className="col-md-6" style={{paddingTop:'150px',height: '80%',justifyContent:'left', alignItems:'left', textAlign:'left'}}>
                    <Shape className="col-md-8">
                        <div style={{display:'flex'}}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M14.0002 25.6667C17.2218 25.6667 20.1385 24.3608 22.2497 22.2496C24.361 20.1383 25.6668 17.2216 25.6668 14C25.6668 10.7784 24.361 7.86169 22.2497 5.75041C20.1385 3.63917 17.2218 2.33333 14.0002 2.33333C10.7785 2.33333 7.86186 3.63917 5.75058 5.75041C3.63933 7.86169 2.3335 10.7784 2.3335 14C2.3335 17.2216 3.63933 20.1383 5.75058 22.2496C7.86186 24.3608 10.7785 25.6667 14.0002 25.6667Z" fill="#F5F5F5" stroke="#4F4F4F" stroke-width="2" stroke-linejoin="round"/>
                                <path d="M9.3335 14L12.8335 17.5L19.8335 10.5" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', marginLeft:'10px'}}>
                                <div>
                                    <Teks2 style={{color:'black', fontWeight:'700'}}>Senin, 13 November 2023</Teks2>
                                </div>
                                <div>
                                    <Teks2>Jadwal tersedia</Teks2>
                                </div>
                            </div>
                        </div>
                        <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <Button variant="contained" onClick={() => navigate("/dafvaksin")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', width:'150px'
                            }} >Reservasi Sekarang</Button>
                        </div>
                    </Shape>

                    <Shape className="col-md-8">
                        <div style={{display:'flex'}}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M14.0002 25.6667C17.2218 25.6667 20.1385 24.3608 22.2497 22.2496C24.361 20.1383 25.6668 17.2216 25.6668 14C25.6668 10.7784 24.361 7.86169 22.2497 5.75041C20.1385 3.63917 17.2218 2.33333 14.0002 2.33333C10.7785 2.33333 7.86186 3.63917 5.75058 5.75041C3.63933 7.86169 2.3335 10.7784 2.3335 14C2.3335 17.2216 3.63933 20.1383 5.75058 22.2496C7.86186 24.3608 10.7785 25.6667 14.0002 25.6667Z" fill="#F5F5F5" stroke="#4F4F4F" stroke-width="2" stroke-linejoin="round"/>
                                <path d="M9.3335 14L12.8335 17.5L19.8335 10.5" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', marginLeft:'10px'}}>
                                <div>
                                    <Teks2 style={{color:'black', fontWeight:'700'}}>Senin, 13 November 2023</Teks2>
                                </div>
                                <div>
                                    <Teks2>Jadwal tersedia</Teks2>
                                </div>
                            </div>
                        </div>
                        <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <Button variant="contained" onClick={() => navigate("/laypol")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', width:'150px'
                            }} >Reservasi Sekarang</Button>
                        </div>
                    </Shape>

                    <Shape className="col-md-8">
                        <div style={{display:'flex'}}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M14.0002 25.6667C17.2218 25.6667 20.1385 24.3608 22.2497 22.2496C24.361 20.1383 25.6668 17.2216 25.6668 14C25.6668 10.7784 24.361 7.86169 22.2497 5.75041C20.1385 3.63917 17.2218 2.33333 14.0002 2.33333C10.7785 2.33333 7.86186 3.63917 5.75058 5.75041C3.63933 7.86169 2.3335 10.7784 2.3335 14C2.3335 17.2216 3.63933 20.1383 5.75058 22.2496C7.86186 24.3608 10.7785 25.6667 14.0002 25.6667Z" fill="#F5F5F5" stroke="#4F4F4F" stroke-width="2" stroke-linejoin="round"/>
                                <path d="M9.3335 14L12.8335 17.5L19.8335 10.5" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', marginLeft:'10px'}}>
                                <div>
                                    <Teks2 style={{color:'black', fontWeight:'700'}}>Senin, 13 November 2023</Teks2>
                                </div>
                                <div>
                                    <Teks2>Jadwal tersedia</Teks2>
                                </div>
                            </div>
                        </div>
                        <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <Button variant="contained" onClick={() => navigate("/laypol")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', width:'150px'
                            }} >Reservasi Sekarang</Button>
                        </div>
                    </Shape>

                    <Shape className="col-md-8">
                        <div style={{display:'flex'}}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M14.0002 25.6667C17.2218 25.6667 20.1385 24.3608 22.2497 22.2496C24.361 20.1383 25.6668 17.2216 25.6668 14C25.6668 10.7784 24.361 7.86169 22.2497 5.75041C20.1385 3.63917 17.2218 2.33333 14.0002 2.33333C10.7785 2.33333 7.86186 3.63917 5.75058 5.75041C3.63933 7.86169 2.3335 10.7784 2.3335 14C2.3335 17.2216 3.63933 20.1383 5.75058 22.2496C7.86186 24.3608 10.7785 25.6667 14.0002 25.6667Z" fill="#F5F5F5" stroke="#4F4F4F" stroke-width="2" stroke-linejoin="round"/>
                                <path d="M9.3335 14L12.8335 17.5L19.8335 10.5" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', marginLeft:'10px'}}>
                                <div>
                                    <Teks2 style={{color:'black', fontWeight:'700'}}>Senin, 13 November 2023</Teks2>
                                </div>
                                <div>
                                    <Teks2>Jadwal tersedia</Teks2>
                                </div>
                            </div>
                        </div>
                        <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <Button variant="contained" onClick={() => navigate("/laypol")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', width:'150px'
                            }} >Reservasi Sekarang</Button>
                        </div>
                    </Shape>
                </div>
            </Content>

            <Footer style={{position:'absolute'}}/>
           
        </div>
    );
};

export default Reservasi;