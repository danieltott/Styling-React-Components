import React from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'

const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.75rem;
  border-radius: ${props => props.theme.borderRadius};
  background: indigo;
  border: 1px solid #333;
  color: #fff;
  cursor: ${props =>
    props.loading ? `wait` : props.disabled ? `not-allowed` : `pointer`};
  transition: all 0.2s ease-in-out;
  box-shadow: inset 0 0 0 0 rgba(255, 255, 255, 0);
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:hover {
    box-shadow: ${props =>
      props.disabled
        ? `inset 0 0 0 0 rgba(255, 255, 255, 0)`
        : `inset 0 0 8px 5px rgba(255, 255, 255, 0.7)`};
  }

  ${props => {
    switch (props.variant) {
      case 'danger':
        return `
      background: ${props.theme.colors.danger};
      color: #fff;
      `
      case 'secondary':
        return `
      background: ${props.theme.colors.secondary};
      color: #000;
      `
      default:
        return null
    }
  }}

  ${props => {
    switch (props.size) {
      case 'sm':
        return `font-size: .8em;`

      case 'lg':
        return `font-size: 1.2em;`

      default:
        return null
    }
  }}
`

const Button = ({
  children,
  outline,
  disabled,
  size,
  loading,
  type,
  ...props
}) => {
  return (
    <StyledButton type={type} disabled={disabled} loading={loading} {...props}>
      {loading && <Spinner />}
      {children}
    </StyledButton>
  )
}
export default Button

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
}
