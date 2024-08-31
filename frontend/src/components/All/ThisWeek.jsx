'use client'
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Tooltip,
} from '@material-tailwind/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { backend_url } from '../../utils/constants'

function ThisWeek() {
	const [thisWeek, setThisWeek] = useState([])
	const [latestItem, setLatestItem] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchAllThisWeek = async () => {
			try {
				const res = await axios.get(`${backend_url}/ThisWeek`)
				setThisWeek(res.data)
				const mostRecentItem = res.data[res.data.length - 1]
				setLatestItem(mostRecentItem)
				setLoading(false) // Stop loading once data is fetched
			} catch (err) {
				console.log(err)
				setLoading(false) // Stop loading in case of error
			}
		}
		fetchAllThisWeek()
	}, [])

	if (loading) {
		return (
			<div className='flex justify-center items-center p-8'>
				<div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-gray-200'></div>
			</div>
		)
	}

	return (
		<div className='max-w-7xl p-8 m-auto'>
			<div className='flex flex-col md:flex-row mb-8'>
				{latestItem ? (
					<Card>
						<CardHeader floated={false}>
							{latestItem.image_url ? (
								<img src={latestItem.image_url} alt={latestItem.avatar_url} />
							) : (
								<div className='w-full h-48 bg-gray-200 flex items-center justify-center'>
									<span>No Image</span>
								</div>
							)}
						</CardHeader>
						<CardBody className='text-center'>
							<Typography variant='h4' color='blue-gray' className='mb-2'>
								{latestItem.name}
							</Typography>
							<Typography color='blue-gray' className='font-medium' textGradient>
								{latestItem.description}
							</Typography>
						</CardBody>
						<CardFooter className='flex justify-center gap-7 pt-2'>
							<Tooltip content='Like'>
								<Typography as='a' href='#facebook' variant='lead' color='blue' textGradient>
									<i className='fab fa-facebook' />
								</Typography>
							</Tooltip>
							<Tooltip content='Follow'>
								<Typography as='a' href='#twitter' variant='lead' color='light-blue' textGradient>
									<i className='fab fa-twitter' />
								</Typography>
							</Tooltip>
							<Tooltip content='Follow'>
								<Typography as='a' href='#instagram' variant='lead' color='purple' textGradient>
									<i className='fab fa-instagram' />
								</Typography>
							</Tooltip>
						</CardFooter>
					</Card>
				) : (
					<p className='text-center text-xl text-gray-600'>More coming</p>
				)}
			</div>
			<a
				href='past-announcements'
				className='inline-flex justify-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-sky-600 hover:bg-sky-700 hover:translate-x-2 duration-500'
			>
				More News
			</a>
		</div>
	)
}

export default ThisWeek
