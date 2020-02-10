import React from 'react'

const InputGroup = ({ children, className = '', error, ...props }) => {
  return (
    <div className={`form-group ${className}`} {...props}>
      {children}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default InputGroup
