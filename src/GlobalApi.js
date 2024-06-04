import { avatar } from '@material-tailwind/react'
import { gql, request } from 'graphql-request'

const MASTER_URL = 'https://api-ca-central-1.hygraph.com/v2/cluznoumc17fl08w4ln0esf9q/master'

const GetComingSoon = async () => {
	const query = gql`
		query ComingSoons {
			comingSoons {
				createdAt
				description
				id
				avatar {
					id
					url
				}
				name
				role
				publishedAt
				updatedAt
			}
		}
	`
	const result = await request(MASTER_URL, query)
	return result
}

const GetThisWeek = async () => {
	const query = gql`
		query ThisWeeks {
			thisWeeks {
				createdAt
				description
				id
				picture {
					id
					url
				}
				name
				publishedAt
				updatedAt
			}
		}
	`
	const result = await request(MASTER_URL, query)
	return result
}

const AddComingSoon = async (name, description, role, picture) => {
	const query = gql`
		mutation createComingSoon {
			createComingSoon(data: { name: "${name}", description: "${description}", role: "${role}", picture: { create: { url: "${picture}" } }) {
				name
				description
				role
				avatar {
					id
					url
				}
			}
			publishManyComingSoons(to: PUBLISHED, where: { name: "${name}" }) {
				count
			}
		}
	`
	try {
		const result = await request(MASTER_URL, query, {
			name,
			description,
			role,
			avatar,
		})
		return result
	} catch (error) {
		console.error('Error adding Coming Soon:', error)
		throw error
	}
}

const AddThisWeek = async (name, description) => {
	const query = gql`
	mutation createThisWeek {
		createThisWeek(data: { name: "${name}", description: "${description}" }) {
			name
			description
		}
		publishManyThisWeeks(to: PUBLISHED, where: { name: "${name}" }) {
			count
		}
	}
	`
	try {
		const result = await request(MASTER_URL, query, {
			name,
			description,
		})
		return result
	} catch (error) {
		console.error('Error adding This Week Event:', error)
		throw error
	}
}
const DeleteComingSoon = async id => {
	const query = gql`
	mutation DeleteComingSoon {
		deleteComingSoonswhere: {id: "${id}"}) {
			id	
	  }
	}
	`

	try {
		const result = await request(MASTER_URL, query, { id })
		return result
	} catch (error) {
		console.error('Error deleting news:', error)
		throw error
	}
}

const DeleteThisWeek = async id => {
	const query = gql`
	mutation DeleteThisWeek {
		deleteThisWeek(where: {id: "${id}"}) {
			id	
	  }
	}
	`

	try {
		const result = await request(MASTER_URL, query, { id })
		return result
	} catch (error) {
		console.error('Error deleting event:', error)
		throw error
	}
}

export default {
	GetComingSoon,
	GetThisWeek,
	DeleteThisWeek,
	DeleteComingSoon,
	AddThisWeek,
	AddComingSoon,
}
