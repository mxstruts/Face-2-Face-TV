import { useState } from 'react'
import GlobalApi from '../../GlobalApi'
import FileInput from '../Admin/choose-file'

const AddComingSoonForm = () => {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		role: '',
		avatar: null,
	})

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleFileSelect = file => {
		setFormData(prevData => ({
			...prevData,
			avatar: file,
		}))
	}

	const uploadFile = async file => {
		const formData = new FormData()
		formData.append('file', file)

		const response = await fetch(
			'https://api-ca-central-1.hygraph.com/v2/cluznoumc17fl08w4ln0esf9q/master',
			{
				method: 'POST',
				body: formData,
			}
		)

		if (!response.ok) {
			throw new Error('File upload failed')
		}

		const data = await response.json()
		return data.fileUrl // Adjust this according to your API response
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const isConfirmed = window.confirm('Are you sure you want to add this post?')
		if (isConfirmed) {
			try {
				let avatarUrl = ''
				if (formData.avatar) {
					avatarUrl = await uploadFile(formData.avatar)
				}

				const { title, description, role } = formData
				await GlobalApi.AddComingSoon(title, description, role, avatarUrl)
				console.log('Post added successfully')
				setFormData({
					title: '',
					description: '',
					role: '',
					avatar: null,
				})
			} catch (error) {
				console.error('Error adding Coming Soon:', error)
			}
		}
	}

	return (
		<form className='max-w-sm mx-auto ' onSubmit={handleSubmit}>
			<div className='space-y-2'>
				<h1 className='font-bold'>Add Coming Soon Form:</h1>
				<label
					htmlFor='title'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
				>
					Title:
				</label>
				<input
					name='title'
					value={formData.title}
					onChange={handleInputChange}
					type='text'
					id='title'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='Title of the news'
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
					value={formData.role}
					onChange={handleInputChange}
					type='text'
					id='role'
					placeholder='Role related to the news'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
					value={formData.description}
					onChange={handleInputChange}
					type='text'
					id='description'
					placeholder='Description of the news'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					required
				/>

				<div className='max-w-md mx-auto'>
					<FileInput onFileSelect={handleFileSelect} />
				</div>
				<button
					type='submit'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					Add new Coming Soon
				</button>
			</div>
		</form>
	)
}

export default AddComingSoonForm
