import { useState } from 'react'
import GlobalApi from '../../GlobalApi'
import FileInput from '../Admin/choose-file'
import { avatar } from '@material-tailwind/react'

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
	const AddComingSoon = (title, description, avatar, role) => {
		GlobalApi.AddComingSoon(title, description, avatar, role).then(data => {
			console.log(data)
		})
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const isConfirmed = window.confirm('Are you sure you want to add this post?')
		if (isConfirmed) {
			console.log(formData.title, formData.description)
			AddComingSoon(formData.title, formData.description.formData.avatar)
			setFormData({
				title: '',
				description: '',
			})
		}
	}
	const [latestItem, setLatestItem] = useState(null)
	const handleFileSelect = file => {
		setLatestItem(file)
	}

	// const handleSubmit = async e => {
	// 	e.preventDefault()
	// 	const isConfirmed = window.confirm(
	// 		'Are you sure you want to add this post?'
	// 	)
	// 	if (isConfirmed) {
	// 		try {
	// 			const response = await axios.post(
	// 				'https://6255054089f28cf72b63ae48.mockapi.io/items',
	// 				formData
	// 			)

	// 			console.log('Response from server:', response.data)
	// 			setFormData({
	// 				title: '',
	// 				desc: '',
	// 			})
	// 		} catch (error) {
	// 			console.error('Error sending data:', error)
	// 		}
	// 	}
	// }

	return (
		<>
			<form className='max-w-sm mx-auto ' onSubmit={handleSubmit}>
				<div className='space-y-2'>
					<h1 className='font-bold'>Add Coming Soon Form:</h1>
					<label
						htmlFor='text'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Title:
					</label>
					<input
						name='title'
						value={formData.title}
						onChange={handleInputChange}
						type='text'
						id='text'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='Title of the news'
						required
					/>
					<label
						htmlFor='text'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Role:
					</label>
					<input
						name='description'
						value={formData.role}
						onChange={handleInputChange}
						type='text'
						id='text'
						placeholder='Description of the news'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required
					/>
					<label
						htmlFor='text'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Description:
					</label>
					<input
						name='description'
						value={formData.description}
						onChange={handleInputChange}
						type='text'
						id='text'
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
		</>
	)
}

export default AddComingSoonForm
