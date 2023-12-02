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
import axios from "axios";

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
	padding: 10px 10px;
	font-size: 2rem;
	font-family: inherit;
	border-radius: 39px;
	transition: 0.2s all;
	margin-top: 10px;
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
		status: 'Anda Telah Terdaftar!',
	});
	const [isError, setIsError] = useState({ status: false, message: '' });

	const { authToken } = useAuth();
    const isAnyToken = JSON.parse(localStorage.getItem('token'));

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [data, setData] = useState([]); 
   

    useEffect(() => {
        fetch(`https://ipsi-vaccine-api-09047cb59b33.herokuapp.com/v1/vaccine-tickets/`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${isAnyToken}`, 
            },
        })
        .then(response => response.json()) 
        .then(data => setData(data.arr)); 
    },[]);

    const filteredData = data.filter((el) => {
            return (el);
    })

    const handleApprove = async(e) => {
        console.log(e);
        try {
            const daftarResponse = await axios.put(
                `https://ipsi-vaccine-api-09047cb59b33.herokuapp.com/v1/bookings/${e}`, 
                 forms,
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${isAnyToken}`,
                    }
                }
            );
            console.log("berhasil");
            console.log(daftarResponse);
            alert("Pasien telah disetujui");
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
    }

    const handleDel = async (e) => {
        console.log(e);
        await axios.delete(`https://ipsi-vaccine-api-09047cb59b33.herokuapp.com/v1/vaccine-tickets/${e}`);
        alert("Berhasil menghapus");

        fetch(`https://ipsi-vaccine-api-09047cb59b33.herokuapp.com/v1/vaccine-tickets/`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${isAnyToken}`, 
            },
        })
        .then(response => response.json()) 
        .then(data => setData(data.arr)); 
        window.location.reload(true)
    }

    const handleBooking = async(e) => {
        console.log(e);
        localStorage.setItem('IDCurrentBooking', e);
        navigate("/uploadhasil")
    }

    
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
                            {filteredData.map((item) => (
                            <div data-aos="fade-up"  style={{display:'flex',marginLeft:'50px', marginRight:'50px', backgroundColor:'#F4FEFF', borderRadius:'8px', marginBottom:'10px'}}>
                                <div className="col-md-7" style={{display:'flex', flexDirection:'column', paddingLeft:'20px'}}>
                                    <Teks2 style={{color:'black'}}>
                                        ID Vaksin &nbsp; {item.ticketId}
                                    </Teks2>
                                    <Teks2 style={{color:'black'}}>
                                        Nama : &nbsp; {item.user}
                                    </Teks2>
                                    <Teks2 style={{color:'black'}}>
                                        Tanggal Vaksin : &nbsp; {item.schedule_date}
                                    </Teks2>
                                    <Teks2 style={{color:'black'}}>
                                        Jam Vaksin : &nbsp; {item.schedule_time}
                                    </Teks2>
                                </div>
                                <div className="col-md-2" >
                                    <Button2 variant="contained" onClick={()=>handleApprove(item.ticketId)} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', width:'150px', justifyContent:'right', alignItems:'right',marginBottom:'10px'}} 
                                    >Approve
                                    </Button2>
                                </div>
                                <div className="col-md-2" >
                                    <Button variant="contained" onClick={() => handleBooking(item.bookingId)} style={{fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', width:'150px', justifyContent:'right', alignItems:'right',marginBottom:'10px'}} 
                                    >Upload
                                    </Button>
                                </div>
                                <div className="col-md-1" >
                                    <Button variant="contained" onClick={() => handleDel(item.ticketId)} style={{background:'none', borderRadius:'0px',fontFamily:'Poppins-Regular', textTransform: 'capitalize', fontSize:'13px', width:'150px', justifyContent:'right', alignItems:'right',marginBottom:'10px'}} 
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 100 100">
                                            <path fill="#f37e98" d="M25,30l3.645,47.383C28.845,79.988,31.017,82,33.63,82h32.74c2.613,0,4.785-2.012,4.985-4.617L75,30"></path><path fill="#f15b6c" d="M65 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S65 36.35 65 38zM53 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S53 36.35 53 38zM41 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S41 36.35 41 38zM77 24h-4l-1.835-3.058C70.442 19.737 69.14 19 67.735 19h-35.47c-1.405 0-2.707.737-3.43 1.942L27 24h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h54c1.657 0 3-1.343 3-3S78.657 24 77 24z"></path><path fill="#1f212b" d="M66.37 83H33.63c-3.116 0-5.744-2.434-5.982-5.54l-3.645-47.383 1.994-.154 3.645 47.384C29.801 79.378 31.553 81 33.63 81H66.37c2.077 0 3.829-1.622 3.988-3.692l3.645-47.385 1.994.154-3.645 47.384C72.113 80.566 69.485 83 66.37 83zM56 20c-.552 0-1-.447-1-1v-3c0-.552-.449-1-1-1h-8c-.551 0-1 .448-1 1v3c0 .553-.448 1-1 1s-1-.447-1-1v-3c0-1.654 1.346-3 3-3h8c1.654 0 3 1.346 3 3v3C57 19.553 56.552 20 56 20z"></path><path fill="#1f212b" d="M77,31H23c-2.206,0-4-1.794-4-4s1.794-4,4-4h3.434l1.543-2.572C28.875,18.931,30.518,18,32.265,18h35.471c1.747,0,3.389,0.931,4.287,2.428L73.566,23H77c2.206,0,4,1.794,4,4S79.206,31,77,31z M23,25c-1.103,0-2,0.897-2,2s0.897,2,2,2h54c1.103,0,2-0.897,2-2s-0.897-2-2-2h-4c-0.351,0-0.677-0.185-0.857-0.485l-1.835-3.058C69.769,20.559,68.783,20,67.735,20H32.265c-1.048,0-2.033,0.559-2.572,1.457l-1.835,3.058C27.677,24.815,27.351,25,27,25H23z"></path><path fill="#1f212b" d="M61.5 25h-36c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h36c.276 0 .5.224.5.5S61.776 25 61.5 25zM73.5 25h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5S73.776 25 73.5 25zM66.5 25h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S66.776 25 66.5 25zM50 76c-1.654 0-3-1.346-3-3V38c0-1.654 1.346-3 3-3s3 1.346 3 3v25.5c0 .276-.224.5-.5.5S52 63.776 52 63.5V38c0-1.103-.897-2-2-2s-2 .897-2 2v35c0 1.103.897 2 2 2s2-.897 2-2v-3.5c0-.276.224-.5.5-.5s.5.224.5.5V73C53 74.654 51.654 76 50 76zM62 76c-1.654 0-3-1.346-3-3V47.5c0-.276.224-.5.5-.5s.5.224.5.5V73c0 1.103.897 2 2 2s2-.897 2-2V38c0-1.103-.897-2-2-2s-2 .897-2 2v1.5c0 .276-.224.5-.5.5S59 39.776 59 39.5V38c0-1.654 1.346-3 3-3s3 1.346 3 3v35C65 74.654 63.654 76 62 76z"></path><path fill="#1f212b" d="M59.5 45c-.276 0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2C60 44.776 59.776 45 59.5 45zM38 76c-1.654 0-3-1.346-3-3V38c0-1.654 1.346-3 3-3s3 1.346 3 3v35C41 74.654 39.654 76 38 76zM38 36c-1.103 0-2 .897-2 2v35c0 1.103.897 2 2 2s2-.897 2-2V38C40 36.897 39.103 36 38 36z"></path>
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </Content>
               
            <Footer style={{position:'absolute'}}/>
        </div>
    );
};

export default PesertaVaksin;