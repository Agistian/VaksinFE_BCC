import React ,{useState, useEffect} from "react";
import styled from 'styled-components';
import HideAppBar from '../components/Navbar';
import Footer from '../components/Footer';
import InfoHome from "../components/InfoHome";
import '../App.css';
// import Button from '@mui/material/Button';
import covid2 from '../asset/icon/covid2.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../config/Auth';
import Aos from "aos";
import "aos/dist/aos.css";

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
    font-size: 40px;
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
    font-size: 40px;
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

const TiketVaksin = () => {
    
    useEffect(() => {
        Aos.init({duration: 1000})
    },[]);
    
    const navigate = useNavigate()
    const { authToken } = useAuth();

    // axios.get(`http://localhost:5000/dashboard/`).then((res) => {
    //     console.log(res);
    // // setPost(response.data);
    // }).catch(err => console.log(err));

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        
                    <div data-aos="fade-up" style={{marginLeft:'10em'}}>
                        <img src={covid2} alt="Logo" />
                    </div>
                </div>

                <div className="col-md-6" style={{paddingTop:'150px',height: '80%',justifyContent:'left', alignItems:'left', textAlign:'left'}}>
                    <Shape data-aos="fade-up" className="col-md-8">
                        <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <div style={{display:'flex',justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                                <Teks>Cek&nbsp;</Teks>
                                <Teks3>Tiket Vaksin</Teks3>
                            </div>
                            <Teks2>Pantau status reservasi Anda disini</Teks2>
                        </div>
                        <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <Button variant="contained" onClick={() => navigate("/showtiket")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', width:'150px'
                            }} >Status Tiket Saya</Button>
                        </div>
                    </Shape>

                    <Shape data-aos="fade-up" className="col-md-8">
                        <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                                <Teks>Cek&nbsp;</Teks>
                                <Teks3>Hasil Vaksin</Teks3>
                            </div>
                            
                            <Teks2>Sudah vaksin? Cek hasil vaksin Anda disini</Teks2>
                            
                        </div>
                        <div style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <Button variant="contained" onClick={() => navigate("/sertif")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', width:'150px'
                            }} >Hasil Vaksin Saya</Button>
                        </div>
                    </Shape>
                </div>
            </Content>

            <Footer style={{position:'absolute'}}/>
        </div>
    );
};

export default TiketVaksin;