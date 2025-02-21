import Image from '@assets/icons/Image.svg'
import { Download } from '@components'
import { ChevronRight } from 'lucide-react'
import { Container } from './styles'

export const About = () => (
	<Container>
		<div className="about" id="sobre">
			<img src={Image} alt="Image" className="image" />
			<div className="texts">
				<div className="title">
					<div className="top">Sobre nós</div>
					<div className="bottom">
						A DUCKS CEL NASCEU PARA DESCOMPLICAR A TELEFONIA!
					</div>
				</div>
				<div className="content">
					<p className="text">
						Na Ducks Cel, acreditamos que telefonia digital deve ser simples,
						acessível e de alta qualidade. Nosso objetivo é oferecer uma conexão
						estável e descomplicar os serviços de telefonia, garantindo que você
						fique sempre conectado sem burocracia.
					</p>
					<p className="text">
						Com tecnologia de ponta e atendimento eficiente, eliminamos as
						barreiras tradicionais e oferecemos uma experiência transparente e
						sem complicações. Seja para chamadas, internet ou soluções
						empresariais, estamos aqui para conectar você ao que realmente
						importa.
					</p>
				</div>
				<a className="button" href="">
					Fale com nossos consultores
					<ChevronRight />
				</a>
			</div>
		</div>
		<Download />
	</Container>
)
