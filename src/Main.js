import React from 'react'

const Main = ({ children, props }) => (
  <div role="main" {...props}>
    {children}
  </div>
)

export default Main
