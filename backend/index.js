import express from 'express'
import mysql from 'mysql2' // Change this line
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const db = mysql.createConnection({
	host: 'db-mysql-nyc3-15327-do-user-16800631-0.c.db.ondigitalocean.com',
	user: 'doadmin',
	password: 'AVNS_cSPD6SX6u8CHF6yoXQv',
	database: 'defaultdb',
	port: 25060,
})

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/')
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname)) // Append extension
	},
})

const upload = multer({ storage: storage })
// to send from html body
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))

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
		if (err) return res.status(500).json(err) // Handle error
		if (data.length === 0) return res.status(404).json({ message: 'Item not found' }) // Handle not found

		const item = data[0] // Assuming id is unique, so we take the first result
		res.json(item)
	})
})

app.get('/ThisWeek/:id', (req, res) => {
	const itemId = req.params.id
	const q = 'SELECT * FROM this_week WHERE id = ?'
	db.query(q, [itemId], (err, data) => {
		if (err) return res.status(500).json(err) // Handle error
		if (data.length === 0) return res.status(404).json({ message: 'Item not found' }) // Handle not found

		const item = data[0] // Assuming id is unique, so we take the first result
		res.json(item)
	})
})

app.post('/ComingSoon', upload.single('image'), (req, res) => {
	const { name, description, image_alt } = req.body

	let image_url = null
	if (req.file) {
		image_url = req.file.filename
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
app.post('/ThisWeek', upload.single('image'), (req, res) => {
	const { name, role, description, image_alt } = req.body

	let image_url = null
	if (req.file) {
		image_url = req.file.filename
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
	const comningSoonId = req.params.id
	const q = 'DELETE FROM coming_soon WHERE id=?'

	db.query(q, [comningSoonId], (err, data) => {
		if (err) return res.json(err)
		return res.json('Comig Soon has been deleted.')
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

app.put('/:section/:id', upload.single('image'), (req, res) => {
	const section = req.params.section
	const itemId = req.params.id
	let q
	let values

	// Update database with new image URL or other fields
	console.log(section)
	if (section === 'ThisWeek') {
		q = `UPDATE this_week SET name=?, description=?, role=?, image_url=?, image_alt=? WHERE id=?`
		values = [
			req.body.name,
			req.body.description,
			req.body.role,
			req.file ? req.file.filename : req.body.image_url, // Use new filename if file uploaded
			req.body.image_alt,
			itemId,
		]
	} else {
		q = `UPDATE coming_soon SET name=?, description=?, image_url=?, image_alt=? WHERE id=?`
		values = [
			req.body.name,
			req.body.description,
			req.file ? req.file.filename : req.body.image_url, // Use new filename if file uploaded
			req.body.image_alt,
			itemId,
		]
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
