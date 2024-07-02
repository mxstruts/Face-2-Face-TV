'use client'
import { CardWithLink } from '../components/Home/broadcast'
import HomeHeader from '../components/Home/homeheader'
import ContentSection16 from '../components/Home/newsection'
import ThisWeek from '../components/All/ThisWeek'
import FacebookFeed from '../components/FacebookFeed'
import ComingSoon from '../components/All/ComingSoon'

function Home() {
	return (
		<div className='space-y-5'>
			<HomeHeader />
			<div className='flex flex-col  md:flex-row space-y-4 sm:space-y-0 md:space-x-4'>
				<div className='w-full sm:w-1/2 flex justify-center'>
					<div className='max-w-md mx-auto'>
						<h2 className='text-2xl font-bold text-gray-900 text-center my-7'>Coming soon:</h2>
						<ComingSoon />
						<FacebookFeed />
					</div>
				</div>
				<div className='w-full sm:w-1/2 flex justify-center'>
					<div className='max-w-md mx-auto'>
						<h2 className='text-2xl font-bold  text-gray-900 dark:text-white my-7 '>
							This Week On Face To Face:
						</h2>
						<ThisWeek />
						<CardWithLink />
					</div>
				</div>
			</div>
			<ContentSection16 />
		</div>
	)
}

export default Home
