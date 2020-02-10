import React from 'react'
import styled from 'styled-components'

const StyledAlert = styled.div`
  border: 1px solid;
  padding: 1em;
  border-radius: ${props => props.theme.borderRadius};
  margin-top: 1em;

  background: ${props => props.theme.colors[props.variant]};
  color: #fff;
`

const Alert = ({ children, ...props }) => {
  return (
    <StyledAlert role="alert" {...props}>
      {children}
    </StyledAlert>
  )
}

export default Alert

Alert.defaultProps = {
  variant: 'primary',
}
