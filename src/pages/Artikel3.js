import React ,{useState} from "react";
import styled from 'styled-components';
import HideAppBar from '../components/Navbar';
import Footer from '../components/Footer';
import InfoHome from "../components/InfoHome";
import '../App.css';
// import Button from '@mui/material/Button';
import artikel from '../asset/background/artikel3.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../config/Auth';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

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
    font-family: Poppins-Medium;
    color: black;
    font-size: 20px;
    text-align: justify;
    margin-left:20px;
    margin-right:20px;
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

const Button2 = styled.button`
    background: white;
	font-weight: bold;
	color: #005C7B ;
	border: 1px solid #005C7B;
	padding: 5px 5px;
	font-size: 2rem;
	font-family: inherit;
	border-radius: 39px;
	transition: 0.2s all;
	margin-top: 20px;
    margin-bottom: 20px;
    width:100px;
	&:hover {
        border:none;
		cursor: pointer;
        color:white;
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

const Artikel3 = () => {
    
    const {  setAndGetTokens } = useAuth();
    const navigate = useNavigate();
    return (
        <div>
            <HideAppBar/>

            <Teks2 style={{marginLeft:'7.5em', marginRight: '2em', marginTop:'40px',color:'black', cursor:'pointer', paddingTop:'30px'}} onClick={() => navigate("/")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path d="M8.5 15L1.5 8L8.5 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                &nbsp;
                Halaman Utama
            </Teks2>
                
            <Content style={{width:'100%', marginTop:'20px', marginBottom:'20px', justifyContent:'center', alignItems:'center'}}>
                    <div style={{width:'100%', display:'flex', flexDirection:'column',backgroundColor:'white', marginLeft:'5%', marginRight:'5%', marginTop:'20px', paddingBottom:'20px',borderRadius:'30px',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', textAlign:'center'}}>
                        <Teks style={{marginLeft:'2.3em', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '50px',fontSize:'32px'}}>
                        Udara Buruk Sebabkan Gangguan Pernapasan
                        </Teks>
                        
                        <Teks2 style={{textAlign:'center'}}>
                            Mulia Jonas &emsp; 11 November 2023
                        </Teks2>

                        <div style={{marginTop:'10px', marginBottom:'20px'}}>
                            <img src={artikel} alt="Logo" />
                        </div>

                        <Teks3>
                        Udara yang bersih dan segar adalah hak setiap individu untuk bernapas dengan bebas dan sehat. Namun, semakin seringnya kondisi udara yang tercemar telah mengakibatkan risiko serius terhadap kesehatan pernapasan. Fenomena udara buruk tidak hanya memengaruhi lingkungan, tetapi juga membawa dampak besar terhadap kesehatan manusia, khususnya sistem pernapasan.
                        </Teks3>
                        <br/>

                        <Teks3 style={{fontSize:'25px'}}>
                        <b>Udara Buruk: Penyebab dan Dampaknya pada Pernapasan</b>
                        </Teks3>

                        <br/>

                        <Teks3>
                        <b>Sumber Pencemar Udara</b>
                        <br/>
                        Udara yang tercemar dapat berasal dari berbagai sumber, mulai dari polusi kendaraan bermotor, pabrik industri, hingga pembakaran biomassa. Partikel-partikel mikroskopis yang terhirup dapat menyebabkan iritasi pada saluran pernapasan dan merusak organ-organ penting.
                        </Teks3>

                        <br/>
                        
                        <Teks3>
                        <b>Gangguan Pernapasan yang Diakibatkan</b>
                        <br/>
                        <ol>
                            <li>Iritasi Saluran Pernapasan: Partikel pencemar udara dapat menyebabkan iritasi pada hidung, tenggorokan, dan paru-paru. Hal ini bisa berujung pada batuk, pilek, atau radang tenggorokan.</li>
                            <li>Peningkatan Risiko Infeksi: Pemaparan jangka panjang terhadap udara yang tercemar dapat melemahkan sistem kekebalan tubuh, meningkatkan risiko terkena infeksi pernapasan seperti pneumonia atau bronkitis.</li>
                            <li>Pengaruh Pada Penyakit Kronis: Bagi individu yang sudah memiliki penyakit pernapasan kronis seperti asma atau penyakit paru obstruktif kronik (PPOK), udara buruk dapat memperburuk kondisi mereka dan memicu serangan penyakit.</li>
                        </ol>
                        </Teks3>

                        <br/>
                        
                        <Teks3 style={{fontSize:'25px'}}>
                        <b>Upaya Menghadapi Ancaman Udara Buruk Terhadap Kesehatan Pernapasan</b>
                        </Teks3>
                        <br/>

                        <Teks3>
                        <b>Kesadaran dan Pendidikan Masyarakat</b>
                        <br/>
                        Meningkatkan kesadaran masyarakat tentang bahaya udara buruk dan dampaknya terhadap kesehatan pernapasan menjadi langkah penting. Kampanye edukasi dapat membangun pemahaman yang lebih baik tentang perlunya menjaga kualitas udara.</Teks3>

                        <br/>
                        
                        <Teks3>
                        <b>Penyediaan Akses Perawatan Kesehatan yang Mumpuni</b>
                        <br/>
                        Memastikan akses semua individu terhadap perawatan kesehatan yang memadai menjadi kunci penting dalam menghadapi konsekuensi dari udara buruk terhadap kesehatan pernapasan.
                        </Teks3>

                    </div>
                </Content>
               
            <Footer style={{position:'absolute'}}/>
        </div>
    );
};

export default Artikel3;