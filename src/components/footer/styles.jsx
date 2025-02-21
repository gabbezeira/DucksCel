import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: auto;

  padding: 3.125rem 10rem;
  background-color: var(--text-color);

  .copy {
    font-size: 1rem;
    font-weight: 500;
    color: var(--white-color);
    text-align: center;
  }

  @media (max-width: 768px){
    padding: 1.25rem 1.875rem;
  }
`
