import styled from 'styled-components';
// import { TextField } from '@material-ui/core';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';


export const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	align-items: right;
	justify-content: right;
`;
export const Wrapper = styled.div`
	background-color: white;
	width: 45%;
	padding: 5rem;
	display: flex;
	flex-direction: column;
	
`;

export const WrapperImg = styled.div`
	background-image: url("./1.png");
	width: 55%;
	padding: 5rem;
	display: flex;
	flex-direction: column;
	box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
`;

export const WrapperImg1 = styled.div`
	background-image: url("./2.png");
	width: 100%;
	height: 100%;
	display: flex;
	background-position: left center;
	backgroundRepeat: 'no-repeat';
`;

export const MainForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 2rem 0;
`;

export const Title = styled.p`
	font-size: 4rem;
	font-weight: bold;
`;

export const SubTitle = styled.p`
	font-size: 1.5rem;
	color: #404040;
    margin-bottom: 4rem;
`;

export const Teks = styled.p`
	font-size: 15px;
`;
export const Input = styled(TextField).attrs(() => ({
	variant: 'outlined',
	InputProps: { style: { fontSize: '1.8rem', fontFamily: 'inherit', borderRadius: '2rem' } },
	InputLabelProps: { style: { fontSize: '1.5rem', fontFamily: 'inherit', borderRadius: '2rem' } },
}))`
	&:not(:last-child) {
		margin-bottom: 1rem;
	}
`;

export const MainButton = styled.button`
	background-color: #6F70DA;
	font-weight: bold;
	color: #fff;
	outline: none;
	border: none;
	padding: 1.5rem 0;
	font-size: 2rem;
	font-family: inherit;
	border-radius: 2rem;
	border: 1px solid #6F70DA;
	transition: 0.2s all;
	margin-top: 4rem;
	&:hover {
		cursor: pointer;
		background-color: #FFFFFF;
		
		color: #6F70DA;
	}
`;

export const GButton = styled.button`
	background-color: #FFFFFF;
	font-weight: bold;
	color:#6F70DA;
	outline: none;
	border: 1px solid #6F70DA;
	padding: 1rem 0;
	font-size: 2rem;
	font-family: inherit;
	border-radius: 2rem;
	transition: 0.2s all;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	&:hover {
		cursor: pointer;
		background-color: #6F70DA;
		color: white;
	}
`;

export const SecondaryButton = styled(Link)`
	background-color: #022b3a;
	font-weight: bold;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	line-height: 1.6;
	color: #fff;
	outline: none;
	border: none;
	padding: 1.2rem 0;
	border-radius: 2rem;
	transition: 0.2s all;
	&:hover {
		cursor: pointer;
		background-color: #05668a;
	}
`;
