'use client'
import { CardWithLink } from '../components/Home/broadcast'
import { TimelineWithAvatar } from '../components/Home/comingsoon'
import HomeHeader from '../components/Home/homeheader'
import ContentSection16 from '../components/Home/newsection'
import { ProfileCard } from '../components/Home/thisweek'

function Home() {
	return (
		<div className='space-y-5'>
			<HomeHeader />
			<div className='flex flex-col  md:flex-row space-y-4 sm:space-y-0 md:space-x-4'>
				<div className='w-full sm:w-1/2 flex justify-center'>
					<div className='max-w-md mx-auto'>
						<TimelineWithAvatar />
					</div>
				</div>
				<div className='w-full sm:w-1/2 flex justify-center'>
					<div className='max-w-md mx-auto'>
						<ProfileCard />
						<CardWithLink />
					</div>
				</div>
			</div>
			<ContentSection16 />
		</div>
	)
}

export default Home
