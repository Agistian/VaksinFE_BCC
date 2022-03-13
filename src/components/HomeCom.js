import styled from 'styled-components';
import '../App.css';
import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import swab from '../asset/icon/swab.svg';
import poli from '../asset/icon/poli.svg';
import foto from '../asset/icon/foto.svg';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { useAuth } from '../config/Auth';
import axios from 'axios';

const Teks = styled.div`
    font-family: Poppins-SemiBold;
    font-size: 2em;
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

function LinearProgressWithLabel(props) {
	return (
	  <Box sx={{ display: 'flex', alignItems: 'center' }}>
		<Box sx={{ width: '100%', mr: 1}}>
		  <LinearProgress variant="determinate" {...props} />
		</Box>
		<Box sx={{ minWidth: 35}}>
		  <Typography variant="body2" color="text.secondary">{`${Math.round(
			props.value,
		  )}%`}</Typography>
		</Box>
	  </Box>
	);
}

LinearProgressWithLabel.propTypes = {
	value: PropTypes.number.isRequired,
};


export const Dasboard = () => {

	const [form, setForm] = useState('');
	const data = axios.get(`http://localhost:5000/dashboard/`).then((res) => {
        // console.log(res.data);
		setForm(res.data.jumlah_pengguna);
    }).catch(err => console.log(err));
	console.log(form);
	const [progress, setProgress] = React.useState(10);
	
	React.useEffect(() => {
		const timer = setInterval(() => {
		  setProgress((prevProgress) => (80));
		}, 800);
		return () => {
		  clearInterval(timer);
		};
	}, []);

	const [progress2, setProgress2] = React.useState(10);
	
	React.useEffect(() => {
		const timer = setInterval(() => {
		  setProgress2((prevProgress) => (50));
		}, 800);
		return () => {
		  clearInterval(timer);
		};
	}, []);

	const [progress3, setProgress3] = React.useState(10);
	
	React.useEffect(() => {
		const timer = setInterval(() => {
		  setProgress3((prevProgress) => (70));
		}, 800);
		return () => {
		  clearInterval(timer);
		};
	}, []);

	const { authToken } = useAuth();

	// axios({
    //     method: "get",
    //     url: "http://localhost:5000/dashboard/",
    //     headers:{
    //         'Access-Control-Allow-Headers': '*',
    //         'Access-Control-Allow-Origin': '*',
	// 	    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'}
    //  })
    //     .then(function(response){
    //         console.log(response.data);
    //     });
	


	return (
		
		<div style={{width:'100%', paddingTop: '60px', height: '100%'}}>
			
				<Teks style={{paddingLeft:'90px', fontSize:'2.5em'}}>Dasboard Vaksinasi Civitas UB</Teks>
				<br/>
				<div style={{width:'90%', paddingTop: '30px', height: '50%', display:'flex', justifyContent:'center'}}>
					
					<div style={{width:'32%', marginLeft:'80px'}}>
						<div style={{borderRadius:'10px', backgroundColor:'white', height:'100px', paddingLeft:'10px', paddingTop:'10px'}}>
							<Teks style={{fontSize: '1.5em', fontFamily:'Poppins-Medium'}}>Total Vaksinasi Dosis 1</Teks>
							<br/>
							
							<p style={{fontFamily:'Poppins-Regular'}}>user</p>
							
							<Box sx={{ width: '100%'}}>
								<LinearProgressWithLabel style={{height:'15px', borderRadius:'5px'}} value={progress} />
							</Box>
						</div>
					</div>

					<div style={{width:'32%', marginLeft:'20px'}}>
						<div style={{borderRadius:'10px', backgroundColor:'white', height:'100px', paddingLeft:'10px', paddingTop:'10px'}}>
							<Teks style={{fontSize: '1.5em', fontFamily:'Poppins-Medium'}}>Total Vaksinasi Dosis 2</Teks>
							<br/>
							<p style={{fontFamily:'Poppins-Regular'}}>60/72 user</p>
							
							<Box sx={{ width: '100%'}}>
								<LinearProgressWithLabel style={{height:'15px', borderRadius:'5px'}} color='warning' value={progress2} />
							</Box>
						</div>
					</div>

					<div style={{width:'32%', marginLeft:'20px'}}>
						<div style={{borderRadius:'10px', backgroundColor:'white', height:'100px', paddingLeft:'10px', paddingTop:'10px'}}>
							<Teks style={{fontSize: '1.5em', fontFamily:'Poppins-Medium'}}>Total Vaksinasi Dosis 3</Teks>
							<br/>
							<p style={{fontFamily:'Poppins-Regular'}}>30/72 user</p>
							
							<Box sx={{ width: '100%'}}>
								<LinearProgressWithLabel style={{height:'15px', borderRadius:'5px'}} color='error' value={progress3} />
							</Box>
						</div>
					</div>
				</div>
			
        </div>
	);
};

export const Pendaftaran = () => {
	const navigate = useNavigate()
	const isAnyToken = JSON.parse(localStorage.getItem('token'));
	const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
	return(
		<div>
			<Teks style={{paddingTop:'50px', paddingLeft:'30px', textAlign:'center', fontSize:'2.5em'}}>Ingin Melakukan Pendaftaran ?</Teks>
			<br/>
			
			{isAnyToken == null ? (
				<div style={{display:'flex', justifyContent:'center'}}>
					<Button onClick={handleOpen} variant="contained" style={{backgroundColor: '#6F70DA', height:'70px', borderRadius:'15px', width:'170px'}}>
						<img src={swab} width="26%"/>
						<Teks style={{fontFamily:'Poppins-SemiBold', textTransform: 'capitalize', fontSize:'13px'}}>Daftar Swab Antigen</Teks>
					</Button>
					<Button variant="contained" onClick={handleOpen} style={{backgroundColor:'#FFFF', marginLeft: '50px', width:'170px', height:'70px', borderRadius:'15px', border:'2px solid #6F70DA', color:'#6F70DA'}}>
						<img src={poli} width="26%"/>
						<Teks style={{fontFamily:'Poppins-SemiBold', textTransform: 'capitalize', fontSize:'13px'}}>Daftar Poliklinik</Teks>
					</Button>
				</div>
			) : (
				<div style={{display:'flex', justifyContent:'center'}}>
					<Button onClick={() => navigate("/dafswab")} variant="contained" style={{backgroundColor: '#6F70DA', height:'70px', borderRadius:'15px', width:'170px'}}>
						<img src={swab} width="26%"/>
						<Teks style={{fontFamily:'Poppins-SemiBold', textTransform: 'capitalize', fontSize:'13px'}}>Daftar Swab Antigen</Teks>
					</Button>
					<Button variant="contained" onClick={() => navigate("/dafpol")} style={{backgroundColor:'#FFFF', marginLeft: '50px', width:'170px', height:'70px', borderRadius:'15px', border:'2px solid #6F70DA', color:'#6F70DA'}}>
						<img src={poli} width="26%"/>
						<Teks style={{fontFamily:'Poppins-SemiBold', textTransform: 'capitalize', fontSize:'13px'}}>Daftar Poliklinik</Teks>
					</Button>
				</div>
			)}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Teks id="modal-modal-title" style={{fontFamily:'Poppins-Medium', fontSize:'16px', textAlign:'center'}}>
					Sign Up/ Login untuk dapat melakukan pendaftaran layanan
					</Teks>
					<div style={{display:'flex', justifyContent:'center', marginTop:'30px'}}>
						<Button variant="contained" onClick={() => navigate("/signup")} style={{width:'40%', height:'30px', backgroundColor: '#6F70DA', fontFamily:'Poppins-Medium', textTransform: 'capitalize', fontSize:'13px'
						}}>Sign Up</Button> 
						<Button variant="contained" onClick={() => navigate("/login")} style={{color:'#6F70DA', backgroundColor:'white', border:'3px solid #6F70DA', marginLeft:'20px', width:'40%', height:'30px',  fontFamily:'Poppins-Medium', textTransform: 'capitalize', fontSize:'13px'
						}}>Sign In</Button>                      
					</div>
				</Box>
			</Modal>
		</div>
		
		
	);
};

export const Pendapat = () => {
	return(
		<div style={{display:'flex', width:'100%'}}>
			<div  style={{width:'50%',  paddingTop:'130px', marginRight:'50px', justifyContent:'left'}}>
				<Teks style={{paddingLeft:'90px', paddingRight:'50px', fontSize:'2.5em'}}>Apa Pendapat Mereka Tentang Kita ?</Teks>
			</div>
			<div style={{width:'50%',  paddingTop:'60px'}}>
				<div style={{backgroundColor:'white', height:'200px', display:'flex', justifyContent:'left', marginRight:'60px', borderRadius:'15px'}}>
					<div style={{width:'150px', paddingLeft:'20px', paddingTop:'20px'}}>
						<img src={foto} style={{height:'90px', width:'90px', paddingLeft:'10px'}}/>
					</div>
					<div style={{paddingTop:'20px', width:'100%', paddingRight:'20px', paddingLeft:'20px'}}>
						<Teks style={{paddingTop:'5px'}}>Nufail Farrel</Teks>
						<p style={{fontFamily:'Poppins-Regular'}}>Mahasiswa UB</p>
						<br/>
						<div style={{backgroundColor:'#E3E3FB', width:'100%', height:'40%',paddingRight:'10px', paddingLeft:'10px', borderRadius:'10px'}}>
							<p style={{fontFamily:'Poppins-Regular', paddingTop:'5px', fontSize:'13px'}}>Sangat membantu memberikan opsi kepada saya dalam mencari dan mendaftar swab/antigen.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Informasi = () => {
	return(
		<div style={{width:'100%'}}>
				<Teks style={{paddingLeft:'90px', paddingRight:'50px', paddingTop:'50px', fontSize:'2.5em'}}>INFORMASI</Teks>
				<br/>
				<div style={{backgroundColor:'#E3E3FB', width:'80%',marginLeft:'90px', borderRadius:'10px'}}>
					<div style={{ padding:'20px 20px 20px 20px', fontFamily:'Poppins-Regular',width:'100%'}}>
						<Teks style={{fontFamily:'Poppins-Regular', fontSize:'1.5em'}}>
						* Mohon maaf pelayanan Klinik UB tutp pada tanggal <span style={{fontFamily:'Poppins-Regular', color:'red'}}>28 Februari 2022</span>
						. Akan buka kembali pada tanggal <span style={{fontFamily:'Poppins-Regular', color:'red'}}>1 Maret 2022</span>
						. Atas perhatiannya kami ucapkan Terimakasih.
						</Teks>
					</div>
					
				</div>
		</div>
	);
};

// export const Menu = () => {
// 	return(
// 	);
// };