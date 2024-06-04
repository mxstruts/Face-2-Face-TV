import { Card, Typography } from '@material-tailwind/react'

const TABLE_HEAD = ['Winner', 'Organization', 'Year']

const TABLE_ROWS = [
	{
		Year: 2023,
		Winner: 'Mary Cunningham',
		Organization: 'Windsor Regional Hospital',
	},
	{
		Year: 2022,
		Winner: 'Retired Nurses of Windsor-Essex Who Came Out of Retirement to Serve',
		Organization: 'In recognition of their heroic service during COVID-19 Pandemic',
	},
	{
		Year: 2021,
		Winner: 'All of the Nurses of Windsor-Essex',
		Organization: 'In recognition of their heroic service during COVID-19 Pandemic',
	},
	{
		Year: 2020,
		Winner: 'All of the Nurses of Windsor-Essex',
		Organization: 'In recognition of their heroic service during COVID-19 Pandemic',
	},
	{
		Year: 2019,
		Winner: 'Barb Deter',
		Organization: 'Windsor Essex County Health Unit',
	},
	{
		Year: 2018,
		Winner: 'Douglas Mercer',
		Organization: 'Windsor Regional Hospital',
	},
	{
		Year: 2017,
		Winner: 'Francoise Stanutz',
		Organization: 'The Hospice of Windsor-Essex County',
	},
	{
		Year: 2016,
		Winner: 'Marylynn Holzel',
		Organization: 'Windsor Regional Hospital',
	},
	{
		Year: 2015,
		Winner: 'Rita Di Biase',
		Organization: 'Windsor Regional Hospital',
	},
	{
		Year: 2014,
		Winner: 'Eva Lewis',
		Organization: 'Leamington District Memorial Hospital',
	},
	{
		Year: 2013,
		Winner: 'Shauna Carter',
		Organization: 'Hotel-Dieu Grace Hospital',
	},
	{
		Year: 2012,
		Winner: 'Ursula DeBono',
		Organization: 'Windsor Regional Hospital',
	},
	{
		Year: 2011,
		Winner: 'Carole Gill',
		Organization: 'The Hospice of Windsor and Essex County',
	},
	{
		Year: 2010,
		Winner: 'Terry Johnston',
		Organization: 'Windsor Regional Cancer Clinic',
	},
	{
		Year: 2009,
		Winner: 'Georgina Kelly',
		Organization: 'Hotel-Dieu Grace Hospital',
	},
	{
		Year: 2008,
		Winner: 'Linda Moroun',
		Organization: 'Windsor Regional Hospital',
	},
]

export function DefaultTable() {
	return (
		<Card className='h-full w-full'>
			<div className='overflow-x-auto'>
				<table className='w-full min-w-max table-auto text-left'>
					<thead>
						<tr>
							{TABLE_HEAD.map(head => (
								<th key={head} className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
									<Typography
										variant='small'
										color='blue-gray'
										className='font-normal leading-none opacity-70'
									>
										{head}
									</Typography>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{TABLE_ROWS.map(({ Year, Winner, Organization }, index) => {
							const isLast = index === TABLE_ROWS.length - 1
							const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

							return (
								<tr key={Winner}>
									<td className={classes}>
										<Typography variant='small' color='blue-gray' className='font-normal'>
											{Winner}
										</Typography>
									</td>
									<td className={classes}>
										<Typography variant='small' color='blue-gray' className='font-normal'>
											{Organization}
										</Typography>
									</td>
									<td className={classes}>
										<Typography variant='small' color='blue-gray' className='font-normal'>
											{Year}
										</Typography>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</Card>
	)
}
export default DefaultTable
