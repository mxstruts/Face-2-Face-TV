import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react'

const API_KEY = 'AIzaSyDuuXL92oz5NIDjWnVVJBOz4u-OLT7Lqfw'
const CHANNEL_ID = 'UCPkBgwSfWVLUrLfWieEASPw' // "Face to Face" YouTube channel ID

export default function Highlights() {
	const [videos, setVideos] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const response = await fetch(
					`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=10`
				)
				const data = await response.json()
				setVideos(data.items)
				setLoading(false) // Set loading to false after data is fetched
			} catch (error) {
				console.error('Error fetching YouTube videos:', error)
				setLoading(false) // Set loading to false in case of error
			}
		}
		fetchVideos()
	}, [])

	const handleCardClick = videoId => {
		window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')
	}

	return (
		<div className='min-h-screen bg-gray-100 p-8'>
			<Typography variant='h2' color='blue-gray' className='text-center mb-12'>
				Highlights
			</Typography>
			{loading ? (
				<div className='flex justify-center items-center h-64'>
					<div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-gray-200'></div>
				</div>
			) : videos.length === 0 ? (
				<div className='flex justify-center items-center h-64'>
					<Typography variant='h5' color='blue-gray'>
						Nothing found
					</Typography>
				</div>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
					{videos.map(({ id, snippet }) => (
						<Card
							key={id.videoId}
							className='cursor-pointer shadow-lg transform transition-transform hover:scale-105'
							onClick={() => handleCardClick(id.videoId)}
						>
							<CardHeader floated={false} className='h-64 overflow-hidden'>
								<iframe
									className='w-full h-full'
									src={`https://www.youtube.com/embed/${id.videoId}`}
									title={snippet.title}
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
								></iframe>
							</CardHeader>
							<CardBody className='text-center'>
								<Typography variant='h5' color='blue-gray' className='mb-2'>
									{snippet.title}
								</Typography>
							</CardBody>
						</Card>
					))}
				</div>
			)}
		</div>
	)
}
