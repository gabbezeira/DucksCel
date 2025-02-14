import { X as IconClose, Menu as IconMenu } from 'lucide-react'
import { useState } from 'react'
import { Container, MobileMenu, MobileMenuButton } from './styles'

export const Menu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<Container>
			<div className="logo">Logo</div>

			<ul className="items">
				<li className="item">
					<a href="#">Início</a>
				</li>
				<li className="item">
					<a href="planos">Planos</a>
				</li>
				<li className="item">
					<a href="sobre">Sobre</a>
				</li>
				<li className="item">
					<a href="termos">Termos e Regulamentos</a>
				</li>
				<button type="button" className="button">
					Área do Cliente
				</button>
			</ul>

			<MobileMenuButton onClick={toggleMenu} $isOpen={isOpen}>
				{isOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
			</MobileMenuButton>

			<MobileMenu $isOpen={isOpen}>
				<li className="item">
					<a href="#" onClick={toggleMenu}>
						Início
					</a>
				</li>
				<li className="item">
					<a href="planos" onClick={toggleMenu}>
						Planos
					</a>
				</li>
				<li className="item">
					<a href="sobre" onClick={toggleMenu}>
						Sobre
					</a>
				</li>
				<li className="item">
					<a href="termos" onClick={toggleMenu}>
						Termos e Regulamentos
					</a>
				</li>
				<button type="button" className="button" onClick={toggleMenu}>
					Área do Cliente
				</button>
			</MobileMenu>
		</Container>
	)
}
