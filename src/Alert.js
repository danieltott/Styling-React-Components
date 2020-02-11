import React from 'react'

const variantClasses = {
  primary: 'bg-indigo-800 text-white',
  danger: 'bg-red-800 text-white',
  success: 'bg-green-800 text-white',
}

const Alert = ({ children, className, variant, ...props }) => {
  const combinedClassName = `p-6 rounded ${variantClasses[variant]} ${className}`
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
