import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};
      border-top: solid 3px transparent;
      border-bottom: solid 3px transparent;

      transition: all 0.3s ease-in-out;

      &:hover {
        border-bottom: solid 3px ${(props) => props.theme['green-700']};
      }

      &.active {
        color: ${(props) => props.theme['green-700']};
      }
    }
  }
`
