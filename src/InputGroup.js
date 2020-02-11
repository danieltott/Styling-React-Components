import React from 'react'

const InputGroup = ({ children, error, style = {}, ...props }) => (
  <div
    style={{
      marginTop: '1em',
      ...style,
    }}
    {...props}
  >
    {children}
    {error && <div style={{ color: 'red' }}>{error}</div>}
  </div>
)

export default InputGroup
