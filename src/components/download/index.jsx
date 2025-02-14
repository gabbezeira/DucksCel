import Appstore from '@assets/icons/AppStore.png'
import Playstore from '@assets/icons/PlayStore.png'
import { Container } from './styles'

export const Download = () => (
	<Container>
		<div className="texts">
			<p className="top">Facilite seu dia a dia</p>
			<h1 className="title">Baixe o app Ducks Cel</h1>
		</div>

		<div className="right">
			<img src={Playstore} alt="playstore" />
			<img src={Appstore} alt="Appstore" />
		</div>
	</Container>
)
