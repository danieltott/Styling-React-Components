import React from 'react'

const variantClasses = {
  primary: 'bg-indigo-800 text-white hover:bg-indigo-600',
  danger: 'bg-red-800 text-white hover:bg-red-600',
  secondary: 'bg-gray-300 text-black hover:bg-gray-200',
}

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
  let combinedClassName = `p-3 ${variantClasses[variant]} border-gray-400 rounded ${className}`

  if (size) {
    combinedClassName = `${combinedClassName} text-${size}`
  }

  if (disabled) {
    combinedClassName = `${combinedClassName} opacity-50 cursor-not-allowed`
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
