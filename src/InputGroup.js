import React from 'react'
import Alert from './Alert'

const InputGroup = ({ children, error, ...props }) => (
  <div {...props}>
    {children}
    {error && <Alert>{error}</Alert>}
  </div>
)

export default InputGroup
