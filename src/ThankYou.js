import React from 'react'
import Button from './Button'
import FormActions from './FormActions'
import Alert from './Alert'
import Main from './Main'
import styles from './ThankYou.module.scss'

const ThankYou = ({ reset }) => (
  <Main className={styles.root}>
    <h1>Thank you!</h1>
    <Alert variant="success">Your message has been received.</Alert>
    <FormActions>
      <Button onClick={reset} variant="secondary">
        Send Another Message
      </Button>
    </FormActions>
  </Main>
)

export default ThankYou
