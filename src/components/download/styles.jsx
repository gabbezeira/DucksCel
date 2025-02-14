import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: auto;

  padding: 2.375rem 3.75rem;
  background-color: var(--primary-color);
  border-radius: 1.5rem;

  .texts {
    text-align: start;
    color: var(--white-color);

    .top {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .bottom {
      font-size: 1.75rem;
      font-weight: 700;
    }
  }

  .right {
    display: flex;
    flex-direction: row;
    gap: 1.25rem;

    width: auto;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 1.25rem;

    padding: 1.25rem 1.875rem;

    .texts {
      .top {
        font-size: 18px;
        font-weight: 500,
      }

      .bottom {
        font-size: 18px;
        font-weight: 500,
      }
    }

    .right {
      justify-content: center;
      flex-direction: row;

      width: 30%;
      height: auto;
    }
  }
`
