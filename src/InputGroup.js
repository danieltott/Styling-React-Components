import React from 'react'
import styled from 'styled-components'
import 'styled-components/macro'
import media from './media'
import './InputGroup.scss'

const StyledInvalidMessage = styled.div`
  color: ${props => props.theme.colors.danger};
`

export const StyledFormControl = styled.input`
  font-family: ${props => props.theme.font.family};
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: ${props => props.theme.borderRadius};
  padding: 0.1875rem;
  width: 100%;
  margin-top: 0.25em;
  label {
    display: block;
  }

  ${props => props.invalid && `border-color: ${props.theme.colors.danger};`}
`

const StyledInputGroup = styled.div`
  margin-top: 1em;

  ${media.tablet`
    display: grid;
    grid-template-columns: 10rem 1fr;
    grid-gap: 1em;
    label {
      text-align: right;
      padding-top: 5px;
    }

    ${StyledFormControl} {
      width: auto;
    }

    ${StyledInvalidMessage} {
      grid-column: 2;
    }
  `}
`

const InputGroup = ({ children, error, ...props }) => {
  return (
    <StyledInputGroup {...props}>
      {children}
      {error && <StyledInvalidMessage>{error}</StyledInvalidMessage>}
    </StyledInputGroup>
  )
}

export default InputGroup
