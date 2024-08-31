import { Card, CardBody, Typography, Avatar } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { backend_url } from '../../utils/constants'

function ComingSoon() {
	const [comingSoon, setComingSoon] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchAllComingSoon = async () => {
			try {
				const res = await axios.get(`${backend_url}/ComingSoon`)
				setComingSoon(res.data)
				setLoading(false) // Set loading to false after data is fetched
			} catch (err) {
				console.log(err)
				setLoading(false) // Also set loading to false in case of error
			}
		}
		fetchAllComingSoon()
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
			<Card className='w-full'>
				<CardBody>
					<div className='mb-4 flex items-center justify-between'>
						<Typography
							as='a'
							href='/FaceToFaceGuests'
							variant='small'
							color='blue'
							className='font-bold'
						>
							View all
						</Typography>
					</div>
					<div className='divide-y divide-gray-200'>
						{comingSoon.length > 0 ? (
							comingSoon.slice(-4).map(({ name, description, image_url }, index) => (
								<div key={index} className='flex items-center justify-between pb-3 pt-3 last:pb-0'>
									<div className='flex items-center gap-x-3'>
										<Avatar size='xl' src={image_url} alt={name} />
										<div>
											<Typography color='blue-gray' variant='h6'>
												{name}
											</Typography>
											<Typography variant='small' color='gray' className='text-left'>
												{description}
											</Typography>
										</div>
									</div>
								</div>
							))
						) : (
							<p className='text-center text-xl text-gray-600'>More coming</p>
						)}
					</div>
				</CardBody>
			</Card>
		</div>
	)
}

export default ComingSoon
