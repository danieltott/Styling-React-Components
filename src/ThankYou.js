import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import FormActions from './FormActions'
import Alert from './Alert'
import Main from './Main'
import svgData from './ThankYouSvgData'

const StyledThankYou = styled(Main)`
  background: rebeccapurple;
  color: #fff;
  max-width: 45rem;
  padding: 2.5rem;
  border-radius: 1rem;
  background-image: ${svgData};
`

const ThankYou = ({ reset }) => (
  <StyledThankYou>
    <h1>Thank you!</h1>
    <Alert variant="success">Your message has been received.</Alert>
    <FormActions>
      <Button onClick={reset} variant="secondary">
        Send Another Message
      </Button>
    </FormActions>
  </StyledThankYou>
)

export default ThankYou
