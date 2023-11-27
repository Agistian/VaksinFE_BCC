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

} from '../components/AccountForm';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import ikon from '../asset/icon/google.png';
import { tweetAPI } from '../config/api';
import styled from 'styled-components';
import { useAuth } from '../config/Auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Aos from "aos";
import "aos/dist/aos.css";


export const ErrorMessage = styled.p`
	color: red;
	font-size: 1.5rem;
	margin-bottom: 1rem;
	padding: 0 2rem;
	text-align: center;
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

const Signup = () => {
	
	useEffect(() => {
        Aos.init({duration: 2000});
    },[]);

	const {  setAndGetTokens } = useAuth();
	const [forms, setForms] = useState({
		username:'',
		email: '',
		password: '',
		fullName: '',
		mobile:'',
		gender:''
	});
	const [isError, setIsError] = useState({ status: false, message: '' });

	const navigate = useNavigate();
	const handleSignup = async (e) => {
		e.preventDefault()
		//console.log(forms)
		// register usernya
		console.log(forms.fullName);
		console.log(forms.username);
		console.log(forms.email);
		console.log(forms.password);
		console.log(forms.mobile);
		console.log(forms.gender);

		try {
            const loginResponse = await axios.post('http://localhost:3000/v1/users/register', {
                ...forms,
            });
            console.log("berhasil");
            console.log(loginResponse);
            // const token = loginResponse.data.id;
            // setAndGetTokens(token);
            // alert("Sign Up Berhasil");
            // navigate('/', { replace: true });
            // console.log(loginResponse, token, 'tokenton');
        } catch (error) {
            if (error.response) {
            // Respon dari server dengan kode status selain 2xx
            console.error('Kesalahan pada respon server:', error.response.data);
            } else if (error.request) {
            // Tidak ada respon dari server
            console.error('Tidak ada respon dari server:', error.request);
            } else {
            // Kesalahan lainnya
            console.error('Kesalahan:', error.message);
            }
        }
	};

	return (
		<Container>
            <WrapperImg style={{backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
				<Title className='Poppins'>B-HEALTH</Title>
			</WrapperImg>
			<Wrapper>
				<Title data-aos="fade-up" className='Poppins'>Daftar Akun Baru</Title>
                
				<MainForm onSubmit={handleSignup}>
					<div data-aos="fade-up" className='Bagi'>
						<Teks2 style={{fontWeight: 'bold', marginBottom: '10px'}}>Username</Teks2><Teks2 style={{color: 'red', marginLeft: '3px'}}> *</Teks2>
					</div>
                    <Input
						data-aos="fade-up"
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

					<div data-aos="fade-up" className='Bagi'>
						<Teks2 style={{fontWeight: 'bold', marginBottom: '10px'}}>Email</Teks2><Teks2 style={{color: 'red', marginLeft: '3px'}}> *</Teks2>
					</div>
                    <Input
					data-aos="fade-up"
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

					<div data-aos="fade-up" className='Bagi'>
						<Teks2 style={{fontWeight: 'bold', marginBottom: '10px'}}>Password</Teks2><Teks2 style={{color: 'red', marginLeft: '3px'}}> *</Teks2>
					</div>
					<Input 
					data-aos="fade-up"
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

					<div data-aos="fade-up" className='Bagi'>
						<Teks2 style={{fontWeight: 'bold', marginBottom: '10px'}}>Full Name</Teks2><Teks2 style={{color: 'red', marginLeft: '3px'}}> *</Teks2>
					</div>
                    <Input
					data-aos="fade-up"
						type="text"
						name="fullName"
						label="Full Name"
						onChange={(e) => {
							setForms(() => ({
								...forms,
								fullName: e.target.value
							}))
						}}
					></Input>

					<div data-aos="fade-up" className='Bagi'>
						<Teks2 style={{fontWeight: 'bold', marginBottom: '10px'}}>No Hp</Teks2><Teks2 style={{color: 'red', marginLeft: '3px'}}> *</Teks2>
					</div>
                    <Input
					data-aos="fade-up"
						type="text"
						name="name"
						label="No Hp"
						onChange={(e) => {
							setForms(() => ({
								...forms,
								mobile: e.target.value
							}))
						}}
					></Input>

					<div data-aos="fade-up" className='Bagi'>
						<Teks style={{fontSize:'18px', fontFamily:'Poppins-Regular', marginBottom: '10px'}}>Jenis Kelamin :</Teks>
					</div>

					<div data-aos="fade-up">
						<Form>
							{['radio'].map((type) => (
								<div key={`inline-${type}`} className="mb-3" style={{display:'flex', justifyContent:'up'}}>
								<Form.Check
									inline
									label="Male"
									name="gender"
									value="male"
									type={type}
									id={`inline-${type}-1`}
									onClick={(e) => {
										setForms(() => ({
											...forms,
											gender: e.target.value
										}))
									}}
									style={{fontFamily:'Poppins-Regular', fontSize:'17px',borderRadius:'10px',paddingLeft:'50px', paddingRight:'10px'}}
								/>
								<Form.Check
									inline
									label="Female"
									value="female"
									name="gender"
									type={type}
									id={`inline-${type}-2`}
									onClick={(e) => {
										setForms(() => ({
											...forms,
											gender: e.target.value
										}))
									}}
									style={{fontFamily:'Poppins-Regular', fontSize:'17px', borderRadius:'10px',paddingLeft:'50px', paddingRight:'10px'}}
								/>
								</div>
							))}
						</Form>
					</div>


					{isError.status && (
						<ErrorMessage>{isError.message}</ErrorMessage>
					)}

					<Button data-aos="fade-up">Daftar</Button>
				</MainForm>

                <Teks2 style={{marginTop:'10px',color: 'black', fontWeight: 'bold',textAlign: 'center'}}>
                	Sudah punya akun ? &nbsp;
					<Link to="/login" style={{color: '#41AAAA', fontWeight: 'bold',textAlign: 'right'}}>
						Login
					</Link>
                </Teks2>
			</Wrapper>
		</Container>
	);
};

export default Signup;
