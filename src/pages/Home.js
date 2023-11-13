import React ,{useState} from "react";
import styled from 'styled-components';
import HideAppBar from '../components/Navbar';
import Footer from '../components/Footer';
import InfoHome from "../components/InfoHome";
import {Dasboard, Pendaftaran, Pendapat, Informasi} from "../components/HomeCom";
import { Link } from 'react-router-dom';
import '../App.css';
import { style } from "@mui/system";
// import Button from '@mui/material/Button';
import dokter from '../asset/icon/Group 92.svg';
import vaksin from '../asset/icon/vaksin.svg';
import covid from '../asset/icon/covid.svg';
import hospital from '../asset/icon/hospital.svg';
import schedule from '../asset/icon/schedule.svg';
import covidtest from '../asset/icon/covid-test.svg';
import medicine from '../asset/icon/medicine.svg';
import news from '../asset/icon/news.svg';
import keuntungan from '../asset/icon/keuntungan.png';
import untung from '../asset/icon/frame.svg';
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
`;

const Btn = styled.div`
    margin-top: 20px;
    margin-left: 110px;
    display: flex;
    justify-content: left;
`;

const Button = styled.button`
    background: var(--button, linear-gradient(98deg, #56E0E0 0.33%, #007299 93.35%));
	font-weight: bold;
	color: #fff;
	outline: none;
	border: none;
	padding: 1.5rem 0;
	font-size: 2rem;
	font-family: inherit;
	border-radius: 39px;
	transition: 0.2s all;
	margin-top: 4rem;
	&:hover {
		cursor: pointer;
		background: var(--button, linear-gradient(98deg, #41AAAA 0.33%, #007299 93.35%));
	}
`;

const Button2 = styled.button`
    background-color: transparent;
    font-weight: bold;
    color: #6F70DA;
    outline: none;
    border: none;
    padding: 1.5rem 0;
    font-size: 2rem;
    font-family: inherit;
    border-radius: 1rem;
    border: 1px solid #6F70DA;
    transition: 0.2s all;
    margin-top: 4rem;
    &:hover {
        cursor: pointer;
        background-color: #6F70DA;
        color: #FFFFFF;
    }
`;

const Shape = styled.div`
    width: 62px;
    height: 62px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--button, linear-gradient(98deg, #41AAAA 0.33%, #007299 93.35%));
    justify-items: center;
    text-align:center;
    margin: auto;
    padding: 10px;
`;

const Home = () => {
    
    const isAnyToken = JSON.parse(localStorage.getItem('token'));
    const navigate = useNavigate()
    const { authToken } = useAuth();

    // axios.get(`http://localhost:5000/dashboard/`).then((res) => {
    //     console.log(res);
    // // setPost(response.data);
    // }).catch(err => console.log(err));

    return (
        <div>
            <HideAppBar/>
            
            <Content style={{backgroundColor:'#F4FEFF'}}>
                <div className="col-md-6" style={{paddingTop: '200px'}}>
                    <div style={{display:'flex', marginLeft:'3em', fontSize:'3.5em'}}>
                        <Teks>Langkah Cerdas,</Teks>
                        <Teks3>Reservasi Vaksin
                        </Teks3>
                    </div>
                    <Teks style={{marginLeft:'3em', marginRight: '2em', fontSize:'3.5em'}}>Tanpa Ribet!</Teks>
                    
                    <Teks2 style={{marginLeft:'7.5em', marginRight: '2em', marginTop:'40px'}}>Solusi pintar untuk mendapatkan vaksin COVID-19 dengan mudah. Temukan jadwal, lokasi, dan buat reservasi online. Lindungi diri Anda dan yang terkasih dengan satu langkah sederhana!
                    </Teks2>
                    
                    { isAnyToken == null ? (
                    <Btn>
                        <Button variant="contained" onClick={() => navigate("/laypol")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'15px', width:'130px'
                       }} >Login Akun</Button>
                    </Btn>
                    ):(
                        <></>
                    )}
                </div>
                <div className="col-md-6" style={{paddingTop:'40px', paddingLeft:'40px',height: '80%'}}>
                    <img src={dokter} alt="Logo" height="700px" width="100%"/>
                </div>
            </Content>

            <Content style={{marginTop:'40px'}}>
                <div className="col-md-5" >
                    <img src={vaksin} alt="Logo" height="500px"/>
                </div>

                <div className="col-md-5">
                    <div style={{ fontSize:'3.5em', display:'flex', justifyContent:'right'}}>
                        <Teks>Reservasi</Teks>
                        <Teks3 style={{paddingLeft:'10px'}}>Vaksin</Teks3>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <Teks2 style={{textAlign:'right'}}>
                            Reservasi kapan saja, tanpa terbatas oleh jam operasional kantor atau pusat vaksinasi.
                        </Teks2>
                    </div>
                    <div style={{display:'flex', marginTop:'20px'}}>
                       <div className="col-md-6" >
                            <Shape>
                                <img src={hospital} alt="Logo"/>
                            </Shape>
                            <Teks2 style={{textAlign:'center', fontWeight:'700', color:'black'}}>
                                Akses 24/7
                            </Teks2>
                       </div>
                       <div className="col-md-6" >
                            <Shape>
                                <img src={schedule} alt="Logo"/>
                            </Shape>
                            <Teks2 style={{textAlign:'center', fontWeight:'700', color:'black'}}>
                                Tidak perlu mengantri
                            </Teks2>
                       </div>
                    </div>
                    <div style={{display:'flex', marginTop:'20px'}}>
                       <div className="col-md-6">
                            <Shape style={{paddingLeft:'0px'}}>
                                <img src={covidtest} alt="Logo"/>
                            </Shape>
                            <Teks2 style={{textAlign:'center', fontWeight:'700', color:'black'}}>
                                Aman & Terpercaya
                            </Teks2>
                       </div>
                       <div className="col-md-6">
                            <Shape>
                                <img src={medicine} alt="Logo"/>
                            </Shape>
                            <Teks2 style={{textAlign:'center', fontWeight:'700', color:'black'}}>
                                Pasti dapat vaksin
                            </Teks2>
                       </div>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <Btn style={{justifyContent:'center', alignItems:'center'}}>
                            <Button variant="contained" onClick={() => navigate("/reservasi")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', width:'150px'}} 
                            >Mulai Reservasi
                            </Button>
                        </Btn>
                    </div>
                </div>
            </Content>

            <Content style={{marginTop:'40px'}}>
                <div className="col-md-5">
                    <div style={{ fontSize:'3.5em', display:'flex', justifyContent:'left'}}>
                        <Teks>Reservasi</Teks>
                        <Teks3 style={{paddingLeft:'10px'}}>Tes Covid-19</Teks3>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <Teks2 style={{textAlign:'left'}}>
                            Reservasi kapan saja, tanpa terbatas oleh jam operasional kantor atau pusat tes COVID-19.
                        </Teks2>
                    </div>
                    <div style={{display:'flex', marginTop:'20px'}}>
                       <div className="col-md-6" >
                            <Shape>
                                <img src={hospital} alt="Logo"/>
                            </Shape>
                            <Teks2 style={{textAlign:'center', fontWeight:'700', color:'black'}}>
                                Akses 24/7
                            </Teks2>
                       </div>
                       <div className="col-md-6" >
                            <Shape>
                                <img src={schedule} alt="Logo"/>
                            </Shape>
                            <Teks2 style={{textAlign:'center', fontWeight:'700', color:'black'}}>
                                Tidak perlu mengantri
                            </Teks2>
                       </div>
                    </div>
                    <div style={{display:'flex', marginTop:'20px'}}>
                       <div className="col-md-6">
                            <Shape style={{paddingLeft:'0px'}}>
                                <img src={covidtest} alt="Logo"/>
                            </Shape>
                            <Teks2 style={{textAlign:'center', fontWeight:'700', color:'black'}}>
                                Aman & Terpercaya
                            </Teks2>
                       </div>
                       <div className="col-md-6">
                            <Shape>
                                <img src={medicine} alt="Logo"/>
                            </Shape>
                            <Teks2 style={{textAlign:'center', fontWeight:'700', color:'black'}}>
                                Pasti dapat tes covid-19
                            </Teks2>
                       </div>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <Btn style={{justifyContent:'center', alignItems:'center'}}>
                            <Button variant="contained" onClick={() => navigate("/laypol")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', width:'150px'}} 
                            >Mulai Reservasi
                            </Button>
                        </Btn>
                    </div>
                </div>

                <div className="col-md-5" style={{textAlign:'right'}}>
                    <img src={covid} alt="Logo" height="500px" />
                </div>
            </Content>

            <Content style={{marginTop:'40px',backgroundColor:'#F4FEFF'}}>
                <div className="col-md-10">
                    <div style={{ fontSize:'3.5em', display:'flex', justifyContent:'center'}}>
                        <Teks>Berita &</Teks>
                        <Teks3 style={{paddingLeft:'10px'}}>Artikel</Teks3>
                    </div>
                    
                    <div style={{display:'flex', marginTop:'20px', justifyContent:'center'}}>
                       <Card style={{ width: '30rem', padding:'20px', borderRadius: '30px', cursor:'pointer',background: 'var(--card, linear-gradient(180deg, #4ED6DA 0%, #04789D 100%))'}}>
                            <Card.Img variant="top" src={news}/>
                            <Card.Body>
                                <Card.Title>
                                    <Teks2 style={{fontWeight:'700', color:'white'}}>
                                        Makanan Peningkat Imun
                                    </Teks2>
                                </Card.Title>
                                <Card.Text>
                                    <Teks2 style={{fontSize:'10px', color:'white'}}>
                                        Cuaca yang tidak menentu sering menyebabkan seseorang mudah terserang penyakit karena imun tubuh yang rendah. Cari tahu makanan apa saja yang dapat meningkatkan imun Anda!
                                    </Teks2>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '30rem', padding:'20px', marginLeft:'10px', marginRight:'10px',borderRadius: '30px',  cursor:'pointer',background: 'var(--card, linear-gradient(180deg, #4ED6DA 0%, #04789D 100%))'}}>
                            <Card.Img variant="top" src={news}/>
                            <Card.Body>
                                <Card.Title>
                                    <Teks2 style={{fontWeight:'700', color:'white'}}>
                                        Makanan Peningkat Imun
                                    </Teks2>
                                </Card.Title>
                                <Card.Text>
                                    <Teks2 style={{fontSize:'10px', color:'white'}}>
                                        Cuaca yang tidak menentu sering menyebabkan seseorang mudah terserang penyakit karena imun tubuh yang rendah. Cari tahu makanan apa saja yang dapat meningkatkan imun Anda!
                                    </Teks2>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '30rem', padding:'20px', borderRadius: '30px',  cursor:'pointer',background: 'var(--card, linear-gradient(180deg, #4ED6DA 0%, #04789D 100%))'}}>
                            <Card.Img variant="top" src={news}/>
                            <Card.Body>
                                <Card.Title>
                                    <Teks2 style={{fontWeight:'700', color:'white'}}>
                                        Makanan Peningkat Imun
                                    </Teks2>
                                </Card.Title>
                                <Card.Text>
                                    <Teks2 style={{fontSize:'10px', color:'white'}}>
                                        Cuaca yang tidak menentu sering menyebabkan seseorang mudah terserang penyakit karena imun tubuh yang rendah. Cari tahu makanan apa saja yang dapat meningkatkan imun Anda!
                                    </Teks2>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </div>
                    
                    <div style={{marginTop:'20px', marginBottom:'20px',display:'flex',justifyContent:'center', textAlign:'center'}}>
                        <Button variant="contained" onClick={() => navigate("/laypol")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', paddingLeft:'10px', paddingRight:'10px'}} 
                        >Selengkapnya
                        </Button>
                    </div>
                </div>
            </Content>

            <Footer style={{position:'absolute'}}/>
           
        </div>
    );
};

export default Home;