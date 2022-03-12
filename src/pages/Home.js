import React from "react";
import styled from 'styled-components';
import HideAppBar from '../components/Navbar';
import Footer from '../components/Footer';
import {Dasboard, Pendaftaran, Pendapat, Informasi} from "../components/HomeCom";
import { Link } from 'react-router-dom';
import '../App.css';
import { style } from "@mui/system";
// import Button from '@mui/material/Button';
import dokter from '../asset/icon/dokter.png';
import keuntungan from '../asset/icon/keuntungan.png';
import untung from '../asset/icon/frame.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../config/Auth';
import { tweetAPI } from '../config/api';
import useSWR from 'swr';
import axios from 'axios';

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

const Button = styled.button`
    background-color: #6F70DA;
	font-weight: bold;
	color: #fff;
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
		background-color: #FFFFFF;
		color: #6F70DA;
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
    return (
        <div  style={{backgroundImage:"url('./bg_header.png')", height: '500px', backgroundSize: 'cover', width:'100%'}}>
            <HideAppBar/>
            <Content style={{height: '100%' ,width:'100%', marginTop:'50px'}}>
                <div style={{width:'100%', paddingTop: '150px', height: '80%'}}>
                    <Teks style={{marginLeft:'3em', marginRight: '2em', fontSize:'3.5em'}}>The Updated Information About UB Health Centre Service</Teks>
                    <Btn>
                        <Button variant="contained" onClick={() => navigate("/laypol")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'15px', width:'130px'
                       }} >Get Started</Button>
                        <Button2 variant="contained" onClick={() => window.location.href = "https://klinik.ub.ac.id/"} style={{marginLeft:'20px',fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'15px', width:'180px'}}
                        >Klinik UB Website</Button2>
                    </Btn>
                </div>
                <div style={{paddingTop:'40px', paddingLeft:'40px', paddingRight:'60px',height: '80%', width:'90%'}}>
                    <div style={{backgroundImage:'url("./gb_header.png")', backgroundSize:'cover', backgroundRepeat:'no-repeat', height:"435px", width:"80%"}}>
                        <img src={dokter} alt="Logo" height="460px" width="120%"/>
                    </div>
                    
                </div>
            </Content>
            <Content style={{backgroundColor:'#F9F9F9', height:'90%'}}>
                <div style={{width:'50%', paddingTop: '80px', paddingLeft:'360px', height: '100%'}}>
                    <img src={keuntungan} alt="keuntungan" height="250px" width="250px"/>
                </div>
                <div style={{paddingLeft:'100px',paddingTop:'35px', height: '100%', width:'50%'}}>
                    <Teks style={{fontSize:'30px'}}>Keuntungan B-Health</Teks>
                    <br/>
                    <img src={untung} width="70%"/>
                </div>
            </Content>
            <Content style={{height:'70%'}}>
                <Dasboard />
            </Content>
            <Content style={{backgroundColor:'#F9F9F9', height:'50%'}}>
                <Pendaftaran />
            </Content>
            <Content style={{ height:'70%'}}>
                <Pendapat />
            </Content>
            <Content style={{backgroundColor:'#F9F9F9', height:'70%'}}>
                <Informasi />
            </Content>
            <Content style={{backgroundColor:'#F9F9F9', height:'70%'}}>
                <Footer style={{position:'absolute'}}/>
            </Content>
        </div>
    );
};

export default Home;