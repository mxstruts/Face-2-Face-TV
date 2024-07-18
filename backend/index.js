import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import Client from 'ssh2-sftp-client'

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const db = mysql.createConnection({
	host: '93.183.69.97',
	user: 'root',
	password: 'Bullshit128',
	database: 'face-2-face-tv',
	port: 3306,
})

const sftp = new Client()

const storage = multer.memoryStorage() // Store files in memory
const upload = multer({ storage: storage })

app.use(express.json())
app.use(cors({ origin: '*' }))

app.get('/', (req, res) => {
	res.json('Hello World')
})

app.get('/ComingSoon', (req, res) => {
	const q = 'SELECT * FROM coming_soon'
	db.query(q, (err, data) => {
		if (err) return res.json(err)
		return res.json(data)
	})
})

app.get('/ThisWeek', (req, res) => {
	const q = 'SELECT * FROM this_week'
	db.query(q, (err, data) => {
		if (err) return res.json(err)
		return res.json(data)
	})
})

app.get('/ComingSoon/:id', (req, res) => {
	const itemId = req.params.id
	const q = 'SELECT * FROM coming_soon WHERE id = ?'
	db.query(q, [itemId], (err, data) => {
		if (err) return res.status(500).json(err)
		if (data.length === 0) return res.status(404).json({ message: 'Item not found' })

		const item = data[0]
		res.json(item)
	})
})

app.get('/ThisWeek/:id', (req, res) => {
	const itemId = req.params.id
	const q = 'SELECT * FROM this_week WHERE id = ?'
	db.query(q, [itemId], (err, data) => {
		if (err) return res.status(500).json(err)
		if (data.length === 0) return res.status(404).json({ message: 'Item not found' })

		const item = data[0]
		res.json(item)
	})
})

app.post('/ComingSoon', upload.single('image'), async (req, res) => {
	const { name, description, image_alt } = req.body
	let image_url = null

	if (req.file) {
		const filename = `${Date.now()}-${req.file.originalname}`
		const remotePath = `/var/www/uploads/${filename}`
		try {
			await sftp.connect({
				host: '93.183.69.97',
				port: '22',
				username: 'root',
				password: 'Bullshit128',
			})
			await sftp.put(req.file.buffer, remotePath)
			image_url = `http://93.183.69.97/uploads/${filename}`
		} catch (err) {
			return res.status(500).json({ error: err.message })
		} finally {
			sftp.end()
		}
	}

	const q = 'INSERT INTO coming_soon (name, description, image_url, image_alt) VALUES (?, ?, ?, ?)'
	const values = [name, description, image_url, image_alt]

	db.query(q, values, (err, data) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		return res.status(200).json('Coming Soon has been added.')
	})
})

app.post('/ThisWeek', upload.single('image'), async (req, res) => {
	const { name, role, description, image_alt } = req.body
	let image_url = null

	if (req.file) {
		const filename = `${Date.now()}-${req.file.originalname}`
		const remotePath = `/var/www/uploads/${filename}`
		try {
			await sftp.connect({
				host: '93.183.69.97',
				port: '22',
				username: 'root',
				password: 'Bullshit128',
			})
			await sftp.put(req.file.buffer, remotePath)
			image_url = `http://93.183.69.97/uploads/${filename}`
		} catch (err) {
			return res.status(500).json({ error: err.message })
		} finally {
			sftp.end()
		}
	}

	const q =
		'INSERT INTO this_week (name, description, role, image_url, image_alt) VALUES (?, ?, ?, ?, ?)'
	const values = [name, description, role, image_url, image_alt]

	db.query(q, values, (err, data) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		return res.status(200).json('This Week has been added.')
	})
})

app.delete('/ComingSoon/:id', (req, res) => {
	const comingSoonId = req.params.id
	const q = 'DELETE FROM coming_soon WHERE id=?'

	db.query(q, [comingSoonId], (err, data) => {
		if (err) return res.json(err)
		return res.json('Coming Soon has been deleted.')
	})
})

app.delete('/ThisWeek/:id', (req, res) => {
	const thisWeekId = req.params.id
	const q = 'DELETE FROM this_week WHERE id=?'

	db.query(q, [thisWeekId], (err, data) => {
		if (err) return res.json(err)
		return res.json('This Week has been deleted.')
	})
})

app.put('/:section/:id', upload.single('image'), async (req, res) => {
	const section = req.params.section
	const itemId = req.params.id
	let q
	let values
	let image_url = req.body.image_url

	if (req.file) {
		const filename = `${Date.now()}-${req.file.originalname}`
		const remotePath = `/var/www/uploads/${filename}`
		try {
			await sftp.connect({
				host: '93.183.69.97',
				port: '22',
				username: 'root',
				password: 'Bullshit128',
			})
			await sftp.put(req.file.buffer, remotePath)
			image_url = `http://93.183.69.97/uploads/${filename}`
		} catch (err) {
			return res.status(500).json({ error: err.message })
		} finally {
			sftp.end()
		}
	}

	if (section === 'ThisWeek') {
		q = `UPDATE this_week SET name=?, description=?, role=?, image_url=?, image_alt=? WHERE id=?`
		values = [
			req.body.name,
			req.body.description,
			req.body.role,
			image_url,
			req.body.image_alt,
			itemId,
		]
	} else {
		q = `UPDATE coming_soon SET name=?, description=?, image_url=?, image_alt=? WHERE id=?`
		values = [req.body.name, req.body.description, image_url, req.body.image_alt, itemId]
	}

	db.query(q, values, (err, data) => {
		if (err) return res.json(err)
		return res.json(`${section} item has been updated.`)
	})
})

app.listen(8800, () => {
	console.log('Connected to backend.')
})

app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).send('Something broke!')
})
