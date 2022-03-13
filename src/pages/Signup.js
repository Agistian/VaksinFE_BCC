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

} from '../components/AccountForm';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import ikon from '../asset/icon/google.png';
import { tweetAPI } from '../config/api';
import styled from 'styled-components';
import { useAuth } from '../config/Auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GLogin from '../components/Login';


export const ErrorMessage = styled.p`
	color: red;
	font-size: 1.5rem;
	margin-bottom: 1rem;
	padding: 0 2rem;
	text-align: center;
`;

const Signup = () => {
	
	const {  setAndGetTokens } = useAuth();
	const [forms, setForms] = useState({
		email: '',
		password: '',
		name: '',
	});
	const [isError, setIsError] = useState({ status: false, message: '' });

	const navigate = useNavigate();
	const handleSignup = async (e) => {
		e.preventDefault()
		console.log(forms)
		// register usernya
		try {
			const registerResponse = await axios.post('http://ad72-139-195-213-30.ngrok.io/user/register',{
				...forms,
			});
			// jika sukses
			// console.log(registerResponse.data);
			if (registerResponse.data.success) {
				delete forms.name;
				console.log('sukses');
				// post data buat login
				// const response = await fetch('http://localhost:8080/', {mode:'cors'});
				try {
					const loginResponse = await axios.post('http://ad72-139-195-213-30.ngrok.io/user/login', {
						...forms,
					});
					//jika sukses
					if (loginResponse.data.success) {
						const token = loginResponse.data.data.token;
						setAndGetTokens(token);
						alert("Sign Up Berhasil");
						navigate('/', { replace: true });
						console.log(loginResponse, token, 'tokenton');
					}
				} catch (error) {
					setIsError((isError) => ({
						status: true,
						message: 'Error while try to logged in',
					}));
					console.log(error, 'in login');
				}
			}
		} catch (error) {
			setIsError((isError) => ({
				status: true,
				message: 'Error while try to sign up',
			}));
			console.log(error);
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
				<Title className='Poppins'>Sign Up</Title>
                <SubTitle className='Poppins'>Create account here</SubTitle>
				<MainForm onSubmit={handleSignup}>
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

					<div className='Bagi'>
						<Teks style={{fontWeight: 'bold', marginBottom: '10px'}}>Full Name</Teks><Teks style={{color: 'red', marginLeft: '3px'}}> *</Teks>
					</div>
                    <Input
						type="text"
						name="name"
						label="Full Name"
						onChange={(e) => {
							setForms(() => ({
								...forms,
								name: e.target.value
							}))
						}}
					></Input>

					{isError.status && (
						<ErrorMessage>{isError.message}</ErrorMessage>
					)}

					<MainButton>Sign Up</MainButton>

					<div className='container' style={{margin:'1rem'}}>
						<div className='line'></div>
						<Teks style={{color: '#404040'}}>Or</Teks>
						<div className='line'></div>
					</div>

                    

				</MainForm>
				<GButton><img src={ikon} alt="Logo"/>Sign up with Google</GButton>
				{/* <GLogin/> */}
                <Teks className="Poppins" style={{marginTop:'10px',color: '#006c80', fontWeight: 'bold',textAlign: 'center'}}>
                Already have account? 

					<Link to="/login" className="Poppins" style={{color: '#6F70DA', fontWeight: 'bold',textAlign: 'right'}}>
					Sign In
					</Link>
					
                </Teks>
				{/* <SecondaryButton to="/signup">Sign Up</SecondaryButton> */}
			</Wrapper>
		</Container>
	);
};

export default Signup;
