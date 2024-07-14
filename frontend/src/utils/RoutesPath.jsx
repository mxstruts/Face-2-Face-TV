import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import FaceToFaceGuests from '../pages/FaceToFaceGuests'
import Home from '../pages/Home'
import NurseOfTheYear from '../pages/NurseOfTheYear'
import Showtimes from '../pages/Showtimes'
import Admin from '../pages/Admin'
import AddComingSoon from '../pages/AddComingSoon'
import AddThisWeek from '../pages/AddThisWeek'
import Hospice from './../pages/Hospice'
import Update from '../pages/Update'
import Login from '../pages/Login'

function RoutesPath() {
	const [loggedIn, setLoggedIn] = useState(false)

	const authenticate = async (username, password) => {
		// Replace with actual authentication logic, e.g., API call
		return username === '1111' && password === '1111'
	}

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Hospice' element={<Hospice />} />
				<Route path='/FaceToFaceGuests' element={<FaceToFaceGuests />} />
				<Route path='/NurseOfTheYear' element={<NurseOfTheYear />} />
				<Route path='/Showtimes' element={<Showtimes />} />
				<Route path='/AddComingSoon' element={<AddComingSoon />} />
				<Route path='/AddThisWeek' element={<AddThisWeek />} />
				<Route path='/update/:section/:id' element={<Update />} />
				<Route
					path='/Admin'
					element={
						loggedIn ? <Admin /> : <Navigate to='/login' replace state={{ from: '/admin' }} />
					}
				/>
				<Route
					path='/login'
					element={<Login setLoggedIn={setLoggedIn} authenticate={authenticate} />}
				/>
			</Routes>
		</Router>
	)
}

export default RoutesPath
