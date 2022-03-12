import styled from 'styled-components';
import '../App.css';
import IkonSatu from '../asset/icon/imgSatu.svg';
import IkonDua from '../asset/icon/dua.svg';
import IkonTiga from '../asset/icon/tiga.svg';
import IkonEmpat from '../asset/icon/empat.svg';
import IkonLima from '../asset/icon/lima.svg';
import IkonEnam from '../asset/icon/enam.svg';
import IkonTujuh from '../asset/icon/tujuh.svg';
import dok1 from '../asset/icon/dok1.svg';
import dok2 from '../asset/icon/dok2.svg';
import dok3 from '../asset/icon/dok3.svg';
import dok4 from '../asset/icon/dok4.svg';
import dok5 from '../asset/icon/dok5.svg';
import dok6 from '../asset/icon/dok6.svg';
import dok7 from '../asset/icon/dok7.svg';
import dok8 from '../asset/icon/dok8.svg';
import dok9 from '../asset/icon/dok9.svg';
import dok10 from '../asset/icon/dok10.svg';
const Teks = styled.div`
    font-family: Poppins-Regular;
    font-size: 17px;
`;

export const Medikone = () => {
    return (
            <div style={{paddingTop:'10px'}}>        
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'9em' }}>
                        <img src={IkonSatu}/>
                        <Teks style={{paddingLeft:'5px'}}> Poli Gizi</Teks>
                    </div>
                    
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'9em',paddingTop:'10px' }}>
                        <img src={IkonDua}/>
                        <Teks style={{paddingLeft:'5px'}}> Farmasi</Teks>
                    </div>

                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'9em',paddingTop:'10px' }}>
                        <img src={IkonTiga}/>
                        <Teks style={{paddingLeft:'5px'}}> Laboratorium & Tes Covid-19</Teks>
                    </div>

                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'9em',paddingTop:'10px' }}>
                        <img src={IkonEmpat}/>
                        <Teks style={{paddingLeft:'5px'}}> Rekam Medik</Teks>
                    </div>
            </div>  
    );
};

export const Mediktwo = () => {
    return(
        <div style={{paddingTop:'10px'}}>        
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'9em' }}>
                        <img src={IkonSatu}/>
                        <Teks style={{paddingLeft:'5px'}}> Poli Umum</Teks>
                    </div>
                    
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'9em',paddingTop:'10px' }}>
                        <img src={IkonDua}/>
                        <Teks style={{paddingLeft:'5px'}}> Poli Gigi</Teks>
                    </div>

                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'9em',paddingTop:'10px' }}>
                        <img src={IkonTiga}/>
                        <Teks style={{paddingLeft:'5px'}}> Poli KIA (Kesehatan Ibu dan Anak)</Teks>
                    </div>
            </div> 
    );
};

export const PoliUmum = () => {
    return(
        <div style={{paddingTop:'10px'}}>        
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingBottom:'20px'}}>
                        <img src={dok1} style={{marginRight:'10px', height:'90px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-SemiBold'}}> dr. Andreas Gladwin</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Senin - Kamis : 08.00 - 10.00 WIB</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Jumat : 08.00 - 10.00 WIB</Teks>
                        </div>
                        
                    </div>
                    
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingBottom:'20px'}}>
                        <img src={dok2} style={{marginRight:'10px', height:'90px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-SemiBold'}}> dr. Kesha Natalia</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Senin - Kamis : 09.00 - 11.00 WIB</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Jumat : 08.00 - 09.30 WIB</Teks>
                        </div>
                        
                    </div>

                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em', paddingBottom:'20px'}}>
                        <img src={dok3} style={{marginRight:'10px', height:'90px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-SemiBold'}}> dr. Steve Delwyn </Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Senin - Kamis : 10.00 - 12.45 WIB</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Jumat : 10.00 - 12.20 WIB</Teks>
                        </div>
                        
                    </div>

                
            </div> 
    );
};

export const PoliGigi = () => {
    return(
        <div style={{paddingTop:'10px'}}>        
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingBottom:'20px'}}>
                        <img src={dok4} style={{marginRight:'10px', height:'90px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-SemiBold'}}> drg. Bella Shanza </Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Senin - Kamis : 08.00 - 10.00 WIB</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Jumat : 08.00 - 10.00 WIB</Teks>
                        </div>
                        
                    </div>
                    
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingBottom:'20px'}}>
                        <img src={dok5} style={{marginRight:'10px', height:'90px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-SemiBold'}}> drg. Olivia Gabriella</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Senin - Kamis : 09.00 - 11.00 WIB</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Jumat : 08.00 - 09.30 WIB</Teks>
                        </div>
                        
                    </div>

                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em', paddingBottom:'20px'}}>
                        <img src={dok6} style={{marginRight:'10px', height:'90px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-SemiBold'}}> drg. Andrian Rashad </Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Senin - Kamis : 10.00 - 12.45 WIB</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Jumat : 10.00 - 12.20 WIB</Teks>
                        </div>
                        
                    </div>

                
            </div> 
    );
};

export const PoliKIA = () => {
    return(
        <div style={{paddingTop:'10px'}}>        
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingBottom:'20px'}}>
                        <img src={dok7} style={{marginRight:'10px', height:'90px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-SemiBold'}}> dr. Hanna Oswald Sp.A </Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Senin - Kamis : 08.00 - 10.00 WIB</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Jumat : 08.00 - 10.00 WIB</Teks>
                        </div>
                        
                    </div>
                    
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingBottom:'20px'}}>
                        <img src={dok8} style={{marginRight:'10px', height:'90px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-SemiBold'}}> dr. Daneil Sebastian</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Senin - Kamis : 09.00 - 11.00 WIB</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Jumat : 08.00 - 09.30 WIB</Teks>
                        </div>
                        
                    </div>

                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em', paddingBottom:'20px'}}>
                        <img src={dok9} style={{marginRight:'10px', height:'90px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-SemiBold'}}> dr. Shakira Shabila</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Senin - Kamis : 10.00 - 12.45 WIB</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Jumat : 10.00 - 12.20 WIB</Teks>
                        </div>
                        
                    </div>

                
            </div> 
    );
};

export const PoliGizi = () => {
    return(
        <div style={{paddingTop:'10px'}}>        
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingBottom:'20px'}}>
                        <img src={dok10} style={{marginRight:'10px', height:'90px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-SemiBold'}}> dr. Fariz Al-Ghazi</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Senin - Kamis : 08.00 - 10.00 WIB</Teks>
                            <Teks style={{paddingLeft:'5px', fontSize:'15px', fontFamily:'Poppins-Regular'}}>Jumat : 08.00 - 10.00 WIB</Teks>
                        </div>
                        
                    </div>
            </div> 
    );
};

export const Informasi = () => {
    return(
        <div style={{paddingTop:'10px'}}>        
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <img src={IkonSatu} style={{marginRight:'10px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Bagi mahasiswa UB dapat mengisi NIM & NIK</Teks>
                        </div>
                        
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <img src={IkonDua} style={{marginRight:'10px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Bagi pegawai UB dapat mengisi NIP pegawai & NIK </Teks>
                        </div>
                        
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <img src={IkonTiga} style={{marginRight:'10px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Bagi Umum dapat mengisi NIK</Teks>
                        </div>
                        
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <img src={IkonEmpat} style={{marginRight:'10px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Bagi Umum khusus anak-anak dapat memasukkan no di KK saja </Teks>
                        </div>
                        
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <img src={IkonLima} style={{marginRight:'10px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Booking hanya berlaku maksimal 7 hari</Teks>
                        </div>
                        
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <img src={IkonEnam} style={{marginRight:'10px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Selain civitas UB akan dikenakan biaya admin sebesar Rp 4000 </Teks>
                        </div>
                        
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <img src={IkonTujuh} style={{marginRight:'10px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Pembayaran dilakukan langsung di tempat pada bagian kasir</Teks>
                        </div>
                        
                    </div>
                    <div style={{ display:'flex', justifyContent:'left',paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <span style={{fontSize:'25px', fontFamily:'Poppins-SemiBold', color:'red'}}>! </span>
                        <Teks style={{paddingLeft:'10px', paddingTop:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Sebelum mengisi form pendaftaran disarankan untuk melakukan update profile pada menu Akun Saya.</Teks>
                    </div>
            </div> 
    );
};

export const InfoPas = () => {
    return(
        <div style={{paddingTop:'10px'}}>        
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <Teks style={{width:'150px', paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Nama Pasien </Teks>
                        <Teks style={{paddingLeft:'10px', fontSize:'17px', fontFamily:'Poppins-Regular'}}><span style={{fontSize:'17px', fontFamily:'Poppins-Regular'}}>: </span>Gabrielle Evan</Teks>    
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <Teks style={{width:'150px',paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Tanggal Lahir </Teks>
                        <Teks style={{paddingLeft:'10px', fontSize:'17px', fontFamily:'Poppins-Regular'}}><span style={{fontSize:'17px', fontFamily:'Poppins-Regular'}}>: </span>07 - 05 - 2002</Teks>    
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <Teks style={{width:'150px',paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>NIK </Teks>
                        <Teks style={{paddingLeft:'10px', fontSize:'17px', fontFamily:'Poppins-Regular'}}><span style={{fontSize:'17px', fontFamily:'Poppins-Regular'}}>: </span>517840234757001</Teks>    
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <Teks style={{width:'150px',paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>NIM / NIP </Teks>
                        <Teks style={{paddingLeft:'10px', fontSize:'17px', fontFamily:'Poppins-Regular'}}><span style={{fontSize:'17px', fontFamily:'Poppins-Regular'}}>: </span>0205170437921</Teks>    
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <Teks style={{width:'150px',paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Jenis Kelamin </Teks>
                        <Teks style={{paddingLeft:'10px', fontSize:'17px', fontFamily:'Poppins-Regular'}}><span style={{fontSize:'17px', fontFamily:'Poppins-Regular'}}>: </span>Laki-Laki</Teks>    
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <Teks style={{width:'150px',paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>No Telepon </Teks>
                        <Teks style={{paddingLeft:'10px', fontSize:'17px', fontFamily:'Poppins-Regular'}}><span style={{fontSize:'17px', fontFamily:'Poppins-Regular'}}>: </span>081234764328</Teks>    
                    </div>
                    <div style={{ display:'flex', justifyContent:'left',paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <span style={{width:'20px',fontSize:'25px', fontFamily:'Poppins-SemiBold', color:'red'}}>! </span>
                        <Teks style={{paddingLeft:'10px', paddingTop:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Pastikan data sudah terisi dengan benar</Teks>
                    </div>
            </div> 
    );
};

export const InformasiSwab = () => {
    return(
        <div style={{paddingTop:'10px'}}>   
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <Teks style={{paddingLeft:'5px', fontSize:'20px', fontFamily:'Poppins-Regular'}}>SWAB Antigen</Teks>
                    </div>

                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <img src={IkonSatu} style={{marginRight:'10px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Hasil Swab Antigen diterima hanya dalam waktu 20 menit</Teks>
                        </div>
                        
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <img src={IkonDua} style={{marginRight:'10px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Metode Swab Antigen : Tes diambil melalui saluran pernapasan</Teks>
                        </div>
                        
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <img src={IkonTiga} style={{marginRight:'10px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Hasil berupa file pdf yang dikirim melalui email / whatsapp & masuk peduli lindungi</Teks>
                        </div>
                        
                    </div>

                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <Teks style={{paddingLeft:'5px', fontSize:'20px', fontFamily:'Poppins-Regular'}}>SWAB PCR</Teks>
                    </div>

                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <img src={IkonSatu} style={{marginRight:'10px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Hasil Swab PCR diterima hanya dalam waktu 20 menit</Teks>
                        </div>
                        
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <img src={IkonDua} style={{marginRight:'10px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Metode Swab PCR : Tes diambil melalui saluran pernapasan dan tenggorokan </Teks>
                        </div>
                        
                    </div>
                    <div style={{display:'flex', justifyContent:'left', paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'30px'}}>
                        <img src={IkonTiga} style={{marginRight:'10px'}}/>
                        <div>
                            <Teks style={{paddingLeft:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Hasil berupa file pdf yang dikirim melalui email / whatsapp & masuk peduli lindungi</Teks>
                        </div>
                        
                    </div>
                    
                    <div style={{ display:'flex', justifyContent:'left',paddingLeft:'3em' , paddingRight:'20px', paddingBottom:'20px'}}>
                        <span style={{fontSize:'25px', fontFamily:'Poppins-SemiBold', color:'red'}}>! </span>
                        <Teks style={{paddingLeft:'10px', paddingTop:'5px', fontSize:'17px', fontFamily:'Poppins-Regular'}}>Sebelum mengisi form pendaftaran disarankan untuk melakukan update profile pada menu Akun Saya.</Teks>
                    </div>
            </div> 
    );
};