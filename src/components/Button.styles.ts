import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const ButtonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.theme['green-500']};
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  margin: 0.3rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: brightness(0.8);
  }
  /* ${(props) => {
    return css`
      background-color: ${ButtonVariants[props.variant]};
    `
  }} */
`
