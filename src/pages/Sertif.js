import React ,{useState, useRef} from "react";
import styled from 'styled-components';
import HideAppBar from '../components/Navbar';
import Footer from '../components/Footer';
import InfoHome from "../components/InfoHome";
import '../App.css';
// import Button from '@mui/material/Button';
import barcode from '../asset/icon/barcode.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../config/Auth';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { toPng } from 'html-to-image';

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
    color: black;
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
    border-radius: 25px;
    background: linear-gradient(180deg, #B3E7EC 0%, #45BDBF 100%);
`;

const Shape2 = styled.div`
    border-radius: 25px;
    background: var(--text, linear-gradient(90deg, #45BDBF 0.21%, #005C7B 99.79%));

`;

const Shape3 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    border-radius: 8px;
    border: 1px solid var(--stroke-light, #DEE2E6);
    background: var(--gray-white, #FFF);
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.08), 0px 0px 2px 0px rgba(0, 0, 0, 0.12);
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

const Sertif = () => {
    
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
    const elementRef = useRef(null);
    const htmlToImageConvert = () => {
        toPng(elementRef.current, { cacheBust: false })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "my-image-name.png";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
    };
    
    const navigate = useNavigate();
    return (
        <div>
            <HideAppBar/>

            <Teks2 style={{marginLeft:'7.5em', marginRight: '2em', marginTop:'40px',color:'black', cursor:'pointer', paddingTop:'30px'}} onClick={() => navigate("/tiketvaksin")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path d="M8.5 15L1.5 8L8.5 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                &nbsp;
                Halaman Tiket Vaksin
            </Teks2>
                
            <Content ref={elementRef} style={{width:'100%', marginTop:'20px', marginBottom:'20px', justifyContent:'center', alignItems:'center'}}>
                    <div  style={{width:'100%', backgroundColor:'white', marginLeft:'5%', marginRight:'5%', marginTop:'20px', paddingBottom:'20px',borderRadius:'30px',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', textAlign:'center'}}>
                        
                        <Teks3 style={{marginLeft:'2.3em', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '50px',fontSize:'32px'}}>
                            Sertifikat Vaksinasi COVID-19
                        </Teks3>
                        
                        <Teks2 style={{textAlign:'center'}}>
                            ID Sertifikat: CVD/12340/98765/00
                        </Teks2>

                        <Teks2 style={{textAlign:'center', fontSize:'25px', fontWeight:'800px', marginTop:'20px'}}>
                            Diberikan kepada:
                        </Teks2>

                        <div className="col-md-12" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <Shape className="col-md-5" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <div className="col-md-8" style={{display:'flex',flexDirection:'column'}}>
                                    <div className="col-md-12">
                                        <Teks2 style={{textAlign:'center', fontSize:'25px', fontWeight:'800px', marginTop:'20px'}}>
                                            MUHAMMAD DHZUHRI AGISTIAN
                                        </Teks2>
                                        <hr/>
                                    </div>
                                    <div className="col-md-12" style={{display:'flex'}}>
                                        <div className="col-md-6">
                                            <Teks2 style={{marginLeft:'20px' ,fontSize:'15px', fontWeight:'800px'}}>
                                                NIK
                                            </Teks2>
                                            <Teks2 style={{marginLeft:'20px', fontSize:'15px', fontWeight:'800px'}}>
                                                000000000000000
                                            </Teks2>
                                        </div>
                                        <div className="col-md-6">
                                            <Teks2 style={{textAlign:'center',fontSize:'15px', fontWeight:'800px'}}>
                                                TANGGAL LAHIR
                                            </Teks2>
                                            <Teks2 style={{textAlign:'center',fontSize:'15px', fontWeight:'800px'}}>
                                                30/10/2000
                                            </Teks2>
                                        </div>
                                    </div>
                                </div>
                                <Shape2 className="col-md-4" >
                                    <img src={barcode} alt="Logo" height="170px" style={{padding:'10px 10px 10px 10px'}}/>
                                </Shape2>
                            </Shape>
                        </div>

                        <Teks2 style={{textAlign:'center', marginTop:'15px'}}>
                            Telah melaksanakan vaksinasi COVID-19 pada tanggal:
                        </Teks2>

                        <Teks2 style={{textAlign:'center', fontSize:'25px', fontWeight:'800px'}}>
                            11 November
                        </Teks2>
                        
                        {/* ini kalau gaada datanya */}
                        
                        {/* <div className="col-md-12" style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'10% 10%'}}>
                            <Shape3 className="col-md-5" style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                                <div style={{display:'flex'}}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <path d="M14.0002 25.6666C20.4435 25.6666 25.6668 20.4432 25.6668 13.9999C25.6668 7.5566 20.4435 2.33325 14.0002 2.33325C7.55684 2.33325 2.3335 7.5566 2.3335 13.9999C2.3335 20.4432 7.55684 25.6666 14.0002 25.6666Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M14 7V14L18.6667 16.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column', marginLeft:'10px'}}>
                                        <div>
                                            <Teks2 style={{color:'black', fontWeight:'700'}}>Data anda sedang diproses</Teks2>
                                        </div>
                                        <div>
                                            <Teks2>Silahkan kembali lagi nanti</Teks2>
                                        </div>
                                    </div>
                                </div>
                            </Shape3>
                        </div> */}
                    </div>

                    <Modal show={open} onHide={handleClose} style={{marginTop:'150px'}}>
                       
                        <Modal.Title style={{border:'none', display:'flex', marginTop:'20px',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                                <path d="M24.5 44C30.0228 44 35.0228 41.7614 38.6421 38.1421C42.2614 34.5228 44.5 29.5228 44.5 24C44.5 18.4772 42.2614 13.4772 38.6421 9.85786C35.0228 6.23858 30.0228 4 24.5 4C18.9772 4 13.9772 6.23858 10.3579 9.85786C6.73858 13.4772 4.5 18.4772 4.5 24C4.5 29.5228 6.73858 34.5228 10.3579 38.1421C13.9772 41.7614 18.9772 44 24.5 44Z" fill="white" stroke="black" stroke-width="4" stroke-linejoin="round"/>
                                <path d="M16.5 24L22.5 30L34.5 18" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <Teks style={{textAlign:'center', fontSize:'25px',marginTop:'10px'}}>Data Form Telah disimpan!</Teks>

                            <Teks2 style={{textAlign:'center'}}>Selamat data reservasi tes Covid Anda telah tersimpan!</Teks2>
                            
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:'20px'}}>
                                <Button onClick={handleClose}>
                                    Selesai
                                </Button>
                            </div>
                        </Modal.Title>
                       
                    </Modal>
            </Content>
            {/* <button onClick={htmlToImageConvert}>Download Image</button> */}
            <Footer style={{position:'absolute'}}/>
        </div>
    );
};

export default Sertif;