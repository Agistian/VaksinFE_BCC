import React ,{useState} from "react";
import styled from 'styled-components';
import HideAppBar from '../components/Navbar';
import Footer from '../components/Footer';
import InfoHome from "../components/InfoHome";
import '../App.css';
// import Button from '@mui/material/Button';
import artikel from '../asset/background/artikel1.png';
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

const Artikel = () => {
    
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
                        Makanan Peningkat Imun Tubuh: Memperkuat Pertahanan Tubuh dengan Gizi Seimbang
                        </Teks>
                        
                        <Teks2 style={{textAlign:'center'}}>
                            Melani Arumi &emsp; 11 November 2023
                        </Teks2>

                        <div style={{marginTop:'10px', marginBottom:'20px'}}>
                            <img src={artikel} alt="Logo" />
                        </div>

                        <Teks3>
                            Keberhasilan tubuh dalam melawan penyakit tidak hanya bergantung pada genetika, tetapi juga pada asupan makanan yang tepat. Makanan yang kita konsumsi dapat menjadi senjata ampuh untuk meningkatkan sistem kekebalan tubuh. Inilah sejumlah makanan yang dapat menjadi pilihan tepat untuk meningkatkan daya tahan tubuh:
                        </Teks3>
                        <br/>

                        <Teks3>
                        <b>Buah-buahan Beri dan Jeruk</b>
                        <br/>
                        Buah-buahan beri seperti blueberry, raspberry, serta jeruk, kaya akan antioksidan dan vitamin C. Antioksidan membantu tubuh melawan radikal bebas, sementara vitamin C mendukung produksi sel-sel kekebalan tubuh yang penting.
                        </Teks3>

                        <br/>
                        
                        <Teks3>
                        <b>Sayuran Hijau Daun</b>
                        <br/>
                        Sayuran hijau seperti bayam, kale, dan brokoli mengandung berbagai nutrisi penting seperti vitamin A, C, dan E, serta antioksidan dan serat. Nutrisi ini membantu tubuh memperkuat sistem kekebalan dan melindungi dari infeksi.
                        </Teks3>

                        <br/>
                        
                        <Teks3>
                        <b>Buah-buahan Beri dan Jeruk</b>
                        <br/>
                        Buah-buahan beri seperti blueberry, raspberry, serta jeruk, kaya akan antioksidan dan vitamin C. Antioksidan membantu tubuh melawan radikal bebas, sementara vitamin C mendukung produksi sel-sel kekebalan tubuh yang penting.
                        </Teks3>

                        <br/>
                        
                        <Teks3>
                        <b>Bawang Putih dan Bawang Merah</b>
                        <br/>
                        Kedua jenis bawang ini mengandung senyawa sulfur yang memiliki sifat antimikroba dan antiinflamasi. Mereka dapat membantu melawan infeksi dan meredakan peradangan dalam tubuh.
                        </Teks3>

                        <br/>
                        
                        <Teks3>
                        <b>Protein Berkualitas Tinggi</b>
                        <br/>
                        Protein adalah bahan dasar untuk membangun dan memperbaiki jaringan tubuh, termasuk sel-sel kekebalan. Sumber protein berkualitas tinggi seperti daging tanpa lemak, ikan, telur, dan produk susu, memberikan zat besi dan zinc yang penting bagi sistem kekebalan tubuh.
                        </Teks3>

                        <br/>
                        
                        <Teks3>
                        <b>Menyajikan Makanan Peningkat Imun dalam Pola Makan Sehari-hari</b>
                        <br/>
                        Memasukkan berbagai makanan tersebut ke dalam pola makan sehari-hari dapat membantu menjaga sistem kekebalan tubuh yang optimal. Namun, penting juga untuk memperhatikan jumlah dan variasi makanan yang dikonsumsi serta gaya hidup sehat secara keseluruhan.
                        </Teks3>
                        <br/>
                        <Teks3>
                        Penting untuk diingat bahwa tidak ada makanan ajaib yang bisa memberikan perlindungan instan dari penyakit. Kunci kekebalan tubuh yang kuat terletak pada pola makan yang seimbang, aktifitas fisik yang teratur, tidur yang cukup, dan manajemen stres yang baik.
                        </Teks3>
                        <br/>
                        <Teks3>
                        Dengan memilih makanan yang tepat dan mengintegrasikannya ke dalam pola makan sehari-hari, kita dapat membangun pertahanan tubuh yang tangguh dan mempersiapkan diri untuk melawan berbagai infeksi dan penyakit.
                        </Teks3>

                    </div>
                </Content>
               
            <Footer style={{position:'absolute'}}/>
        </div>
    );
};

export default Artikel;