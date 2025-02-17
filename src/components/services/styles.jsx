import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: auto;
  gap: 2.625rem;

  background-color: var(--primary-color);
  padding: 5.25rem 10rem;
  border-radius: 3.75rem;
  
  .texts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;

    gap: 1.5rem;

    .title {
      display: flex;
      flex-direction: column;
      gap: 0;

      .top {
        font-size: 2rem;
        font-weight: 500;
        letter-spacing: 0.5rem;
        color: var(--white-color);
        text-transform: uppercase;
      }

      .bottom {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--white-color);
        line-height: 1.4;
        text-transform: uppercase;
      }
    }

    .content {
      font-size: 1.5rem;
      font-weight: 400;
      color: var(--white-color);
      text-align: start;
      width: 50%;

      line-height: 32px;
    }
  }

  .services {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;

    .service {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      background-color: var(--white-color);
      border-radius: 1.25rem;

      width: 13.875rem;
      height: 16.25rem;

      padding: 1.25rem;
      gap: 1.5rem;

      .icon {
        width: 4.625rem;
        height: 4.625rem;
      }

      .bottom {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: start;
        gap: 0.625rem;

        .title {
          font-size: 1.25rem;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--primary-color);

          border-bottom: 0.25rem solid var(--primary-color);
        }

        .content {
          font-size: 0.875rem;
          color: var(--primary-color);
          font-weight: 400;
          line-height: 1.4;
        }
      }

    }
  }

  @media (max-width: 768px) {
    padding: 1.875rem;
    border-radius: 3rem;

    .texts {
      gap: 0.25rem;

      .title {
        .top {
          font-size: 1.5rem;
        }

        .bottom {
          font-size: 1.75rem;
        }
      }

      .content {
        font-size: 1.125rem;
        width: 100%;
        line-height: 1.2;
      }

    }

    .services {
      flex-direction: column;
      gap: 1.25rem;
    }
  }
`
