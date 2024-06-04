import { useState, useEffect } from 'react'
import GlobalApi from '../GlobalApi'
import { TimelineWithAvatar } from '../components/All/coming-soon'
import { ProfileCard } from '../components/Home/thisweek'
import AddThisWeek from '../components/All/AddThisWeek'
import ThisWeek from './../components/All/ThisWeek'
import AddComingSoonForm from './../components/All/AddComingSoonForm'

function Admin() {
	const [thisWeek, setThisWeek] = useState([])
	const [comingSoon, setComingSoon] = useState([])

	useEffect(() => {
		getThisWeek()
		getComingSoon()
	}, [])
	const getThisWeek = () => {
		GlobalApi.GetThisWeek().then(data => {
			console.log(data)
			setThisWeek(data.newsFeed)
		})
	}
	const getComingSoon = () => {
		GlobalApi.GetComingSoon().then(data => {
			console.log(data)
			setComingSoon(data.events)
		})
	}

	const deleteThisWeek = id => {
		GlobalApi.DeleteThisWeek(id).then(data => {
			console.log(data)
			getThisWeek()
		})
	}
	const deleteComingSoon = id => {
		GlobalApi.DeleteComingSoon(id).then(data => {
			console.log(data)
			getComingSoon()
		})
	}

	const onRemoveThisWeek = id => {
		const isConfirmed = window.confirm('Are you sure you want to delete this post?')
		if (isConfirmed) {
			setThisWeek(prev => prev.filter(item => item.id !== id))
			deleteThisWeek(id)
		}
	}
	const onRemoveComingSoon = id => {
		const isConfirmed = window.confirm('Are you sure you want to delete this post?')
		if (isConfirmed) {
			setComingSoon(prev => prev.filter(item => item.id !== id))
			deleteComingSoon(id)
		}
	}

	return (
		<div className='max-w-7xl p-5 lg:p-8 mx-auto '>
			<div className='flex gap-3 mb-3'>
				<AddComingSoonForm />
				<AddThisWeek />
			</div>
			<div className='flex pt-5 flex-col md:flex-row'>
				<div className='md:w-1/2'>
					<p className='text-2xl text-center'>Delete Old This Week's:</p>
					<div>
						<ul>{}</ul>
					</div>
				</div>
				<div className='md:w-1/2'>
					<p className='text-2xl text-center'>Delete Old Coming Soon's:</p>
					<div>
						<ul></ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Admin
