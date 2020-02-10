import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
html {
  font-size: 16px;
  line-height: 1.5;
}

body {
  font-family: ${props => props.theme.font.family};
  padding: 1em;
}
`

const StyledWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default StyledWrapper
