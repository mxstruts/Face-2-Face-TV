import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Login = ({ setLoggedIn, authenticate }) => {
	const navigate = useNavigate()
	const location = useLocation()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()

		try {
			if (await authenticate(username, password)) {
				setLoggedIn(true)
				const redirectPath = (location.state && location.state.from) || '/admin'
				navigate(redirectPath, { replace: true })
			} else {
				alert('Invalid username or password')
			}
		} catch (err) {
			console.error('Login error:', err)
			alert('Login failed. Please try again.')
		}
	}

	return (
		<div className='flex flex-col items-center justify-center bg-gray-100 p-4'>
			<div className='w-full max-w-sm bg-white p-8 rounded-lg shadow-md'>
				<h1 className='text-3xl font-bold mb-6 text-center'>Admin Login</h1>
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label className='block text-gray-700'>Username</label>
						<input
							type='text'
							value={username}
							onChange={e => setUsername(e.target.value)}
							className='w-full p-2 border border-gray-300 rounded mt-1 bg-white'
							required
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Password</label>
						<input
							type='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							className='w-full p-2 border border-gray-300 rounded mt-1 bg-white'
							required
						/>
					</div>
					<button
						type='submit'
						className='bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 w-full'
					>
						Login
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login
