import styled from 'styled-components';
import '../App.css';
import * as React from 'react';


const Teks = styled.div`
    font-family: Poppins-SemiBold;
    font-size: 2em;
`;

const Footer = () => {
	return(
		<div style={{backgroundColor:'#B3E7EC'}}>
			<div style={{display:'flex', justifyContent:'space-between', padding:'20px 40px 20px 90px', marginRight:'10%', paddingBottom:'5%'}}>
				<div style={{width:'32%'}}>
                    <Teks style={{paddingTop:'3px', fontSize:'14px'}}>About</Teks>
                    <Teks  style={{paddingTop:'3px', fontFamily:'Poppins-Medium', fontSize:'12px'}}>
                    B-Health bekerja sama dengan Klinik UB yang diciptakan untuk membuat suatu wadah baru dalam mengatasi permasalahan mengenai kurangnya informasi terkait mekanisme appointment poli dan layanan swab/antigen pada Klinik UB.
                    </Teks>
                </div>
                <div style={{width:'32%', marginLeft:'100px'}}>
                    <Teks style={{paddingTop:'3px', fontSize:'14px'}}>Get Connected</Teks>
                    <Teks  style={{paddingTop:'3px', fontFamily:'Poppins-Medium', fontSize:'12px'}}>
                    Malang</Teks>
                    <Teks  style={{paddingTop:'3px', fontFamily:'Poppins-Medium', fontSize:'12px'}}>
                    Indonesia</Teks>
                    <Teks  style={{paddingTop:'3px', fontFamily:'Poppins-Medium', fontSize:'12px'}}>
                    0821 - 132 - 8888</Teks>
                    <Teks  style={{paddingTop:'3px', fontFamily:'Poppins-Medium', fontSize:'12px'}}>
                    support@bhealth.com</Teks>
                </div>
                <div style={{ width:'32%'}}>
                    <Teks style={{paddingTop:'3px', fontSize:'14px'}}>Collaboration</Teks>
                    <Teks  style={{paddingTop:'3px', fontFamily:'Poppins-Medium', fontSize:'12px', color:'grey'}}>
                    Klinik Ub</Teks>
                    <Teks  style={{paddingTop:'3px', fontFamily:'Poppins-Medium', fontSize:'12px'}}>
                    Jl. MT Haryono No. 169, Kel. Ketawanggede, Kec. Lowokwaru Kota Malang.</Teks>
                    <Teks  style={{paddingTop:'3px', fontFamily:'Poppins-Medium', fontSize:'12px'}}>
                    (+62341) 571197</Teks>
                    <Teks  style={{paddingTop:'3px', fontFamily:'Poppins-Medium', fontSize:'12px'}}>
                    <a href='https://klinik.ub.ac.id/'>https://klinik.ub.ac.id/</a></Teks>
                </div>
			</div>
		</div>
	);
};
export default Footer;