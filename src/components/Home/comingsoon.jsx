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
				Coming soon:
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

						<div className='flex flex-col gap-1'>
							<Typography variant='h6' color='blue-gray'>
								John Kukucka
							</Typography>
							<Typography variant='small' color='gray' className='font-normal'>
								Chef
							</Typography>
						</div>
					</TimelineHeader>
					<TimelineBody className='pb-8'>
						<Typography color='gray' className='font-normal text-gray-600'>
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

						<div className='flex flex-col gap-1'>
							<Typography variant='h6' color='blue-gray'>
								Vince Del Duca
							</Typography>
							<Typography variant='small' color='gray' className='font-normal'>
								Chef
							</Typography>
						</div>
					</TimelineHeader>
					<TimelineBody className='pb-8'>
						<Typography color='gray' className='font-normal text-gray-600'>
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

						<div className='flex flex-col gap-1'>
							<Typography variant='h6' color='blue-gray'>
								Nick Brancaccio
							</Typography>
							<Typography variant='small' color='gray' className='font-normal'>
								Photo Journalist
							</Typography>
						</div>
					</TimelineHeader>
					<TimelineBody>
						<Typography color='gray' className='font-normal text-gray-600'>
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
