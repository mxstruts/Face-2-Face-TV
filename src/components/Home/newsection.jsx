import { Typography } from '@material-tailwind/react'

export function ContentSection16() {
	return (
		<section>
			<div className='mx-auto max-w-screen-md'>
				<img
					src='/home-3-image.jpg'
					alt='team work'
					className='mb-4 h-[28rem] w-full rounded-xl object-cover'
				/>

				<Typography
					variant='h2'
					color='blue-gray'
					className='my-4 font-black text-4xl !leading-snug'
				>
					Face 2 Face
				</Typography>
				<Typography className='font-normal !text-gray-500'>
					YourTV Windsor on Cogeco Cable is proud to host 23 Seasons of Face to
					Face TV with John Fairley.
					<br />
					<br />
					Since 2000, host and community producer John Fairley has conducted
					over 800 interviews and community conversations which inform,
					enlighten and entertain.
					<br />
					John is a huge advocate and champion for Windsor – Essex County on so
					many levels.
					<br />
					<br />
					Thank you Anna for the invite thank you to the whole Vogue team And I
					From education, community service, to health care, John is involved by
					helping out and making things bigger and better. We celebrate and
					thank John for his volunteer commitment to community television and
					applaud him for utilizing our TV airwaves to enhance and promote local
					charities which keep us all informed on the issues that matter.
				</Typography>
				<Typography
					variant='h2'
					color='blue-gray'
					className='my-4 font-black text-xl !leading-snug'
				>
					Watch Face To Face on YourTV WINDSOR Channels 11 & 700{' '}
				</Typography>
			</div>
		</section>
	)
}

export default ContentSection16
