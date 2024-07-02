import { useEffect } from 'react'

function FacebookFeed() {
	useEffect(() => {
		if (window.FB) {
			window.FB.XFBML.parse()
		}
	}, [])
	return (
		<>
			<div
				className='fb-page'
				data-href='https://www.facebook.com/p/Face-To-Face-TV-100063623527699/'
				data-tabs='timeline'
				data-width='380'
				data-small-header='true'
				data-adapt-container-width='false'
				data-hide-cover='true'
				data-show-facepile='false'
			>
				<blockquote
					cite='https://www.facebook.com/p/Face-To-Face-TV-100063623527699/'
					className='fb-xfbml-parse-ignore'
				>
					<a href='https://www.facebook.com/KnobbysKids/'>Face 2 Face TV</a>
				</blockquote>
			</div>
		</>
	)
}
export default FacebookFeed
