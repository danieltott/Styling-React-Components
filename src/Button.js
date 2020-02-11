import React from 'react'

const variations = {
  primary: {
    background: 'indigo',
    color: '#fff',
  },
  danger: {
    background: 'red',
    color: '#fff',
  },
  secondary: {
    background: '#ccc',
    color: '#333',
  },
}

const Button = ({
  children,
  variant,
  outline,
  disabled,
  size,
  loading,
  type,
  style,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      style={{
        fontSize: '1rem',
        padding: '0.75rem',
        borderRadius: '5px',
        border: '1px solid #333',
        transition: 'all 0.2s ease-in-out',
        boxShadow: 'inset 0 0 0 0 rgba(255, 255, 255, 0)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        ...variations[variant],
        ...style,
      }}
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
  style: {},
}
