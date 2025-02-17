import icon1 from '@assets/icons/lucide/1.svg'
import icon2 from '@assets/icons/lucide/2.svg'
import icon3 from '@assets/icons/lucide/3.svg'
import icon4 from '@assets/icons/lucide/4.svg'
import { Container } from './styles'

export const Services = () => (
	<Container>
		<div className="texts">
			<div className="title">
				<div className="top">Conheça</div>
				<div className="bottom">Nossos serviços</div>
			</div>
			<p className="content">
				Conheça mais sobre nossos serviços e como eles descomplicam seu dia!
			</p>
		</div>
		<div className="services">
			<div className="service">
				<img className="icon" src={icon1} />
				<div className="bottom">
					<div className="title">Cobertura</div>
					<div className="content">
						Todos os planos da Ducks Cel possuem cobertura nacional para
						chamadas de voz de alta qualidade.
					</div>
				</div>
			</div>
			<div className="service">
				<img className="icon" src={icon2} />
				<div className="bottom">
					<div className="title">Apps</div>
					<div className="content">
						Apps ilimitados sem descontar da internet: Waze e Moovit.
					</div>
				</div>
			</div>
			<div className="service">
				<img className="icon" src={icon3} />
				<div className="bottom">
					<div className="title">Ilimitados</div>
					<div className="content">
						Ligações e SMS ilimitados para qualquer operadora usando o código
						015
					</div>
				</div>
			</div>
			<div className="service">
				<img className="icon" src={icon4} />
				<div className="bottom">
					<div className="title">5G</div>
					<div className="content">
						Somos uma empresa de telefonia, com tecnologia 5G e infraestrutura
						de ponta
					</div>
				</div>
			</div>
		</div>
	</Container>
)
