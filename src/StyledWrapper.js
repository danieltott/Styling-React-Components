import React, { useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { light, dark } from './theme'

const GlobalStyle = createGlobalStyle`
html {
  font-size: 16px;
  line-height: 1.5;
}

body {
  font-family: ${props => props.theme.font.family};
  padding: 1em;
  background: ${props => props.theme.colors.bodyBg};
  color: ${props => props.theme.colors.bodyCopy};
}
`

const ThemeToggler = styled.button`
  position: fixed;
  top: 5px;
  right: 5px;
`

const StyledWrapper = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyle />
      <ThemeToggler
        onClick={() => {
          setIsDark(!isDark)
        }}
      >
        {isDark ? '☀️' : '🌚'}
      </ThemeToggler>
      {children}
    </ThemeProvider>
  )
}

export default StyledWrapper
