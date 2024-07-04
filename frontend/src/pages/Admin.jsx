import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Admin = () => {
	const [comingSoon, setComingSoon] = useState([])
	const [thisWeek, setThisWeek] = useState([])

	useEffect(() => {
		const fetchAllComingSoon = async () => {
			try {
				const res = await axios.get('https://face-2-face-tv-server.vercel.app/ComingSoon')
				setComingSoon(res.data)
			} catch (err) {
				console.log(err)
			}
		}

		const fetchAllThisWeek = async () => {
			try {
				const res = await axios.get('https://face-2-face-tv-server.vercel.app/ThisWeek')
				setThisWeek(res.data)
			} catch (err) {
				console.log(err)
			}
		}

		fetchAllComingSoon()
		fetchAllThisWeek()
	}, [])

	const handleDelete = async (id, section) => {
		try {
			await axios.delete(`https://face-2-face-tv-server.vercel.app/${section}/${id}`)
			// Refresh the data after deletion
			if (section === 'ComingSoon') {
				setComingSoon(prevState => prevState.filter(item => item.id !== id))
			} else if (section === 'ThisWeek') {
				setThisWeek(prevState => prevState.filter(item => item.id !== id))
			}
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
			<div className='w-full max-w-4xl'>
				<h1 className='text-3xl font-bold mb-6 text-center'>My Coming Soon Section:</h1>
				<div className='grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3'>
					{comingSoon.map(item => (
						<div
							className='bg-white p-4 rounded-lg shadow-md flex flex-col items-center'
							key={item.id}
						>
							{item.image_url && (
								<img
									src={`https://face-2-face-tv-server.vercel.app/uploads/${item.image_url}`}
									alt={item.image_alt}
									className='w-36 h-36 object-cover rounded mb-4'
								/>
							)}
							<h2 className='text-xl font-semibold mb-2'>{item.name}</h2>
							<p className='text-gray-700 mb-4'>{item.description}</p>
							<div className='flex justify-between w-full'>
								<button
									className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
									onClick={() => handleDelete(item.id, 'ComingSoon')}
								>
									Delete
								</button>
								<button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
									<Link to={`/update/ComingSoon/${item.id}`}>Update</Link>
								</button>
							</div>
						</div>
					))}
				</div>
				<div className='flex justify-center'>
					<button className='bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600'>
						<Link to='/AddComingSoon'>Add new item</Link>
					</button>
				</div>
			</div>
			<div className='w-full max-w-4xl mt-10'>
				<h1 className='text-3xl font-bold mb-6 text-center'>My This Week Section:</h1>
				<div className='grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3'>
					{thisWeek.map(item => (
						<div
							className='bg-white p-4 rounded-lg shadow-md flex flex-col items-center'
							key={item.id}
						>
							{item.image_url && (
								<img
									src={`https://face-2-face-tv-server.vercel.app/uploads/${item.image_url}`}
									alt={item.image_alt}
									className='w-36 h-36 object-cover rounded mb-4'
								/>
							)}
							<h2 className='text-xl font-semibold mb-2'>{item.name}</h2>
							<p className='text-gray-700 mb-4'>{item.description}</p>
							{item.role && <p className='text-gray-700 mb-4'>Role: {item.role}</p>}
							<div className='flex justify-between w-full'>
								<button
									className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
									onClick={() => handleDelete(item.id, 'ThisWeek')}
								>
									Delete
								</button>
								<button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
									<Link to={`/update/ThisWeek/${item.id}`}>Update</Link>
								</button>
							</div>
						</div>
					))}
				</div>
				<div className='flex justify-center'>
					<button className='bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600'>
						<Link to='/AddThisWeek'>Add new item</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Admin
