import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
	const { section, id } = useParams()
	const navigate = useNavigate()
	const [item, setItem] = useState({
		name: '',
		description: '',
		role: '',
		image_url: '',
		image_alt: '',
	})
	const [file, setFile] = useState(null)
	const [preview, setPreview] = useState(null)

	useEffect(() => {
		const fetchItem = async () => {
			try {
				const res = await axios.get(`http://face-2-face-tv-server.vercel.app/${section}/${id}`)
				setItem(res.data)
				if (res.data.image_url) {
					setPreview(`http://face-2-face-tv-server.vercel.app/uploads/${res.data.image_url}`)
				}
			} catch (err) {
				console.log(err)
			}
		}
		fetchItem()
	}, [section, id])

	const handleChange = e => {
		const { name, value } = e.target
		setItem(prevState => ({ ...prevState, [name]: value }))
	}

	const handleFileSelect = e => {
		const selectedFile = e.target.files[0]
		setFile(selectedFile)
		setPreview(URL.createObjectURL(selectedFile))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('name', item.name)
		formData.append('description', item.description)
		formData.append('image_alt', item.image_alt)
		if (item.role) {
			formData.append('role', item.role)
		}
		if (file) {
			formData.append('image', file)
		} else {
			formData.append('image_url', item.image_url) // Append the current image URL if no new file is uploaded
		}

		try {
			await axios.put(`http://face-2-face-tv-server.vercel.app/${section}/${id}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			navigate('/admin')
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
			<div className='w-full max-w-2xl bg-white p-8 rounded-lg shadow-md'>
				<h1 className='text-3xl font-bold mb-6 text-center'>Update Item</h1>
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label className='block text-gray-700'>Name</label>
						<input
							type='text'
							name='name'
							value={item.name}
							onChange={handleChange}
							className='w-full p-2 border border-gray-300 rounded mt-1 bg-white'
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700'>Description</label>
						<textarea
							name='description'
							value={item.description}
							onChange={handleChange}
							className='w-full p-2 border border-gray-300 rounded mt-1 bg-white'
						/>
					</div>
					{section === 'ThisWeek' && (
						<div className='mb-4'>
							<label className='block text-gray-700'>Role</label>
							<input
								type='text'
								name='role'
								value={item.role}
								onChange={handleChange}
								className='w-full p-2 border border-gray-300 rounded mt-1 bg-white'
							/>
						</div>
					)}
					<label
						htmlFor='image'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Image:
					</label>
					<input
						type='file'
						name='image'
						onChange={handleFileSelect}
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					/>

					{preview && (
						<div className='mt-4'>
							<label className='block text-gray-700 mb-2'>Preview</label>
							<div className='w-350 h-350 border border-gray-300 rounded-md overflow-hidden'>
								<img src={preview} alt='Preview' className='w-full h-full object-cover' />
							</div>
						</div>
					)}

					<div className='mb-4'>
						<label className='block text-gray-700'>Image Alt Text</label>
						<input
							type='text'
							name='image_alt'
							value={item.image_alt}
							onChange={handleChange}
							className='w-full p-2 border border-gray-300 rounded mt-1 bg-white'
						/>
					</div>
					<button
						className='bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600'
						onClick={handleSubmit}
					>
						Update
					</button>
				</form>
			</div>
		</div>
	)
}

export default Update
