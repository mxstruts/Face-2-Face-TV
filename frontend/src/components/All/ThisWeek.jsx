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

function ThisWeek() {
	const [thisWeek, setThisWeek] = useState([])
	const [latestItem, setLatestItem] = useState(null)

	useEffect(() => {
		const fetchAllThisWeek = async () => {
			try {
				const res = await axios.get('http://face-2-face-tv-server.vercel.app/ThisWeek')
				console.log(res)
				setThisWeek(res.data)
				const mostRecentItem = res.data[res.data.length - 1]
				setLatestItem(mostRecentItem)
				console.log(mostRecentItem)
			} catch (err) {
				console.log(err)
			}
		}
		fetchAllThisWeek()
	}, [])
	return (
		<div className='max-w-7xl p-8 m-auto'>
			<div className='flex flex-col md:flex-row mb-8'>
				{latestItem ? (
					<Card>
						<CardHeader floated={false}>
							{latestItem.image_url ? (
								<img
									src={`http://face-2-face-tv-server.vercel.app/uploads/${latestItem.image_url}`}
									alt={latestItem.avatar_url}
								/>
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
					<p className='text-center'>No items available</p>
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
