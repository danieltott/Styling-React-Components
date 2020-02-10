import React from 'react'

const Alert = ({ children, ...props }) => (
  <div role="alert" {...props}>
    {children}
  </div>
)

export default Alert
