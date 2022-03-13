import {
	Container,
	Wrapper,
    WrapperImg,
	WrapperImg1,
	MainForm,
	Title,
    SubTitle,
	Input,
    Teks,
	MainButton,
    GButton,
	SecondaryButton,
} from '../components/AccountForm';
import {useState} from 'react';
import { useAuth } from '../config/Auth';
import { Link } from 'react-router-dom';
import '../App.css';
import ikon from '../asset/icon/google.png';
import { useNavigate } from 'react-router-dom';
import { tweetAPI } from '../config/api';
import styled from 'styled-components';
import axios from 'axios';
import Cookies from 'js-cookie';
import Alert from 'react-bootstrap/Alert';
import Button from '@mui/material/Button';


const ErrorMessage = styled.p`
	color: red;
	font-size: 1.5rem;
	margin-bottom: 1rem;
	padding: 0 2rem;
	text-align: center;
`;

const Login = () => {
	const { setAndGetTokens } = useAuth();
	const [forms, setForms] = useState({email:"", password:""});
	const [isError, setIsError] = useState({ status: false, message: '' });
	const navigate = useNavigate();

	const google = async (e) => {
		window.location.href = "http://localhost:5000/user/google";
	}

	const [showAl, setShowAl] = useState(false);

	const handleLogin = async (e) => {
		e.preventDefault()
		console.log(forms);
		const csrftoken = Cookies.get('csrftoken')
		try {
			// http://intern-bcc-3.ap-southeast-1.elasticbeanstalk.com/
			const loginResponse = await axios.post('http://localhost:5000/user/login',{ 
				...forms,
			});
			//jika sukses
			if (loginResponse.data.success) {
				
				const token = loginResponse.data.data.token;
				// console.log(token);
				// const currUser = await axios.get('http://localhost:8080/user', {
				// 	headers: { Authorization: `Bearer ${token}` },
				// });
				// const id = currUser.data.data.id;
				
				setAndGetTokens(token);
				alert("Login Berhasil");
				navigate('/', { replace: true });
				
				// console.log(token, 'tokenton');
				
				// console.log(udah);
			}
		} catch (error) {
			setIsError((isError) => ({
				status: true,
				message: 'Error while try to logged in',
			}));
			console.log(error, 'in login');
		}
	};
	return (
		<Container>
            <WrapperImg style={{backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
				<WrapperImg1 style={{backgroundRepeat: 'no-repeat'}}>
					<Title className='Poppins'>B-HEALTH</Title>
				</WrapperImg1>
			</WrapperImg>
			<Wrapper>
				<Title className='Poppins'>Sign in</Title>
                <SubTitle className='Poppins'>Welcome back! Please enter your details</SubTitle>
				<MainForm style={{marginBottom:'0px'}} onSubmit={handleLogin}>
					<div className='Bagi'>
						<Teks style={{fontWeight: 'bold', marginBottom: '10px'}}>Email</Teks><Teks style={{color: 'red', marginLeft: '3px'}}> *</Teks>
					</div>
                    <Input
						type="email"
						name="email"
						label="Email"
						onChange={(e) => {
							setForms(() => ({
								...forms,
								email: e.target.value
							}))
						}}
					></Input>
					<div className='Bagi'>
						<Teks style={{fontWeight: 'bold', marginBottom: '10px'}}>Password</Teks><Teks style={{color: 'red', marginLeft: '3px'}}> *</Teks>
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
                	
					<MainButton type="submit">Sign In</MainButton>

					<div className='container' style={{margin:'1rem'}}>
						<div className='line'></div>
						<Teks style={{color: '#404040'}}>Or</Teks>
						<div className='line'></div>
					</div>
				</MainForm>
				<GButton onClick={google} style={{marginTop:'0px'}}><img src={ikon} alt="Logo"/>Sign in with Google</GButton>

                <Teks className="Poppins" style={{color: '#006c80', fontWeight: 'bold',textAlign: 'center'}}>
                Don't have account? 

					<Link to="/signup" className="Poppins" style={{color: '#6F70DA', fontWeight: 'bold',textAlign: 'right'}}>
					Sign Up
					</Link>
					
                </Teks>
				{/* <SecondaryButton to="/signup">Sign Up</SecondaryButton> */}
			</Wrapper>
		</Container>
	);
};

export default Login;
