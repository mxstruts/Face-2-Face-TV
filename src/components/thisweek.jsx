import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Tooltip,
} from '@material-tailwind/react'

export function ProfileCard() {
	return (
		<>
			<h2 className='text-2xl font-extrabold text-gray-900 text-center  my-5'>
				This Week On Face To Face
			</h2>
			<Card className='w-96'>
				<CardHeader floated={false}>
					<img
						src='/public/static/images/Rita_Miceli.jpeg'
						alt='profile-picture'
					/>
				</CardHeader>
				<CardBody className='text-center'>
					<Typography variant='h4' color='blue-gray' className='mb-2'>
						Rita Miceli
					</Typography>
					<Typography color='blue-gray' className='font-medium' textGradient>
						Autism Advocate & Educator Author Giaci and Me
					</Typography>
				</CardBody>
				<CardFooter className='flex justify-center gap-7 pt-2'>
					<Tooltip content='Like'>
						<Typography
							as='a'
							href='#facebook'
							variant='lead'
							color='blue'
							textGradient
						>
							<i className='fab fa-facebook' />
						</Typography>
					</Tooltip>
					<Tooltip content='Follow'>
						<Typography
							as='a'
							href='#twitter'
							variant='lead'
							color='light-blue'
							textGradient
						>
							<i className='fab fa-twitter' />
						</Typography>
					</Tooltip>
					<Tooltip content='Follow'>
						<Typography
							as='a'
							href='#instagram'
							variant='lead'
							color='purple'
							textGradient
						>
							<i className='fab fa-instagram' />
						</Typography>
					</Tooltip>
				</CardFooter>
			</Card>
		</>
	)
}
