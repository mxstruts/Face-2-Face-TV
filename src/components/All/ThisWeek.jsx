'use client'
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Tooltip,
} from '@material-tailwind/react'

import { useEffect, useState } from 'react'
import GlobalApi from '../../GlobalApi'

function ThisWeek() {
	const [thisWeek, setThisWeek] = useState([])
	const [latestItem, setLatestItem] = useState(null)

	useEffect(() => {
		getThisWeek()
	}, [])

	const getThisWeek = async () => {
		try {
			const data = await GlobalApi.GetThisWeek()
			if (data && data.thisWeeks && data.thisWeeks.length > 0) {
				const mostRecentItem = data.thisWeeks[data.thisWeeks.length - 1]
				setLatestItem(mostRecentItem)
				console.log(mostRecentItem)
			}
		} catch (error) {
			console.error("Failed to fetch this week's data:", error)
		}
	}

	return (
		<div className='max-w-7xl p-8 m-auto'>
			<h5 className='mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-5 pb-3 '>
				This Week On Face To Face:
			</h5>
			<div className='flex flex-col md:flex-row mb-8'>
				{latestItem ? (
					<Card>
						<CardHeader floated={false}>
							{latestItem.picture ? (
								<img src={latestItem.picture.url} alt={`${latestItem.name}'s avatar`} />
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
