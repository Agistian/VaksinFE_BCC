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
import keuntungan from '../asset/icon/keuntungan.png';
import untung from '../asset/icon/frame.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../config/Auth';
import { tweetAPI } from '../config/api';
import useSWR from 'swr';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'

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

const Home = () => {
    
    
    const navigate = useNavigate()
    const { authToken } = useAuth();

    // axios.get(`http://localhost:5000/dashboard/`).then((res) => {
    //     console.log(res);
    // // setPost(response.data);
    // }).catch(err => console.log(err));

    return (
        <div>
            {/* <HideAppBar/> */}
            
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
                    
                    <Btn>
                        <Button variant="contained" onClick={() => navigate("/laypol")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'15px', width:'130px'
                       }} >Login Akun</Button>
                    </Btn>
                </div>
                <div className="col-md-6" style={{paddingTop:'40px', paddingLeft:'40px',height: '80%'}}>
                    <img src={dokter} alt="Logo" height="700px" width="100%"/>
                </div>
            </Content>

            <br/>

            {/* <Content style={{height:'70%'}}>
                <Dasboard />
            </Content>

            <Content style={{ height:'70%'}}>
                <Pendapat />
            </Content> */}

            
            <Footer style={{position:'absolute'}}/>
           
        </div>
    );
};

export default Home;