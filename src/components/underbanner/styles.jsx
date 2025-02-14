import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3.75rem 10rem;

  .bannerCard {
    display: flex;
    justify-content: start;
    align-items: center;
    
    width: 17.1875rem;
    height: 5.625rem;

    padding: 0.625rem 1.25rem;
    gap: 1.25rem;

    background-color: var(--primary-color);
    border-radius: 0.625rem;

    color: var(--white-color);
    font-size: 0.875rem;
    font-weight: 400;

    .icon {
      color: var(--white-color);
      width: 2rem;
    }
  }

  .center {
    width: 23.75rem !important;
  }

  @media (max-width: 768px) {
    flex-direction: column;
		padding: 1.875rem 1.25rem;
    gap: 1rem;

    .bannerCard{
      width: 100%
    }
    
    .center {
      width: 100% !important;
    }
	}
`
