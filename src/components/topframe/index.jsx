import { MapPin as IconLocalization } from 'lucide-react'
import { Container } from './styles'

export const Topframe = () => (
	<Container>
		<div className="left" aria-label="Localização">
			<IconLocalization className="icon" aria-hidden="true" />
			<p className="text">Patos de Minas</p>
		</div>

		<div className="right">
			<p className="text">34 99892-3345</p>
			<div className="divider">|</div>
			<p className="text">34 99892-3345</p>
		</div>
	</Container>
)
