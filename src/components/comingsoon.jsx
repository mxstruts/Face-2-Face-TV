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

export function TimelineWithAvatar() {
	return (
		<div className='mx-auto text-left'>
			<h2 className='text-2xl font-bold text-gray-900 text-center my-7'>
				Coming soon
			</h2>
			<Timeline>
				<TimelineItem>
					<TimelineConnector />
					<TimelineHeader>
						<TimelineIcon className='p-0'>
							<Avatar
								size='xl'
								src='https://docs.material-tailwind.com/img/team-1.jpg'
								alt='user 1'
								withBorder
							/>
						</TimelineIcon>
						<Typography variant='h5' color='blue-gray'>
							Chef: John Kukucka
						</Typography>
					</TimelineHeader>
					<TimelineBody className='pb-8'>
						<Typography color='gary' className='font-normal text-gray-600'>
							The key to more success is to have a lot of pillows. Put it this
							way, it took me twenty five years to get these plants, twenty five
							years of blood sweat and tears, and I&apos;m never giving up,
							I&apos;m just getting started. I&apos;m up to something. Fan luv.
						</Typography>
					</TimelineBody>
				</TimelineItem>
				<TimelineItem>
					<TimelineConnector />
					<TimelineHeader>
						<TimelineIcon className='p-0'>
							<Avatar
								size='xl'
								src='https://docs.material-tailwind.com/img/team-2.jpg'
								alt='user 2'
								withBorder
							/>
						</TimelineIcon>
						<Typography variant='h5' color='blue-gray'>
							Chef: Vince Del Duca
						</Typography>
					</TimelineHeader>
					<TimelineBody className='pb-8'>
						<Typography color='gary' className='font-normal text-gray-600'>
							The key to more success is to have a lot of pillows. Put it this
							way, it took me twenty five years to get these plants, twenty five
							years of blood sweat and tears, and I&apos;m never giving up,
							I&apos;m just getting started. I&apos;m up to something. Fan luv.
						</Typography>
					</TimelineBody>
				</TimelineItem>
				<TimelineItem>
					<TimelineHeader>
						<TimelineIcon className='p-0'>
							<Avatar
								size='xl'
								src='https://docs.material-tailwind.com/img/team-3.jpg'
								alt='user 3'
								withBorder
							/>
						</TimelineIcon>
						<Typography variant='h5' color='blue-gray'>
							Photo Journalist: Nick Brancaccio
						</Typography>
					</TimelineHeader>
					<TimelineBody>
						<Typography color='gary' className='font-normal text-gray-600'>
							The key to more success is to have a lot of pillows. Put it this
							way, it took me twenty five years to get these plants, twenty five
							years of blood sweat and tears, and I&apos;m never giving up,
							I&apos;m just getting started. I&apos;m up to something. Fan luv.
						</Typography>
					</TimelineBody>
				</TimelineItem>
			</Timeline>
		</div>
	)
}
