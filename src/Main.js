import React from 'react'

const Main = ({ children, props }) => (
  <div
    role="main"
    style={{
      maxWidth: '30rem',
      margin: '0 auto',
    }}
    {...props}
  >
    {children}
  </div>
)

export default Main
