import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 3.125rem;
  padding: 0.75rem 10rem;

  background-color: var(--white-color);

  .left {
    display: flex;
    flex-direction: row;
    gap: 0.625rem;

    .icon {
      width: 1rem;
      height: 1.25rem;
      color: var(--primary-color);
    }

    .text {
      font-size: 14px;
      font-weight: 700;
      color: var(--primary-color);
    }
  }

  .right {
    display: flex;
    flex-direction: row;
    gap: 0.625rem;

    .text {
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--primary-color);
    }

    .divider {
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--primary-color);
    }
  }

  @media (max-width: 768px) {
		padding: 0.25rem 2rem;

    .left {
      gap: 0.125rem;

      .text {
        font-size: 0.875rem;
        white-space: nowrap;
      }
    }

    .right {
     display: none;
    }
	}
`
