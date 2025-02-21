import {
	About,
	Banner,
	Cards,
	Footer,
	Menu,
	Services,
	Testimonials,
	Topframe,
	Underbanner,
} from '@components'

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
			<Footer />
		</>
	)
}

export default App
