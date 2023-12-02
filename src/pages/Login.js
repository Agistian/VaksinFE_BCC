import {
	Container,
	Wrapper,
    WrapperImg,
	WrapperImg1,
	MainForm,
	Title,
    SubTitle,
	Input,
	MainButton,
    GButton,
	SecondaryButton,
} from '../components/AccountForm';
import {useState, useEffect} from 'react';
import { useAuth } from '../config/Auth';
import { Link } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

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

const ErrorMessage = styled.p`
	color: red;
	font-size: 1.5rem;
	margin-bottom: 1rem;
	padding: 0 2rem;
	text-align: center;
`;

const Content = styled.div`
	width:100%;
	height:750px;
	background-image: url("./backgroundLogin.png");
	background-size:auto 100%;
    justify-content: center;
    background-size: cover;
    background-repeat:no-repeat;
	height: 100%;
    display: flex;
    justify-content: center;
`;

const Shape = styled.div`
	margin: 0 auto;
    border-radius: 15px;
    background-color:white;
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

const Login = () => {
	useEffect(() => {
        Aos.init({duration: 1000});
    },[]);

	const { setAndGetTokens, setIdUser} = useAuth();
	const isAnyToken = JSON.parse(localStorage.getItem('token'));

	const [forms, setForms] = useState({username:"", password:""});
	const [isError, setIsError] = useState({ status: false, message: '' });
	const navigate = useNavigate();
	const [showAl, setShowAl] = useState(false);
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const [data, setData] = useState([]); 

	
	const handleLogin = async (e) => {
		e.preventDefault()
		try {
		const loginResponse = await axios.post('https://ipsi-vaccin-api-ec7cf074abb5.herokuapp.com/v1/users/login',{
			...forms,
		});
		const token = (loginResponse.data.token);
		setAndGetTokens(token);
		setIdUser(loginResponse.data.id);
		alert("Login Berhasil");
		navigate('/', { replace: true });
		// handleShow()
		} catch (error) {
			if (error.response) {
			// Respon dari server dengan kode status selain 2xx
			console.error('Kesalahan pada respon server:', error.response.data);
			alert(error.response.data);
			} else if (error.request) {
			// Tidak ada respon dari server
			console.error('Tidak ada respon dari server:', error.request);
			alert(error.request);
			} else {
			// Kesalahan lainnya
			console.error('Kesalahan:', error.message);
			alert(error.message.value);
			}
		}
	}

	const handleClose = () => {
		navigate("/", {replace:true})
	}

	return (
		<div>
			<Content style={{height:'737px',justifyContent:'center', alignItems:'center'}}>
				<div style={{width:'100%', textAlign:'center'}}>
					<div className='col-md-12' style={{justifyContent:'center', alignItems:'center'}}>
						<Shape data-aos="flip-left" className="col-md-5" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
							<div className="col-md-12" style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
								<div className="col-md-12">
									<Teks2 style={{textAlign:'center', fontSize:'25px', fontWeight:'bold', marginTop:'20px'}}>
										Selamat Datang
									</Teks2>

									<Teks2 style={{textAlign:'center', fontSize:'15px', marginBottom:'30px'}}>
										Silahkan Login untuk mengakses akun Anda
									</Teks2>
									
								</div>
								<div className="col-md-10" style={{justifyContent:'center', alignItems:'center', paddingBottom:'20px'}}>
							
									<MainForm style={{marginBottom:'0px'}} onSubmit={handleLogin}>
										<div className='Bagi'>
											<Teks2 style={{fontWeight: 'bold', marginBottom: '10px'}}>Username</Teks2>
										</div>

										<Input
											type="text"
											name="username"
											label="Username"
											onChange={(e) => {
												setForms(() => ({
													...forms,
													username: e.target.value
												}))
											}}
										></Input>

										<div className='Bagi'>
											<Teks2 style={{fontWeight: 'bold', marginBottom: '10px'}}>Kata Sandi</Teks2>
										</div>

										<Input 
											type="password"
											name="password"
											label="Password"
											onChange={(e) => {
												setForms(() => ({
													...forms,
													password: e.target.value
												}))
											}}
										/>
										{isError.status && (
											<ErrorMessage>{isError.message}</ErrorMessage>
										)}
										
										<Button type="submit">Login</Button>

									</MainForm>
								
									<Teks2 style={{color: 'black', fontWeight: 'bold',textAlign: 'center', marginTop:'10px'}}>
										Belum punya akun? &nbsp;

										<Link to="/signup" style={{color: '#41AAAA', fontWeight: 'bold',textAlign: 'right'}}>
											Daftar
										</Link>
										
									</Teks2>
								
								</div>
							</div>
						</Shape>
					</div>
				</div>
			</Content>
			
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
				<Modal.Title style={{display:'flex'}}>
					<div>
						<img src="../icon/sukses.png"/>
					</div>
					&nbsp;
					<Teks2 style={{paddingTop:'5px'}}>
					Berhasil Login
					</Teks2> 
				</Modal.Title>
				</Modal.Header>
			</Modal>
		</div>
	);
};

export default Login;