'use client'

import HomeHeader from '../components/Home/homeheader'
import { ListWithBadge } from '../components/Showtimes/list'
import { BackgroundBlogCard } from '../components/Showtimes/main-card'
import { CardWithLink } from '../components/Showtimes/yt-card'

function Showtimes() {
	return (
		<>
			{/* <HomeHeader /> */}
			<BackgroundBlogCard />
			<div className='w-full flex space-x-3 flex-col md:flex-row '>
				<ListWithBadge />
				<CardWithLink />
			</div>
		</>
	)
}

export default Showtimes
