import plans from '@mocks/plans.json'
import { Card } from './card'
import { Container } from './styles'

export function Cards() {
	return (
		<Container>
			<div className="texts" id="planos">
				<div className="top">Escolha o melhor</div>
				<div className="bottom">Plano para você</div>
			</div>
			<div className="cardsContainer">
				{plans.map((plan) => (
					<Card
						key={plan.name}
						name={plan.name}
						velocity={plan.velocity}
						description={plan.description}
						apps={plan.apps}
						basePrice={plan.basePrice}
						duration={plan.duration}
					/>
				))}
			</div>
		</Container>
	)
}
