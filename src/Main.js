import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`

const Main = ({ children, ...props }) => (
  <StyledMain role="main" {...props}>
    {children}
  </StyledMain>
)

export default Main

Main.defaultProps = {
  className: '',
}
