import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import StyledWrapper from './StyledWrapper'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StyledWrapper>
    <App />
  </StyledWrapper>,
  rootElement
)
