import { Route, Routes } from 'react-router-dom';
import Akun from './pages/Akun';
import EditAkun from './pages/EditAkun';
import LayPoli from './pages/LayPoli';
import DetPol from './pages/DetPol';
import DetSwab from './pages/DetSwab';
import DafPoli from './pages/DafPoli';
import DafVaksin from './pages/DafVaksin';
import Swab from './pages/Swab';
import JadPoli from './pages/JadPoli';
import Sukses from './pages/Sukses';
import SuksesSwab from './pages/SuksesSwab';
import RiwayatTran from './pages/RiwayatTran';
import RiwayatVak from './pages/RiwayatVak';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { PrivateRoute, RestrictedRoute } from './config/PrivateRoute';
import { AuthContext } from './config/Auth';
import { useState } from 'react';
import ScrollTop from './components/ScrollTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles	from './templates/globalStyles';
import Reservasi from './pages/Reservasi';
import ReservasiCovid from './pages/ReservasiCovid';
import TiketVaksin from './pages/TiketVaksin';
import Sertif from './pages/Sertif';
import ShowTiket from './pages/ShowTiket';
import PesertaVaksin from './pages/PesertaVaksin';
import Upload from './pages/Upload';
import Artikel from './pages/Artikel';
import Artikel3 from './pages/Artikel3';
import Artikel2 from './pages/Artikel2';
// var express = require('express')
// var cors = require('cors')

// var app = express()

// app.use(cors())

function App() {

	const isAnyToken = JSON.parse(localStorage.getItem('token'));
	// const userId = JSON.parse(localStorage.getItem('id'));
	const ketT = JSON.parse(localStorage.getItem('ket'));
	const [authToken, setAuthToken] = useState(isAnyToken);
	// const [user, setUser] = useState(userId);
	const [ketId, setket] = useState(ketT);

	const setAndGetTokens = (token) => {
		//token,id harusnya
		localStorage.setItem('token', JSON.stringify(token));
		// localStorage.setItem('id', JSON.stringify(id));
		setAuthToken(token);
		// setUser(id);
		
	};

	const isAnyUser = JSON.parse(localStorage.getItem('idUser'));
	const [idCurrentUser, setIdUserCurrent] = useState(isAnyUser)
	const setIdUser = (id) => {
		localStorage.setItem('idUser', JSON.stringify(id));
		setIdUserCurrent(id);
	}

	return (
		<AuthContext.Provider value={{authToken, setAndGetTokens,setIdUser, idCurrentUser}}>
			<GlobalStyles></GlobalStyles>
			<ScrollTop />
			<Routes>
				<Route exact path="/" element={<Home />} />

				{/* <Route path="/detswab" element={
					<PrivateRoute>
						<DetSwab />
					</PrivateRoute>
						
				}/> */}

				<Route path="/dafvaksin" element={
					<PrivateRoute>
						<DafVaksin />
					</PrivateRoute>
						
				}/>

				{/* <Route path="/swab" element={
						<Swab />
				}/> */}

				<Route path="/reservasi" element={
					<Reservasi />
				}/>

				<Route path="/reservasicovid" element={
					<PrivateRoute>
						<ReservasiCovid />
					</PrivateRoute>
				}/>

				<Route path="/tiketvaksin" element={
					<PrivateRoute>
						<TiketVaksin />
					</PrivateRoute>
				}/>

				<Route path="/sertif" element={
					<PrivateRoute>
						<Sertif />
					</PrivateRoute>
				}/>

				<Route path="/showtiket" element={
					<PrivateRoute>
						<ShowTiket />
					</PrivateRoute>
				}/>

				<Route path="/upload" element={
					<PrivateRoute>
						<PesertaVaksin />
					</PrivateRoute>
				}/>

				<Route path="/uploadhasil" element={
					<PrivateRoute>
						<Upload />
					</PrivateRoute>
				}/>

				<Route path="/artikel" element={
						<Artikel />
				}/>

				<Route path="/artikel2" element={
						<Artikel2 />
				}/>

				<Route path="/artikel3" element={
						<Artikel3 />
				}/>

				{/* <Route path="/sukses" element={
					<PrivateRoute>
						<Sukses />
					</PrivateRoute>
						
				}/>

				<Route path="/suksesswab" element={
					<PrivateRoute>
						<SuksesSwab />
					</PrivateRoute>
						
				}/>


				<Route path="/detpol" element={
					<PrivateRoute>
						<DetPol />
					</PrivateRoute>
						
				}/>

				<Route path="/dafpol" element={
					<PrivateRoute>
						<DafPoli />
					</PrivateRoute>
						
				}/>
				
				<Route path="/jadpol" element={
						<JadPoli />
				}/>

				<Route path="/laypol" element={
						<LayPoli />
				}/>

				<Route path="/riwayattran" element={
					<PrivateRoute>
						<RiwayatTran />
					</PrivateRoute>
						
				}/>

				<Route path="/riwayatvak" element={
					<PrivateRoute>
						<RiwayatVak />
					</PrivateRoute>
						
				}/>

				<Route path="/editakun" element={
					<PrivateRoute>
						<EditAkun/>
					</PrivateRoute>
					
				} />

				<Route path="/akun" element={
					<PrivateRoute>
						<Akun/>
					</PrivateRoute>
					
				} /> */}

				<Route path="/login" element={
					<RestrictedRoute>
						<Login />
					</RestrictedRoute>} />

				<Route path="/signup" element={
					<RestrictedRoute>
						<Signup />
					</RestrictedRoute>} />
			</Routes>
		</AuthContext.Provider>
	);
}

export default App;
