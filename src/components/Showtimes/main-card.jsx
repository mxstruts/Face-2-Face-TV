import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Avatar,
} from '@material-tailwind/react'

export function BackgroundBlogCard() {
	return (
		<Card
			shadow={false}
			className='relative grid h-[45rem] w-full max-w-full items-end justify-center overflow-hidden text-center mb-3'
		>
			<CardHeader
				floated={false}
				shadow={false}
				color='transparent'
				className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/public/static/images/showtime-img-1.jpg')] bg-cover bg-center"
			>
				<div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50' />
			</CardHeader>
			<CardBody className='relative py-14 px-6 md:px-12'>
				<Typography
					variant='h2'
					color='white'
					className='mb-6 font-medium leading-[1.5]'
				>
					John Fairley
				</Typography>
				<Typography variant='h5' className=' text-gray-400'>
					on
				</Typography>
				<Typography variant='h5' className='mb-4 text-gray-400'>
					YourTV Windsor{' '}
				</Typography>
				<Avatar
					size='xl'
					variant='circular'
					alt='tania andrew'
					className='border-2 border-white'
					src='/your-tv.jpg'
				/>
			</CardBody>
		</Card>
	)
}
