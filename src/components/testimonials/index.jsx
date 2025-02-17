import user1 from '@assets/icons/user1.png'
import user2 from '@assets/icons/user2.png'
import { Container } from './styles'

export function Testimonials() {
	return (
		<Container>
			<div className="texts">
				<div className="top">Escolha o melhor</div>
				<div className="bottom">Plano para você</div>
			</div>
			<div className="testimonials">
				<div className="testimonial">
					<div className="top">
						<img className="avatar" src={user1} />
						<div className="name">Roberto gentil</div>
					</div>
					<p className="bottom">
						Desde que contratei a Ducks Cel, minha conexão nunca me deixou na
						mão!
					</p>
				</div>
				<div className="testimonial">
					<div className="top">
						<img className="avatar" src={user2} />
						<div className="name">Gabriel Alves</div>
					</div>
					<p className="bottom">
						Sempre recomendo a Ducks cel para minha família e amigos, ótimo
						atendimento e suporte!
					</p>
				</div>
			</div>
		</Container>
	)
}
