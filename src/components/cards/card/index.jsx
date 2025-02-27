import { useMemo, useState } from 'react'
import Logos from './logos'
import { Container } from './styles'

export function Card({
	name,
	velocity,
	description,
	apps,
	basePrice,
	duration,
}) {
	const [selectedExtras, setSelectedExtras] = useState([])

	const extras = {
		alolaStart: { price: 19.9, label: 'Alola Start', logo: Logos.Alola },
		deezer: { price: 9.9, label: 'Deezer Premium', logo: Logos.Deezer },
		funeral: {
			price: 19.9,
			label: 'Plano Funerário',
			info: '(*Plano Assistencial Funerário com cremação e abrangência nacional)',
		},
	}

	const toggleExtra = (extra) => {
		setSelectedExtras((prev) => {
			const isAlola = extra.includes('alola')
			if (isAlola) {
				const filteredExtras = prev.filter((item) => !item.includes('alola'))
				return prev.includes(extra)
					? filteredExtras
					: [...filteredExtras, extra]
			}
			return prev.includes(extra)
				? prev.filter((item) => item !== extra)
				: [...prev, extra]
		})
	}

	const totalPrice = useMemo(() => {
		return selectedExtras.reduce(
			(acc, extra) => acc + extras[extra].price,
			basePrice,
		)
	}, [selectedExtras, extras, basePrice])

	const renderExtra = (extraKey) => {
		const extra = extras[extraKey]
		return (
			<div
				className={`extraContent ${extraKey === 'funeral' ? 'start' : ''}`}
				key={extraKey}
			>
				<input
					type="checkbox"
					checked={selectedExtras.includes(extraKey)}
					onChange={() => toggleExtra(extraKey)}
				/>
				{extra.logo && (
					<img className="logo" src={extra.logo} alt={extra.label} />
				)}
				<div className="texts">
					<p className="title">{extra.label}</p>
					<p className="description">Adicione por R${extra.price.toFixed(2)}</p>
					{extra.info && <p className="info">{extra.info}</p>}
				</div>
			</div>
		)
	}

	return (
		<Container>
			<div className="card">
				<h1 className="planName">{name}</h1>

				<div className="details">
					<div className="velocity">
						<p className="number">{velocity}</p>
						<p className="gb">GB</p>
					</div>
					<p className="planDescription">{description}</p>
				</div>

				<div className="extras">
					<div className="texts">
						<h1 className="title">Alola Clube de Benefícios</h1>
						<p className="description">
							Descontos exclusivos para clientes Ducks Cel
						</p>
					</div>

					{Object.keys(extras)
						.filter((key) => key.includes('alola'))
						.map((key) => renderExtra(key))}

					<a className="link" href="alola">
						Conheça as vantagens do clube
					</a>
				</div>

				<div className="extras">
					<div className="texts">
						<h1 className="title">Melhore seu Plano</h1>
						<p className="description">E facilite ainda mais seu dia a dia</p>
					</div>

					{renderExtra('deezer')}
					{renderExtra('funeral')}
				</div>

				<div className="price">
					<p className="finalPrice">
						<span>R$</span>
						{totalPrice.toFixed(2).replace('.', ',')}
					</p>
					<p className="duration">{duration}</p>
				</div>
			</div>

			<button type="button" className="buyButton">
				Quero meu chip
			</button>
		</Container>
	)
}
