import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
	const navigate = useNavigate()

	const handleGoHome = () => {
		navigate('/') // This replaces history.push('/')
	}

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
			<h1>404 - Page Not Found</h1>
			<p>Sorry, the page you are looking for does not exist.</p>
			<button onClick={handleGoHome} style={{ padding: '10px 20px', fontSize: '16px' }}>
				Go Home
			</button>
		</div>
	)
}

export default ErrorPage
