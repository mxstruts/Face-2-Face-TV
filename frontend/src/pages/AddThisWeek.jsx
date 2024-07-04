import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import FileInput from '../components/Admin/choose-file'

const Add = () => {
	const [thisWeek, setThisWeek] = useState({
		name: '',
		description: '',
		role: '',
		image_url: '',
		image_alt: '',
	})
	const [file, setFile] = useState(null)

	const navigate = useNavigate()

	const handleChange = e => {
		setThisWeek(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleFileSelect = file => {
		setFile(file)
	}

	const handleClick = async e => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('name', thisWeek.name)
		formData.append('description', thisWeek.description)
		formData.append('role', thisWeek.role)
		formData.append('image', file)
		formData.append('image_alt', thisWeek.image_alt)

		try {
			await axios.post('http://localhost:8800/ThisWeek', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			console.log('success')
			navigate('/admin')
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<>
			<form className='max-w-sm mx-auto '>
				<div className='space-y-2'>
					<h1 className='font-bold'>Add This Week Form:</h1>
					<label
						htmlFor='name'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Name:
					</label>
					<input
						name='name'
						onChange={handleChange}
						type='text'
						id='name'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='Name of the news'
						required
					/>
					<label
						htmlFor='description'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Description:
					</label>
					<input
						name='description'
						onChange={handleChange}
						type='text'
						id='description'
						placeholder='Description of the news'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required
					/>
					<label
						htmlFor='role'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Role:
					</label>
					<input
						name='role'
						onChange={handleChange}
						type='text'
						id='role'
						placeholder='Role or position'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required
					/>
					<label
						htmlFor='image_alt'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Image Alt Text:
					</label>
					<input
						name='image_alt'
						onChange={handleChange}
						type='text'
						id='image_alt'
						placeholder='Alternative text for the image'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required
					/>
					<div className='max-w-md mx-auto'>
						<FileInput onFileSelect={handleFileSelect} />
					</div>
					<button
						className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						onClick={handleClick}
					>
						Add new This Week
					</button>
				</div>
			</form>
		</>
	)
}

export default Add
