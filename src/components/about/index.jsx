import Image from '@assets/icons/Image.svg'
import { Download } from '@components'
import { Container } from './styles'

export const About = () => (
	<Container>
		<div className="about">
			<img src={Image} alt="Image" className="image" />
			<div className="texts">
				<div className="title">
					<div className="top">Sobre nós</div>
					<div className="bottom">
						A DUCKS CEL NASCEU PARA DESCOMPLICAR A TELEFONIA!
					</div>
				</div>
				<p className="content">
					Na Ducks Cel, acreditamos que telefonia digital deve ser simples,
					acessível e de alta qualidade. Nosso objetivo é oferecer uma conexão
					estável e descomplicar os serviços de telefonia, garantindo que você
					fique sempre conectado sem burocracia. Com tecnologia de ponta e
					atendimento eficiente, eliminamos as barreiras tradicionais e
					oferecemos uma experiência transparente e sem complicações. Seja para
					chamadas, internet ou soluções empresariais, estamos aqui para
					conectar você ao que realmente importa.
				</p>
				<a className="button" href="">
					Fale com nossos consultores
				</a>
			</div>
		</div>
		<Download />
	</Container>
)
