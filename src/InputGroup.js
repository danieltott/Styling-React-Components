import React from 'react'

const InputGroup = ({ children, error }) => (
  <div>
    {children}
    {error && <div>{error}</div>}
  </div>
)

export default InputGroup
