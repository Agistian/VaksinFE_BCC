import React ,{useState, useEffect} from "react";
import styled from 'styled-components';
import HideAppBar from '../components/Navbar';
import Footer from '../components/Footer';
import InfoHome from "../components/InfoHome";
import '../App.css';
// import Button from '@mui/material/Button';
import vaksin2 from '../asset/icon/vaksin2.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../config/Auth';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Aos from "aos";
import "aos/dist/aos.css";

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
	margin-top: 10px;
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

const PesertaVaksin = () => {
    
    useEffect(() => {
        Aos.init({duration:1000})
    }, [])

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
                    <div style={{display:'flex', flexDirection:'column',width:'100%', backgroundColor:'white', marginLeft:'5%', marginRight:'5%', marginTop:'20px', borderRadius:'30px',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', textAlign:'center'}}>
                        <Teks style={{marginLeft:'2.3em', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '50px',fontSize:'32px'}}>
                            Data Peserta Vaksin
                        </Teks>
                        <div className="col-md-12" style={{display:'flex', flexDirection:'column', marginBottom:'20px'}}>
                            <div data-aos="fade-up"  style={{display:'flex',marginLeft:'50px', marginRight:'50px', backgroundColor:'#F4FEFF', borderRadius:'8px', marginBottom:'10px'}}>
                                <div className="col-md-9" style={{display:'flex', flexDirection:'column', paddingLeft:'20px'}}>
                                    <Teks2 style={{color:'black'}}>
                                        ID Vaksin 12902093409234234
                                    </Teks2>
                                    <Teks2 style={{color:'black'}}>
                                        Nama : Rizki Setiawan
                                    </Teks2>
                                </div>
                                <div className="col-md-3" >
                                    <Button variant="contained" onClick={() => navigate("/uploadhasil")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', width:'150px', justifyContent:'right', alignItems:'right',marginBottom:'10px'}} 
                                    >Upload
                                    </Button>
                                </div>
                            </div>

                            <div data-aos="fade-up"  style={{display:'flex',marginLeft:'50px', marginRight:'50px', backgroundColor:'#F4FEFF', borderRadius:'8px', marginBottom:'10px'}}>
                                <div className="col-md-9" style={{display:'flex', flexDirection:'column', paddingLeft:'20px'}}>
                                    <Teks2 style={{color:'black'}}>
                                        ID Vaksin 12902093409234234
                                    </Teks2>
                                    <Teks2 style={{color:'black'}}>
                                        Nama : Rizki Setiawan
                                    </Teks2>
                                </div>
                                <div className="col-md-3" >
                                    <Button variant="contained" onClick={() => navigate("/uploadhasil")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', width:'150px', justifyContent:'right', alignItems:'right',marginBottom:'10px'}} 
                                    >Upload
                                    </Button>
                                </div>
                            </div>

                            <div data-aos="fade-up"  style={{display:'flex',marginLeft:'50px', marginRight:'50px', backgroundColor:'#F4FEFF', borderRadius:'8px', marginBottom:'10px'}}>
                                <div className="col-md-9" style={{display:'flex', flexDirection:'column', paddingLeft:'20px'}}>
                                    <Teks2 style={{color:'black'}}>
                                        ID Vaksin 12902093409234234
                                    </Teks2>
                                    <Teks2 style={{color:'black'}}>
                                        Nama : Rizki Setiawan
                                    </Teks2>
                                </div>
                                <div className="col-md-3" >
                                    <Button variant="contained" onClick={() => navigate("/uploadhasil")} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', width:'150px', justifyContent:'right', alignItems:'right',marginBottom:'10px'}} 
                                    >Upload
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
               
            <Footer style={{position:'absolute'}}/>
        </div>
    );
};

export default PesertaVaksin;