import React from 'react'

const Main = ({ children, className, props }) => (
  <div
    role="main"
    className={`font-sans text-gray-800 max-w-lg mx-auto ${className}`}
    {...props}
  >
    {children}
  </div>
)

export default Main

Main.defaultProps = {
  className: '',
}
