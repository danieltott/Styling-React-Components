import React from 'react'
import './Button.scss'

const Button = ({
  children,
  variant,
  outline,
  disabled,
  size,
  loading,
  type,
  className,
  ...props
}) => {
  let combinedClassName = `btn btn-${variant} ${className}`

  if (size) {
    combinedClassName = `${combinedClassName} btn-${size}`
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
export default Button

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
}
