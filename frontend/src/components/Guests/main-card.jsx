import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Tooltip,
} from '@material-tailwind/react'
const data = [
	{
		imageLink: 'Rita_Miceli.jpeg',
	},
	{
		imageLink:
			'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
	},
	{
		imageLink:
			'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
	},
	{
		imageLink:
			'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
	},
	{
		imageLink:
			'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
	},
	{
		imageLink:
			'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
	},
	{
		imageLink: 'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg',
	},
	{
		imageLink: 'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
	},
	{
		imageLink:
			'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
	},
]

export function ProfileCard() {
	return (
		<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
			{data.map(({ imageLink }, index) => (
				<div key={index}>
					<img
						className='h-40 w-full max-w-full rounded-lg object-cover object-center'
						src={imageLink}
						alt='gallery-photo'
					/>
				</div>
			))}
		</div>
	)
}
