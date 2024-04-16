import './App.css'
import { SimpleFooter } from './components/footer'
import { NavbarSimple } from './components/navbar'
import RoutesPath from './utils/RoutesPath'

function App() {
	return (
		<>
			<NavbarSimple />
			<RoutesPath />
			<SimpleFooter />
		</>
	)
}

export default App
