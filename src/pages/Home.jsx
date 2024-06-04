'use client'
import { CardWithLink } from '../components/Home/broadcast'
import { TimelineWithAvatar } from '../components/All/coming-soon'
import HomeHeader from '../components/Home/homeheader'
import ContentSection16 from '../components/Home/newsection'
import { ProfileCard } from '../components/Home/thisweek'
import ComingSoon from '../components/All/ComingSoon'
import ThisWeek from '../components/All/ThisWeek'
import FacebookFeed from '../components/FacebookFeed'

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
						<h5 className='text-2xl font-bold  text-gray-900 dark:text-white my-7 '>
							This Week On Face To Face:
						</h5>
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
