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

const Upload = () => {
    
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
    const handleClose = () => {
        setOpen(false);
        navigate("/upload")
    };
    
    const navigate = useNavigate();
    return (
        <div>
            <HideAppBar/>

            <Teks2 style={{marginLeft:'7.5em', marginRight: '2em', marginTop:'40px',color:'black', cursor:'pointer', paddingTop:'30px'}} onClick={() => navigate("/upload")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path d="M8.5 15L1.5 8L8.5 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                &nbsp;
                Halaman Peserta Vaksin
            </Teks2>
                
            <Content style={{width:'100%', marginTop:'20px', marginBottom:'20px', justifyContent:'center', alignItems:'center'}}>
                    <div style={{width:'100%', backgroundColor:'white', marginLeft:'5%', marginRight:'5%', marginTop:'20px', borderRadius:'30px',boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', textAlign:'center'}}>
                        <Teks style={{marginLeft:'2.3em', marginRight: '2em', fontFamily:'Poppins-Medium', paddingTop: '50px',fontSize:'32px'}}>
                            Form Upload Hasil Vaksin
                        </Teks>

                        <div style={{marginLeft:'70px', marginRight:'80px', marginTop:'40px',display:'flex', justifyContent:'center', alignItems:'center'}}>
                            {/* <MainForm className="col-md-12"  style={{display:'flex'}}> */}
                            <Form.Group className="col-md-12"  style={{display:'flex', flexDirection:'column'}} controlId="dob">
                                <div>
                                    <div className='Bagi'>
                                        <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Nomor Sertifikat :</Teks>
                                    </div>
                                    
                                    <Form.Control type="text" name="alamat" placeholder="Masukkan nomor ID Sertifikat" 
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    nik: e.target.value
                                                }))
                                            }}
                                            style={{fontSize: 15,fontFamily:'Poppins-Regular', backgroundColor:'#E6E6E6', borderRadius:'20px'}}
                                    />
                                </div>

                                <div style={{display:'flex', width:'100%',flexDirection:'row'}}>
                                    <div className="col-md-6">
                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Tanggal Vaksin :</Teks>
                                        </div>

                                        <Form.Control type="text" name="dob" placeholder="Tanggal Vaksin" style={{fontSize: 15,fontFamily:'Poppins-Regular', backgroundColor:'#E6E6E6', borderRadius:'20px', width:'80%'}}/>

                                        <div style={{display:'flex', flexDirection:'column'}}>
                                            <div className='Bagi'>
                                                <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Nama Depan :</Teks>
                                            </div>
                                            
                                            <Form.Control type="text" name="name" placeholder="Masukkan nama depan pasien" 
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    name: e.target.value
                                                }))
                                            }}
                                            style={{fontSize: 15,fontFamily:'Poppins-Regular', backgroundColor:'#E6E6E6', borderRadius:'20px', width:'80%'}}
                                            />
                                        </div>

                                        <div style={{display:'flex',flexDirection:'column'}}>
                                            <div className='Bagi'>
                                                <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>NIK :</Teks>
                                            </div>
                                            
                                            <Form.Control type="text" name="nik" placeholder="Masukkan nik pasien" 
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    nik: e.target.value
                                                }))
                                            }}
                                            style={{fontSize: 15,fontFamily:'Poppins-Regular', backgroundColor:'#E6E6E6', borderRadius:'20px', width:'80%'}}
                                            />

                                        </div>
                                        
                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Tanggal Lahir :</Teks>
                                        </div>

                                        <Form.Control type="text" name="dob" placeholder="Date of Birth" style={{fontSize: 15,fontFamily:'Poppins-Regular', backgroundColor:'#E6E6E6', borderRadius:'20px', width:'80%'}}/>

                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>No Telpon :</Teks>
                                        </div>

                                        <Form.Control type="text" name="notelp" placeholder="Masukkan no telp pasien" 
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    notelp: e.target.value
                                                }))
                                            }}
                                            style={{fontSize: 15,fontFamily:'Poppins-Regular', backgroundColor:'#E6E6E6', borderRadius:'20px', width:'80%'}}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Jam</Teks>
                                        </div>

                                        <Form.Control type="text" name="jam" placeholder="08.00" 
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    jam: e.target.value
                                                }))
                                            }}
                                            style={{fontSize: 15,fontFamily:'Poppins-Regular', backgroundColor:'#E6E6E6', borderRadius:'20px', width:'80%'}}
                                        />

                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Nama Belakang :</Teks>
                                        </div>

                                        <Form.Control type="text" name="namebehind" placeholder="Masukkan nama belakang pasien" 
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    namebehind: e.target.value
                                                }))
                                            }}
                                            style={{fontSize: 15,fontFamily:'Poppins-Regular', backgroundColor:'#E6E6E6', borderRadius:'20px', width:'80%'}}
                                        />

                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Jenis Kelamin :</Teks>
                                        </div>

                                        <Form.Control type="text" name="namebehind" placeholder="Masukkan jenis kelamin" 
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    namebehind: e.target.value
                                                }))
                                            }}
                                            style={{fontSize: 15,fontFamily:'Poppins-Regular', backgroundColor:'#E6E6E6', borderRadius:'20px', width:'80%'}}
                                        />

                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Umur :</Teks>
                                        </div>

                                        <Form.Control type="text" name="age" placeholder="Masukkan umur pasien" 
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    age: e.target.value
                                                }))
                                            }}
                                            style={{fontSize: 15,fontFamily:'Poppins-Regular', backgroundColor:'#E6E6E6', borderRadius:'20px', width:'80%'}}
                                        />
                                       
                                        <div className='Bagi'>
                                            <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Email :</Teks>
                                        </div>

                                        <Form.Control type="text" name="email" placeholder="Masukkan email pasien" 
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    email: e.target.value
                                                }))
                                            }}
                                            style={{fontSize: 15,fontFamily:'Poppins-Regular', backgroundColor:'#E6E6E6', borderRadius:'20px', width:'80%'}}
                                            />
                                       
                                    </div>
                                </div>
                                
                                <div>
                                    <div className='Bagi'>
                                        <Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Alamat Lengkap :</Teks>
                                    </div>
                                    
                                    <Form.Control type="textarea" name="alamat" placeholder="Masukkan alamat pasien" 
                                            onChange={(e) => {
                                                setForms(() => ({
                                                    ...forms,
                                                    nik: e.target.value
                                                }))
                                            }}
                                            style={{fontSize: 15,fontFamily:'Poppins-Regular', backgroundColor:'#E6E6E6', borderRadius:'20px', width:'80%'}}
                                    />
                                </div>

                                <Button onClick={handleOpen} style={{marginBottom:'20px', width:'30%', justifyContent:'center', alignItems:'center', alignSelf:'center'}}>Upload</Button>

                            </Form.Group>
                            {/* </MainForm> */}
                        </div>
                    </div>
                    
                    <Modal show={open} onHide={handleClose} style={{marginTop:'150px'}}>
                       
                        <Modal.Title style={{border:'none', display:'flex', marginTop:'20px',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                                <path d="M24.5 44C30.0228 44 35.0228 41.7614 38.6421 38.1421C42.2614 34.5228 44.5 29.5228 44.5 24C44.5 18.4772 42.2614 13.4772 38.6421 9.85786C35.0228 6.23858 30.0228 4 24.5 4C18.9772 4 13.9772 6.23858 10.3579 9.85786C6.73858 13.4772 4.5 18.4772 4.5 24C4.5 29.5228 6.73858 34.5228 10.3579 38.1421C13.9772 41.7614 18.9772 44 24.5 44Z" fill="white" stroke="black" stroke-width="4" stroke-linejoin="round"/>
                                <path d="M16.5 24L22.5 30L34.5 18" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <Teks style={{textAlign:'center', fontSize:'25px',marginTop:'10px'}}>Berhasil Upload!</Teks>

                            <Teks2 style={{textAlign:'center'}}>Upload hasil vaksin pasien lainnya!</Teks2>
                            
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:'20px'}}>
                                <Button onClick={handleClose}>
                                    Selesai
                                </Button>
                            </div>
                        </Modal.Title>
                       
                    </Modal>
                </Content>
               
            <Footer style={{position:'absolute'}}/>
        </div>
    );
};

export default Upload;