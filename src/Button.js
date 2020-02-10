import React from 'react'

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
}) => (
  <button type={type} className={className} disabled={disabled} {...props}>
    {children}
  </button>
)

export default Button

Button.defaultProps = {
  type: 'button',
}
