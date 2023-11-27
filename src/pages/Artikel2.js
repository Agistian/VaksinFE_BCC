import React ,{useState} from "react";
import styled from 'styled-components';
import HideAppBar from '../components/Navbar';
import Footer from '../components/Footer';
import InfoHome from "../components/InfoHome";
import '../App.css';
// import Button from '@mui/material/Button';
import artikel from '../asset/background/artikel2.png';
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

const Artikel2 = () => {
    
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
                        Pentingnya Mencuci Tangan Sebelum Makan: Sebuah Langkah Kecil yang Berdampak Besar
                        </Teks>
                        
                        <Teks2 style={{textAlign:'center'}}>
                            Melani Arumi &emsp; 11 November 2023
                        </Teks2>

                        <div style={{marginTop:'10px', marginBottom:'20px'}}>
                            <img src={artikel} alt="Logo" />
                        </div>

                        <Teks3>
                        Mencuci tangan sebelum makan sering dianggap sebagai kebiasaan sederhana, namun memiliki dampak yang luar biasa penting terhadap kesehatan kita. Tindakan ini tidak hanya membuang kotoran yang terlihat, tetapi juga membersihkan kuman-kuman yang tidak terlihat. Berikut adalah beberapa alasan mengapa mencuci tangan sebelum makan sangat penting:    
                        </Teks3>
                        <br/>

                        <Teks3>
                        <b>Menghindari Penyakit Menular</b>
                        <br/>
                        Kuman dan bakteri dapat menyebar dengan cepat, terutama melalui sentuhan dengan tangan. Makan dengan tangan yang kotor dapat menjadi cara yang mudah bagi kuman untuk masuk ke dalam tubuh kita. Mencuci tangan sebelum makan membantu mencegah penularan penyakit yang disebabkan oleh kuman yang dapat membuat kita sakit.</Teks3>

                        <br/>
                        
                        <Teks3>
                        <b>Kebersihan Pribadi</b>
                        <br/>
                        Mencuci tangan sebelum makan adalah bentuk kebersihan pribadi yang sangat penting. Ini menunjukkan perhatian kita terhadap kesehatan dan kesejahteraan kita sendiri serta orang-orang di sekitar kita. Selain itu, tindakan ini juga merupakan bagian dari etika sosial yang baik.</Teks3>

                        <br/>
                        
                        <Teks3>
                        <b>Mengurangi Resiko Keracunan Makanan</b>
                        <br/>
                        Ketika kita menyentuh berbagai permukaan, tangan kita bisa menjadi sarang bagi berbagai kuman dan bakteri. Tanpa mencuci tangan sebelum makan, kita berisiko memindahkan kuman-kuman ini ke makanan kita. Hal ini dapat menyebabkan keracunan makanan atau infeksi perut lainnya.</Teks3>

                        <br/>
                        
                        <Teks3>
                        <b>Memupuk Kebiasaan Sehat di Kehidupan Sehari-hari</b>
                        <br/>
                        Mencuci tangan sebelum makan adalah kebiasaan sehat yang sederhana namun sangat berharga. Dengan melakukannya secara teratur, kita membiasakan diri untuk menjaga kebersihan tangan kita setiap saat, sehingga membantu mencegah berbagai penyakit yang dapat dicegah dengan prinsip kebersihan yang baik.
                        </Teks3>
                        
                    </div>
                </Content>
               
            <Footer style={{position:'absolute'}}/>
        </div>
    );
};

export default Artikel2;