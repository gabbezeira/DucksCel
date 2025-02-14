import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  width: 100%;
  height: 25.875rem;

  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px){
    background-position: center;
  }
`
