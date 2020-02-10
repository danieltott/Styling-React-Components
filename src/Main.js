import React from 'react'

const Main = ({ children, className, props }) => (
  <div role="main" className={`container ${className}`} {...props}>
    {children}
  </div>
)

export default Main

Main.defaultProps = {
  className: '',
}
