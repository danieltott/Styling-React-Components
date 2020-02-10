import React from 'react'

const FormActions = ({ children, className = '', ...props }) => (
  <div className={`d-flex justify-content-between ${className}`} {...props}>
    {children}
  </div>
)

export default FormActions
