import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from '@material-tailwind/react'

export function CardWithLink() {
	return (
		<Card className='mt-6 '>
			<CardBody>
				<Typography variant='h5' color='blue-gray' className='mb-2'>
					Broadcasting from the St. Clair College Mediaplex in Downtown Windsor
				</Typography>
				<Typography>
					We are grateful for the support and services of St. Clair College that
					provides the facilities and student talent to make this community show
					possible
				</Typography>
			</CardBody>
			<CardFooter className='pt-0'>
				<a
					href='https://www.stclaircollege.ca/programs/locations/mediaplex '
					className='inline-block'
					target='_blank'
				>
					<Button size='sm' variant='text' className='flex items-center gap-2'>
						Learn More
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							className='h-4 w-4'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
							/>
						</svg>
					</Button>
				</a>
			</CardFooter>
		</Card>
	)
}
