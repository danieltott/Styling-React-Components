import React from 'react'
import './InputGroup.scss'

const InputGroup = ({ children, className = '', error, ...props }) => {
  return (
    <div className={`form-group ${className}`} {...props}>
      {children}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default InputGroup
