import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 6.25rem;
	padding: 1.25rem 10rem;
	background-color: var(--primary-color);

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 6.25rem;
		height: 3.125rem;
		background-color: var(--white-color);
		border-radius: 0.625rem;
	}

	.items {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;

		.item {
			list-style: none;
			a {
				font-size: 1rem;
				font-weight: 500;
				text-decoration: none;
				color: var(--white-color);
				transition: all 0.2s;
				cursor: pointer;

				&:hover {
					color: var(--secondary-color);
				}
			}
		}

		.button {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0.625rem 1.25rem;
			border: 1px solid var(--secondary-color);
			border-radius: 3.125rem;
			background-color: transparent;
			font-size: 1rem;
			font-weight: 600;
			color: var(--secondary-color);
			transition: all 0.2s;
			cursor: pointer;

			&:hover {
				background-color: var(--secondary-color);
				color: var(--white-color);
			}
		}
	}

	@media (max-width: 768px) {
		padding: 1.25rem 2rem;

		.items {
			display: none;
		}
	}
`

export const MobileMenuButton = styled.button`
	display: none;
	background: none;
	border: none;
	color: var(--white-color);
	cursor: pointer;

  z-index: 110;

	@media (max-width: 768px) {
		display: block;
	}
`

export const MobileMenu = styled.ul`
	position: fixed;
	top: 0;
	right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
	width: 80%;
	height: 100vh;
	background-color: var(--primary-color);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	transition: right 0.3s ease-in-out;
	z-index: 100;
  padding: 1.25rem 1.875rem;

	.item {
		list-style: none;
    text-align: center;

		a {
			font-size: 1.25rem;
			font-weight: 500;
			text-decoration: none;
			color: var(--white-color);
			transition: all 0.2s;
			cursor: pointer;

			&:hover {
				color: var(--secondary-color);
			}
		}
	}

	.button {
		margin-top: 1rem;
		padding: 0.75rem 1.5rem;
		border: 1px solid var(--secondary-color);
		border-radius: 3.125rem;
		background-color: transparent;
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--secondary-color);
		transition: all 0.2s;
		cursor: pointer;

		&:hover {
			background-color: var(--secondary-color);
			color: var(--primary-color);
		}
	}

	@media (min-width: 769px) {
		display: none;
	}
`
