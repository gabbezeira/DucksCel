import styled from 'styled-components'
import '@gs'

export const Container = styled.div`
  width: 100%;
  height: 25.875rem;

  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px){
    background-position: center;
    background-image: ${({ $backgroundImageMobile }) => `url(${$backgroundImageMobile})`};
    height: 33.75rem;
  }
`
