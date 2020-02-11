import React from 'react'
import { keyframes } from 'styled-components'
import 'styled-components/macro'

const spinnerAnim = keyframes`
  0% {
    transform: scale(0);
  } 100% {
    transform: scale(1.0);
    opacity: 0;
  }
`

const Spinner = () => (
  <div
    css={`
      width: 16px;
      height: 16px;
      background-color: #fff;
      display: inline-block;
      margin-left: -5px;
      margin-right: 5px;
      border-radius: 100%;
      animation: ${spinnerAnim} 1s infinite ease-in-out;
    `}
  />
)

// const Spinner = props => (
//   <IntersectingCirclesSpinner
//     size={24}
//     css={`
//       display: inline-block;
//     `}
//     {...props}
//   />
// )

export default Spinner
