import { Banner, Menu, Topframe, Underbanner } from '@components'
import { Cards } from './components'
import { About } from './components/about'

function App() {
	return (
		<>
			<Topframe />
			<Menu />
			<Banner />
			<Underbanner />
			<Cards />
			<About />
		</>
	)
}

export default App
