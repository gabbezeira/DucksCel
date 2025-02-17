import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 3.75rem 10rem;
  gap: 5.625rem;

  .about {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5.625rem;

    .image {
      width: 17rem;
      height: 100%;
      border-radius: 1.75rem;
    }

    .texts {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      width: 100%;

      gap: 1.25rem;

      .title {
        display: flex;
        flex-direction: column;
        gap: 0.625rem;

        .top {
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.125rem;
          color: var(--primary-color);
          text-transform: uppercase;
        }

        .bottom {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-color);
          width: 70%;
          line-height: 2.125rem;
          text-transform: uppercase;
        }
      }

      .content {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--text-color);
        text-align: start;
      }

      .button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: max-content;
        height: 2.5rem;
        padding: 0.25rem 0.5rem;

        color: var(--white-color);
        font-weight: 500;
        font-size: 1rem;

        background-color: var(--primary-color);
        text-decoration: none;
        border-radius: 0.25rem;

        transition: all 0.2s;
        cursor: pointer;

        &:hover {
          color: var(--secondary-color);
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.875rem;
    padding-bottom: 3.75rem;
    gap: 3.75rem;

    .about {
      flex-direction: column;
      align-items: center;
      gap: 1.875rem;
      
      .texts {
       .title {
        .bottom {
          width: 100%;
        }
       }
      }
    }
  }
`
