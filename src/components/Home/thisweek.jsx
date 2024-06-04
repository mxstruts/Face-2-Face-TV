import { useState, useEffect } from 'react'
import GlobalApi from '../../GlobalApi'
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Tooltip,
} from '@material-tailwind/react'

function ProfileCardItem({ name, description, avatar }) {
	return (
		<Card>
			<CardHeader floated={false}>
				{avatar ? (
					<img src={avatar} alt={`${name}'s avatar`} />
				) : (
					<div className='w-full h-48 bg-gray-200 flex items-center justify-center'>
						<span>No Image</span>
					</div>
				)}
			</CardHeader>
			<CardBody className='text-center'>
				<Typography variant='h4' color='blue-gray' className='mb-2'>
					{name}
				</Typography>
				<Typography color='blue-gray' className='font-medium' textGradient>
					{description}
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
	)
}

export function ProfileCard() {
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
			}
		} catch (error) {
			console.error("Failed to fetch this week's data:", error)
		}
	}

	return (
		<>
			<h2 className='text-2xl font-bold text-gray-900 text-center my-7'>
				This Week On Face To Face:
			</h2>
			{latestItem ? (
				<ProfileCardItem
					name={latestItem.name}
					description={latestItem.description}
					avatar={latestItem.picture?.url} // Added optional chaining
				/>
			) : (
				<p className='text-center'>No items available</p>
			)}
		</>
	)
}
