import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.75rem;

  justify-content: space-between;
  padding: 3.75rem 10rem;

  .texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;

    .top {
      font-size: 1.25rem;
      letter-spacing: 0.125rem;
      color: var(--primary-color);
      text-transform: uppercase;
    }

    .bottom {
      font-size: 2.25rem;
      color: var(--text-color);
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  .testimonials {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    width: auto;
    gap: 2rem;

    .testimonial {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;

      width: 24.6875rem;
      height: 13.375rem;
      padding: 1.875rem;

      background-color: var(--primary-color);
      border-radius: 0.875rem;

      .top {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        gap: 1.25rem;
        width: 100%;

        .avatar {
          width: 4.625rem;
          height: 4.625rem;
        }

        .name {
          font-size: 1.5rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--white-color);
        }
      }

      .bottom {
        width: 100%;
        color: var(--white-color);
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
		padding: 3.75rem 1.875rem;
    gap: 1rem;

    .testimonials {
      flex-direction: column;
      width: 100%;

      .testimonial {
        width: 100%;
      }
    }
	}
`
