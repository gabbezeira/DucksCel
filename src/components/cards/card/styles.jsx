import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 14rem;
  flex-direction: column;
  gap: 1.25rem;

  .cards {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    flex-shrink: 0;
    
    width: 100%;
    height: auto;
    padding: 1.25rem 2rem;

    background-color: var(--card-color);
    border: 0.5px solid var(--stroke-color);
    border-radius: 0.75rem;

    gap: 1.5rem;

    .planName {
      font-size: 1.25rem;
      color: var(--text-color);
      font-weight: 700;
      
      width: 100%;
      text-align: center;
    }

    .details {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;

      max-width: 100%;

      .velocity {
        display: flex;
        align-items: center;
        flex-direction: row;

        .number {
          font-size: 4rem;
          font-weight: 700;
          color: var(--text-color);
        }

        .gb {
          font-size: 2rem;
          font-weight: 500;
          color: var(--text-color);
        }
      }

      .planDescription {
        font-size: 0.75rem;
        text-align: center;
        color: var(--text-color);

        span {
          font-weight: 700;
        }
      }

    }

    .unlimited {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 0.625rem;

      .unlimitedButton {
        background-color: var(--primary-color);
        padding: 0.25rem 0.625rem;
        border-radius: 1.5rem;

        width: 100%;
        text-align: center;

        color: var(--white-color);
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
      }
    }

    .apps {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      gap: 1rem;

      .texts {
        display: flex;
        flex-direction: column;
        align-items: start;
        text-align: start;

        .title {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-color);
        }

        .description {
          font-size: 0.6875rem;
          font-weight: normal;
          color: var(--text-color);
          white-space: nowrap;
        }
      }

      .icons {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        text-align: start;

        width: 100%;
        height: auto;

        .logos {
          display: flex;
          justify-content: start;
          flex-direction: row;
          flex-wrap: wrap;
          max-width: 100%;
          gap: 0.5rem;

          .logo {
            width: 1.2rem;
            height: 1.2rem;
          }
        }

        .appsList {
          font-size: 0.6875rem;
          font-weight: normal;
          color: var(--text-color);
        }
      }
    }

    .divisor {
      width: 100%;
      height: 0.0313rem;
      background-color: var(--stroke-color);
    }

    .extras {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      gap: 1rem;

      .texts {
        display: flex;
        flex-direction: column;
        width: 100%;

        align-items: start;
        text-align: start;

        .title {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-color);
        }

        .description {
          font-size: 0.6875rem;
          font-weight: normal;
          color: var(--text-color);
          white-space: pre-wrap;
        }
      }

      .extraContent {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        gap: 0.625rem;

        .logo {
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 0.125rem;
        }
        
        .texts {
          display: flex;
          flex-direction: column;
          width: max-content;

          text-align: start;

          .info {
            font-size: 0.625rem;
            color: var(--text-color);
          }

          .title {
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-color);
          }

          .description {
            font-size: 0.6875rem;
            font-weight: normal;
            color: var(--text-color);
            white-space: pre-wrap;
          }

        }
      }

      .start {
        align-items: start !important;
      }

      .link {
        font-size: 0.625rem;
        color: var(--primary-color);
        font-weight: 700;
        text-align: center;
      }
    }

    .price {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .finalPrice {
        font-size: 2.5rem;
        color: var(--text-color);
        font-weight: 700;

        span {
          font-size: 1.25rem;
        }
      }

      .duration {
        font-size: 0.6875rem;
        font-weight: 600;
        color: var(--text-color);
        text-align: center;
      }
    }
  }

  .buyButton {
    width: 100%;
    padding: 0.875rem 0rem;
    border-radius: 0.75rem;
    border: none;
    background-color: var(--text-color);

    font-size: 1rem;
    color: var(--white-color);
    font-weight: 700;

    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background-color: var(--primary-color);
    }
  }

  @media (max-width: 768px) {
    width: 100% !important;
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

    .buyButton {
      width: 20rem;
    }
  }

`
