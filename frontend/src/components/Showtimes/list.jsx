import {
	List,
	ListItem,
	ListItemSuffix,
	Chip,
	Card,
} from '@material-tailwind/react'

export function ListWithBadge() {
	return (
		<Card className='mt-3 md:w-1/2'>
			<List>
				<ListItem>
					Monday
					<ListItemSuffix>
						<Chip
							value='8:30PM'
							variant='ghost'
							size='lg'
							className='rounded-full'
						/>
					</ListItemSuffix>
				</ListItem>
				<ListItem>
					Tuesday
					<ListItemSuffix>
						<Chip
							value='6PM & 9:30PM'
							variant='ghost'
							size='lg'
							className='rounded-full'
						/>
					</ListItemSuffix>
				</ListItem>
				<ListItem>
					Wednesday
					<ListItemSuffix>
						<Chip
							value='6:30PM'
							variant='ghost'
							size='lg'
							className='rounded-full'
						/>
					</ListItemSuffix>
				</ListItem>
				<ListItem>
					Thursday
					<ListItemSuffix>
						<Chip
							value='10:30AM'
							variant='ghost'
							size='lg'
							className='rounded-full'
						/>
					</ListItemSuffix>
				</ListItem>
				<ListItem>
					Saturday
					<ListItemSuffix>
						<Chip
							value='6PM'
							variant='ghost'
							size='lg'
							className='rounded-full'
						/>
					</ListItemSuffix>
				</ListItem>
				<ListItem>
					Sunday
					<ListItemSuffix>
						<Chip
							value='Noon & 7:30PM'
							variant='ghost'
							size='lg'
							className='rounded-full'
						/>
					</ListItemSuffix>
				</ListItem>
			</List>
		</Card>
	)
}
