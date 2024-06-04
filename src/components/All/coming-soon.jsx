import { useState, useEffect } from 'react'
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
import GlobalApi from '../../GlobalApi'

// Separate component to render each Timeline item
function TimelineItemWithAvatar({ index, role, name, description, avatar }) {
	return (
		<TimelineItem key={index}>
			<TimelineConnector />
			<TimelineHeader>
				<TimelineIcon className='p-0'>
					{avatar ? (
						<Avatar size='xl' src={avatar} alt={`${name}'s avatar`} withBorder />
					) : (
						<div className=' bg-gray-200 flex items-center justify-center'>
							<span>No Image</span>
						</div>
					)}
				</TimelineIcon>
				<div className='flex flex-col gap-1'>
					<Typography variant='h6' color='blue-gray'>
						{name}
					</Typography>
					{role && (
						<Typography variant='small' color='gray' className='font-normal'>
							{role}
						</Typography>
					)}
				</div>
			</TimelineHeader>
			<TimelineBody className='pb-8'>
				<Typography color='gray' className='font-normal text-gray-600'>
					{description}
				</Typography>
			</TimelineBody>
		</TimelineItem>
	)
}

export function TimelineWithAvatar() {
	const [comingSoon, setComingSoon] = useState([])

	useEffect(() => {
		getComingSoon()
	}, [])

	const getComingSoon = async () => {
		try {
			const data = await GlobalApi.GetComingSoon()
			if (data && data.comingSoons) {
				setComingSoon(data.comingSoons.reverse().slice(0, 4))
			}
		} catch (error) {
			console.error('Failed to fetch coming soon data:', error)
		}
	}

	return (
		<div className='mx-auto text-left'>
			<Timeline>
				{comingSoon.map((item, index) => (
					<TimelineItemWithAvatar
						key={item.id}
						index={index}
						role={item.role}
						name={item.name}
						description={item.description}
						avatar={item.avatar ? item.avatar.url : null}
					/>
				))}
			</Timeline>
		</div>
	)
}
