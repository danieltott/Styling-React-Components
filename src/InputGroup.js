import React from 'react'
import Alert from './Alert'

const InputGroup = ({ children, error }) => (
  <div>
    {children}
    {error && <Alert>{error}</Alert>}
  </div>
)

export default InputGroup
