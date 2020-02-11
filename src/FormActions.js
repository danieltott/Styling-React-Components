import React from 'react'

const FormActions = ({ children, className = '', ...props }) => (
  <div className={`mt-3 flex justify-between ${className}`} {...props}>
    {children}
  </div>
)

export default FormActions
