import { Card, CardBody, Typography, Button } from '@material-tailwind/react'

function Hospice() {
	return (
		<div className='max-w-7xl p-8 m-auto'>
			<Card className='w-full mb-8'>
				<CardBody>
					<Typography variant='h4' color='blue-gray' className='mb-4'>
						Hospice Face to Face Campaign
					</Typography>
					<Typography variant='h5' color='blue-gray' className='mb-4'>
						Thank you Windsor-Essex!
					</Typography>
					<Typography color='gray' className='mb-4'>
						We couldn’t be more excited with your support of the 21st Annual Face to Face Campaign!
					</Typography>
					<Typography variant='h5' color='blue-gray' className='mb-4'>
						What is Face to Face?
					</Typography>
					<Typography color='gray' className='mb-4'>
						The Face to Face Campaign raises funds for the Fairley Family Transportation Program
					</Typography>
					<Typography color='gray' className='mb-4'>
						Rides to medical appointments for Hospice patients and families across our community.
					</Typography>
					<Typography color='gray' className='mb-4'>
						The G.E.N.I.E. Program - Granting Exceptional N’ Impactful Experiences!
					</Typography>
					<Typography color='gray' className='mb-4'>
						Last year, we were excited to kick off a new, impactful addition to the program. Thanks
						to our partners at the County of Essex and Essex-Windsor EMS, this new program allows us
						to provide safe and accessible rides to patients receiving Hospice care, whether in our
						Hospice Residences or in their own home, who want to request special trips or outings –
						creating a memorable experience for them and their loved ones.
					</Typography>
					<Typography variant='h5' color='blue-gray' className='mb-4'>
						How Can YOU Help?
					</Typography>
					<Typography color='gray' className='mb-4'>
						<a href='#' className='text-blue-500 underline'>
							Click Here
						</a>{' '}
						to download a pledge form and collect pledges from family and friends as a Face to Face
						Canvasser.
					</Typography>
					<Typography color='gray' className='mb-4'>
						DONATE online, through the mail, or in support of a Face to Face Canvasser. Spread the
						word about Face to Face!
					</Typography>
					<Typography color='gray' className='mb-4'>
						It is thanks to friends and partners like you that we have been able to touch the lives
						of so many in our community!
					</Typography>
					<Typography variant='h5' color='blue-gray' className='mb-4'>
						Questions?
					</Typography>
					<Typography color='gray' className='mb-4'>
						A member of our Hospice team would be happy to assist you!
					</Typography>
					<Typography color='gray' className='mb-4'>
						Give us a call at (519) 251-2594 or contact us via email at{' '}
						<a href='mailto:soverton@thehospice.ca' className='text-blue-500 underline'>
							soverton@thehospice.ca
						</a>
						.
					</Typography>
				</CardBody>
			</Card>
			<Card className='w-full'>
				<CardBody>
					<Typography variant='h5' color='blue-gray' className='mb-4'>
						About Our Hospice
					</Typography>
					<Typography color='gray' className='mb-4'>
						Founded to provide compassionate, clinical, end-of-life care, The Hospice of Windsor and
						Essex County has been caring for our community since 1979. Our Hospice believes in
						equitable access to care for all. We provide specialized wrap-around services to adults,
						children, and their caregivers, in the setting of their choice – whether it be in our
						Residences or in their home. With only partial government funding, it has been through
						the generous support of our volunteers and our community that we have continued to
						provide memorable care, meeting the physical, emotional, and spiritual needs of patients
						and their loved ones.
					</Typography>
				</CardBody>
			</Card>
		</div>
	)
}

export default Hospice
