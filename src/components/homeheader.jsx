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
				<h1 className='animate-bounce mb-10 text-5xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>
					Face 2 Face TV
				</h1>
				<p className='mb-10 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48'>
					John Fairley <br /> Season 23
				</p>

				<div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0'>
					<a
						href='giving'
						className='inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-sky-600 focus:ring-4 focus:ring-gray-400 hover:scale-110 duration-300'
					>
						Donate
					</a>

					<a
						href='get-involved'
						className='inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-sky-600 focus:ring-4 focus:ring-gray-40 hover:scale-110 duration-300'
					>
						Watch Last Episode
					</a>
				</div>
			</div>
		</section>
	)
}

export default HomeHeader
