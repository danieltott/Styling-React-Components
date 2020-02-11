import React from 'react'

const FormActions = ({ children, style = {}, ...props }) => (
  <div
    style={{
      marginTop: '1em',
      display: 'flex',
      justifyContent: 'space-between',
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
)

export default FormActions
