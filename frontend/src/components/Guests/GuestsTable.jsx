import { Card, Typography } from '@material-tailwind/react'

const TABLE_HEAD = ['Name', 'Role']

const TABLE_ROWS = [
	{ Name: 'Marty Adler', Role: 'Local Media Personality' },
	{ Name: 'Ed Agnew', Role: 'Grant Coordinator City of Windsor' },
	{ Name: 'Remo and Renaldo Agostino', Role: 'The Boom Boom Room' },
	{ Name: 'Renaldo Agostino', Role: 'Windsor City Councillor' },
	{ Name: 'Mike Akpata', Role: 'Senior Constable Windsor Police Services' },
	{ Name: 'His Excellency Rafael Alfaro', Role: 'El Salvador' },
	{ Name: 'Keith Andrews', Role: 'Casino Windsor' },
	{
		Name: 'Dr. Bill Anderson',
		Role: 'Director, Cross-Border Institute (CBI) University of Windsor',
	},
	{ Name: 'Franco Angileri', Role: 'Windsor Fashion Police' },
	{ Name: 'Ken Antaya', Role: 'LaSalle Mayor' },
	{ Name: 'Ed Arditti', Role: 'Lawyer' },
	{ Name: 'Tony Azar', Role: 'Raymax Construction' },
	{ Name: 'Tom Bain', Role: 'Essex County Warden' },
	{ Name: 'Jhoan Baluyot', Role: 'Public Relations, Caesars Windsor' },
	{ Name: 'Larry Bannon', Role: 'Hospice Volunteer' },
	{ Name: 'Chantelle Bacon', Role: 'Fight Like Mason Foundation' },
	{ Name: 'Michael Beale', Role: 'Essex Scottish Regiment' },
	{ Name: 'Spike Bell', Role: 'Windsor Photographer' },
	{ Name: 'Steve Bell', Role: 'AM800 Sports' },
	{ Name: 'Chief Jason Bellaire', Role: 'Windsor Police Service' },
	{ Name: 'Marty Beneteau', Role: 'Editor of The Windsor Star' },
	{ Name: 'Sally Bennett', Role: "Alzheimer's Society" },
	{ Name: 'Ty Bilcke', Role: 'Windsor Spitfire' },
	{ Name: 'Steve Biro', Role: 'Award Winning Photographer' },
	{ Name: 'Marc Bondy', Role: 'Mayor of LaSalle' },
	{ Name: 'Ted Boomer', Role: 'Windsor Blues Fest' },
	{ Name: 'Trevor Booth', Role: 'The Drive Magazine' },
	{ Name: 'Rob Bornais', Role: 'Owner Robbie’s Gourmet Sausages' },
	{ Name: 'Rino Bortolin', Role: 'Windsor City Councillor' },
	{ Name: 'Mark Boscariol', Role: 'Downtown Business Owner' },
	{ Name: 'Bob Boughner', Role: 'President Windsor Spitfires' },
	{ Name: 'Fred Bouzide', Role: "Fred's Farm Fresh" },
	{ Name: 'Jane Boyd', Role: 'Former Executive Director, Windsor-Essex Hospice' },
	{ Name: 'Paul Borrelli', Role: 'Windsor City Councillor' },
	{ Name: 'Mark Bradac', Role: "Windsor's Pawn Man" },
	{ Name: 'Mike Bradley', Role: 'Mayor of Sarnia' },
	{ Name: 'Jen Brignall-Strong', Role: 'Host of Tailgate Takeout' },
	{ Name: 'Dave Brister', Role: 'Ward 1 Councillor' },
	{ Name: 'Ed Broadbent', Role: 'M.P. Former NDP Leader' },
	{ Name: 'Steven Brown', Role: 'Fantastic Fathers Community Group' },
	{ Name: 'Arms Bumanlag', Role: 'CTV Windsor/AM800 Personality' },
	{ Name: 'Jeff Burrows', Role: 'Drummer, Tea Party' },
	{ Name: 'Bob Cameron', Role: 'Downtown Windsor Community Collaborative' },
	{ Name: 'Nancy Campana', Role: 'Run for Rocky' },
	{ Name: 'Danielle Campo', Role: 'Para-Olympian Athlete' },
	{ Name: 'Darrin Canniff', Role: 'Chatham-Kent Mayor' },
	{ Name: 'Danny Carvalho', Role: 'Kailua Moon Music, Hawaii' },
	{ Name: 'Nani Carvalho', Role: 'Kailua Moon Music, Hawaii' },
	{ Name: 'Jeff Casey', Role: 'Publisher snapd Windsor' },
	{ Name: 'Dave Cassidy', Role: 'President Unifor Local 444' },
	{ Name: 'David Cassivi', Role: 'Ward 4 Councillor' },
	{ Name: 'Father Paul Charboneau', Role: 'Brentwood Recovery Home' },
	{ Name: 'Elaine Chatwood', Role: 'Windsor Fashion Police' },
	{ Name: 'Dino Chiodo', Role: 'President Unifor Local 444' },
	{ Name: 'Keith Chinnery', Role: 'Program Director CKLW Radio' },
	{ Name: 'Chris Chopik', Role: 'Leamington BIA' },
	{ Name: 'Raymond Chu', Role: 'Downtown BIA' },
	{ Name: 'Adriano Ciotoli', Role: 'Windsor Eats' },
	{ Name: 'Terry Cloutier', Role: 'Community Living Windsor' },
	{ Name: 'Joe Colasanti', Role: "Colasanti's Tropical Gardens" },
	{ Name: 'Onorio Colucci', Role: 'CFO - Treasurer - City Of Windsor' },
	{ Name: 'Joe Comartin', Role: 'M.P., Windsor-St. Clair' },
	{ Name: 'Gino Conte', Role: 'Retired CBC Reporter' },
	{ Name: 'Dave Cooke', Role: 'Former NDP MPP' },
	{ Name: 'Derrick Cornado', Role: "Citizen's Environmental Alliance" },
	{ Name: 'Fabio Costante', Role: 'Windsor City Councillor' },
	{ Name: 'Melanie Coulter', Role: 'Executive Director Windsor-Essex Humane Society' },
	{ Name: 'Linden Crain', Role: 'Host “Coffee With Crainer”' },
	{ Name: 'Jim Crichton', Role: 'News Anchor A-Channel Television' },
	{ Name: 'Debi Croucher', Role: 'Downtown Windsor Business Improvement Association' },
	{ Name: 'Bruce Crozier', Role: 'M.P.P. Essex' },
	{ Name: "Scott D'Amore", Role: 'Impact Wrestling' },
	{ Name: 'Rosanne Danese', Role: 'Metro Editor - The Windsor Star' },
	{ Name: 'Ken Deane', Role: 'Hotel Dieu - Grace Hospital' },
	{ Name: 'Leo De Luca & "Chef Mimmo"', Role: 'Koolini’s Restaurant' },
	{ Name: 'Carol Derbyshire', Role: 'Windsor Essex County Hospice' },
	{ Name: 'Zachery Dereniowski', Role: 'The MD Motivator' },
	{ Name: 'Dennis DesRosier', Role: 'Canadian Auto Analyst' },
	{ Name: 'Melanie Deveau', Role: 'CKLW Radio Personality' },
	{ Name: 'Aldo DiCarlo', Role: 'Mayor, Town of Amherstburg' },
	{ Name: 'Drew Dilkens', Role: 'Mayor, City of Windsor' },
	{ Name: 'Kay Douglas', Role: 'Douglas Marketing Group' },
	{ Name: 'Tony Doucette', Role: 'The Early Shift , CBC Radio' },
	{ Name: 'Lee Anne Doyle', Role: 'Windsor’s Chief Building Official' },
	{ Name: 'Andrew Dowie', Role: 'MPP, Windsor-Tecumseh' },
	{ Name: 'Michael Duben', Role: 'General Manager, City of Windsor' },
	{ Name: 'Michael Duffy', Role: 'Canadian Senator' },
	{ Name: 'Patrick Ducharme', Role: 'Windsor Lawyer' },
	{ Name: 'Leo Dufour', Role: 'Comedian' },
	{ Name: 'Hon. Dwight Duncan', Role: 'M.P.P. Windsor - St. Clair' },
	{ Name: 'Ronn Dunn', Role: 'Windsor Downtown Mission' },
	{ Name: 'Chris Edwards', Role: 'Director DWBIA' },
	{ Name: 'John Elliott', Role: 'City Councillor' },
	{ Name: 'Rob Evans', Role: 'Holiday Inn Select Windsor' },
	{ Name: 'Andrew Faas', Role: 'Author' },
	{ Name: 'Ted Farron', Role: "Farron's Gourmet Butcher Shop" },
	{ Name: 'Richard Farrow', Role: 'CEO of the Farrow Group of Companies' },
	{ Name: 'David Fields', Role: 'Chief of Windsor Fire & Rescue' },
	{ Name: 'Jonathan Foster', Role: 'Windsor Regional Hospital' },
	{ Name: 'Justin Fox', Role: 'St. Clair College' },
	{ Name: 'Patti France', Role: 'President St. Clair College' },
	{ Name: 'Irek Kusmierczyk', Role: 'MP for Windsor-Tecumseh' },
	{ Name: 'Gary Kaschak', Role: 'Ward 8 Councillor' },
	{ Name: 'Terry Sawchuk', Role: 'Hockey Hall of Famer' },
	{ Name: 'Bill Marra', Role: 'President and CEO of Hôtel-Dieu Grace Healthcare' },
	{ Name: 'Sandra Pupatello', Role: 'Former Minister of Economic Development and Trade' },
	{ Name: 'Theresa Marentette', Role: 'CEO of Windsor-Essex County Health Unit' },
	{ Name: 'Lisa Gretzky', Role: 'MPP for Windsor West' },
	{ Name: 'Ron Gaudet', Role: 'CEO of Invest Windsor-Essex' },
	{ Name: 'Yvonne Pilon', Role: 'President and CEO of WEtech Alliance' },
	{ Name: 'Janice Kaffer', Role: 'President and CEO of Hôtel-Dieu Grace Healthcare' },
	{ Name: 'Cheryl Hardcastle', Role: 'Former MP for Windsor-Tecumseh' },
]

export default function GuestsTable() {
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
						{TABLE_ROWS.map(({ Name, Role }, index) => (
							<tr key={Name} className='even:bg-blue-gray-50/50'>
								<td className='p-4'>
									<Typography variant='small' color='blue-gray' className='font-normal'>
										{Name}
									</Typography>
								</td>
								<td className='p-4'>
									<Typography variant='small' color='blue-gray' className='font-normal'>
										{Role}
									</Typography>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Card>
	)
}
