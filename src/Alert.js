import React from 'react'
import './Alert.scss'

const Alert = ({ children, className, variant, ...props }) => {
  const combinedClassName = `alert alert-${variant} ${className}`
  return (
    <div className={combinedClassName} role="alert" {...props}>
      {children}
    </div>
  )
}

export default Alert

Alert.defaultProps = {
  variant: 'primary',
}
