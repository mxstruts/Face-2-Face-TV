'use client'
import {
	Timeline,
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineBody,
	Typography,
	Avatar,
} from '@material-tailwind/react'

import { useEffect, useState } from 'react'
import axios from 'axios'

function ComingSoon() {
	const [comingSoon, setComingSoon] = useState([])

	useEffect(() => {
		const fetchAllComingSoon = async () => {
			try {
				const res = await axios.get('http://localhost:8800/ComingSoon')
				// console.log(res)
				setComingSoon(res.data)
			} catch (err) {
				console.log(err)
			}
		}
		fetchAllComingSoon()
	}, [])

	return (
		<div className='max-w-7xl p-8 m-auto'>
			<div className='flex flex-col md:flex-row mb-8'>
				<Timeline>
					{comingSoon.slice(-4).map((item, index) => (
						<TimelineItem key={index}>
							<TimelineConnector />
							<TimelineHeader>
								<TimelineIcon className='p-0'>
									{item.image_url ? (
										<Avatar
											size='xl'
											src={`http://localhost:8800/uploads/${item.image_url}`}
											alt={`${item.name}'s avatar`}
											withBorder
										/>
									) : (
										<div className=' bg-gray-200 flex items-center justify-center'>
											<span>No Image</span>
										</div>
									)}
								</TimelineIcon>
								<div className='flex flex-col'>
									<Typography variant='h6' color='blue-gray'>
										{item.name}
									</Typography>
									{/* {item.role && (
										<Typography variant='small' color='#5a5555bc' className='font-medium text-left'>
											{item.role}
										</Typography>
									)} */}
								</div>
							</TimelineHeader>
							<TimelineBody className='pb-5 text-left'>
								<Typography color='gray' className='font-normal text-gray-600'>
									{item.description}
								</Typography>
							</TimelineBody>
						</TimelineItem>
					))}
				</Timeline>
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
export default ComingSoon
