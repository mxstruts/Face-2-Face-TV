'use client'

import React from 'react'
import { Navbar, Collapse, Typography, IconButton } from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function NavList() {
	return (
		<ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 '>
			<Typography as='li' variant='paragraph' color='blue-gray' className='p-1 font-bold'>
				<a href='/' className='flex items-center hover:text-blue-500 transition-colors'>
					Home
				</a>
			</Typography>
			<Typography as='li' variant='paragraph' color='blue-gray' className='p-1 font-bold'>
				<a
					href='/FaceToFaceGuests'
					className='flex items-center hover:text-blue-500 transition-colors'
				>
					Face To Face Guests
				</a>
			</Typography>
			<Typography as='li' variant='paragraph' color='blue-gray' className='p-1 font-bold'>
				<a
					href='/NurseOfTheYear'
					className='flex items-center hover:text-blue-500 transition-colors'
				>
					Nurse of the Year
				</a>
			</Typography>
			<Typography as='li' variant='paragraph' color='blue-gray' className='p-1 font-bold'>
				<a href='/Showtimes' className='flex items-center hover:text-blue-500 transition-colors'>
					Showtimes
				</a>
			</Typography>
			<Typography as='li' variant='paragraph' color='blue-gray' className='p-1 font-bold'>
				<a href='/Hospice' className='flex items-center hover:text-blue-500 transition-colors'>
					Hospice
				</a>
			</Typography>
			<Typography as='li' variant='paragraph' color='blue-gray' className='p-1 font-bold'>
				<a href='/Highlights' className='flex items-center hover:text-blue-500 transition-colors'>
					Highlights
				</a>
			</Typography>
		</ul>
	)
}

export function NavbarSimple() {
	const [openNav, setOpenNav] = React.useState(false)

	const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false)

	React.useEffect(() => {
		window.addEventListener('resize', handleWindowResize)

		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	}, [])

	return (
		<Navbar className='mx-auto px-6 py-3 mt-2 mb-2  shadow-md'>
			<div className='flex items-center justify-between text-blue-gray-900'>
				{/* <Typography
					as='a'
					href='/'
					variant='h6'
					className='mr-4 cursor-pointer py-1.5'
				>
					F2F TV
				</Typography> */}
				<a href='/' className='inline-block'>
					<img src='/logo.png' width={68} />
				</a>{' '}
				<div className='hidden lg:block '>
					<NavList />
				</div>
				<IconButton
					variant='text'
					className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<XMarkIcon className='h-6 w-6' strokeWidth={2} />
					) : (
						<Bars3Icon className='h-6 w-6' strokeWidth={2} />
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</Navbar>
	)
}
