import {
	About,
	Banner,
	Cards,
	Menu,
	Services,
	Topframe,
	Underbanner,
} from '@components'
import { Testimonials } from './components'

function App() {
	return (
		<>
			<Topframe />
			<Menu />
			<Banner />
			<Underbanner />
			<Cards />
			<About />
			<Services />
			<Testimonials />
		</>
	)
}

export default App
