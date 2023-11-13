import styled from 'styled-components';
import '../App.css';
import * as React from 'react';


const Teks = styled.div`
    font-family: Poppins-SemiBold;
    font-size: 2em;
`;

const InfoHome = () => {
	return(
		<div>
            <Teks style={{paddingTop:'3px', textAlign: 'center'}}>B-HEALTH X KLINIK UB</Teks>
			<br/>
            <hr/>
            <br/>
			<div style={{display:'flex', justifyContent:'space-between', padding:'20px 40px 20px 90px', marginRight:'10%'}}>
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
            <br/>
            <hr/>
            <br/>
            <Teks style={{paddingTop:'3px', fontFamily:'Poppins-Medium', textAlign: 'center', fontSize:'10px', color:'grey'}}>2022 Copyright B-Health • All rights reserved • Made in Malang, Indonesia</Teks>
		</div>
	);
};
export default InfoHome;