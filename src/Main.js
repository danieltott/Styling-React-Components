import React from 'react'
import './Main.scss'

const Main = ({ children, className, props }) => (
  <div role="main" className={`container ${className}`} {...props}>
    {children}
  </div>
)

export default Main

Main.defaultProps = {
  className: '',
}
