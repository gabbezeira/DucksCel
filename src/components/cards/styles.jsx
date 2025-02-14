import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.75rem;

  justify-content: space-between;
  padding: 1.875rem 10rem;

  .texts {
    display: flex;
    flex-direction: column;
    align-items: center;

    .topTilte {
      font-size: 1.25rem;
      letter-spacing: 0.125rem;
      color: var(--primary-color);
      text-transform: uppercase;
    }

    .title {
      font-size: 2.25rem;
      color: var(--text-color);
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  .cardsContainer {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
		padding: 1.875rem 1.25rem;
    gap: 1rem;

    .cardsContainer {
      flex-direction: column;
      gap: 2rem;
    }
	}
`
