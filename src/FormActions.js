import React from 'react'

const FormActions = ({ children, className = '', ...props }) => (
  <div className={`form-actions ${className}`} {...props}>
    {children}
  </div>
)

export default FormActions
