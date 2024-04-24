'use client'

function HomeHeader() {
	const myStyle = {
		backgroundImage: 'url(/static/images/home-1-image.jpg)',
		backgroundSize: 'cover',
	}
	return (
		<section
			className='bg-center object-cover bg-gray-500 bg-blend-multiply rounded-xl'
			style={myStyle}
		>
			<div className='px-6 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
				<h1 className='animate-bounce mb-10 text-5xl font-extrabold tracking-tight leading-none text-white  md:text-5xl lg:text-6xl'>
					Face 2 Face TV
				</h1>
				<h2 className='mb-6 text-lg font-bold text-gray-300 lg:text-2xl sm:px-16 lg:px-48'>
					with <br />
					John Fairley <br /> Season 23
				</h2>

				<div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 '>
					<a
						href='giving'
						className='inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-black hover:bg-sky-600 focus:ring-4 focus:ring-gray-400 hover:scale-110 duration-300 bg-blue-gray-600 shadow-2xl'
					>
						Contact
					</a>

					<a
						href='get-involved'
						className='inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-sky-600 focus:ring-4 focus:ring-gray-40 hover:scale-110 duration-300 bg-red-500'
					>
						Watch Last Episode
					</a>
				</div>
			</div>
		</section>
	)
}

export default HomeHeader
