import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NavbarSimple } from './components/navbar.jsx'
import { SimpleFooter } from './components/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NavbarSimple />
		<App />
		<SimpleFooter />
	</React.StrictMode>
)
