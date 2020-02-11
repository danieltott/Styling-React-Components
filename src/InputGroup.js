import React from 'react'

const InputGroup = ({ children, className = '', error, ...props }) => {
  return (
    <div className={`mt-3  ${className}`} {...props}>
      {children}
      {error && <div className="text-red-800">{error}</div>}
    </div>
  )
}

export default InputGroup
