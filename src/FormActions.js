import React from 'react'
import styled from 'styled-components'

const StyledFormActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`

const FormActions = ({ children, ...props }) => (
  <StyledFormActions {...props}>{children}</StyledFormActions>
)

export default FormActions
