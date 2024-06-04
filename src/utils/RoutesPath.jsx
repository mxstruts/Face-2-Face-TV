import FaceToFaceGuests from '../pages/FaceToFaceGuests'
import Home from '../pages/Home'
import NurseOfTheYear from '../pages/NurseOfTheYear'
import Showtimes from '../pages/Showtimes'
import Admin from '../pages/Admin'

import '/src/App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function RoutesPath() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/FaceToFaceGuests' element={<FaceToFaceGuests />} />
				<Route path='/NurseOfTheYear' element={<NurseOfTheYear />} />
				<Route path='/Showtimes' element={<Showtimes />} />
				<Route path='/Admin' element={<Admin />} />
			</Routes>
		</Router>
	)
}

export default RoutesPath
