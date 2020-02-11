import React, { useState } from 'react'
import theme from './theme'

const variations = {
  primary: {
    background: theme.colors.primary,
    color: '#fff',
  },
  danger: {
    background: theme.colors.danger,
    color: '#fff',
  },
  secondary: {
    background: theme.colors.secondary,
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
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  // use matchMedia to determine whether or not to use mobile styles
  const matcher = window.matchMedia(`(max-width: ${theme.breakpoints.phone}px)`)
  const [isMobile, setIsMobile] = useState(matcher.matches)
  matcher.addListener(q => {
    setIsMobile(q.matches)
  })

  // use a hook and mouse events to handle hover styles
  const [isOver, setIsOver] = useState(false)

  let styleObj = {
    fontSize: '1rem',
    padding: '0.75rem',
    borderRadius: '5px',
    border: '1px solid #333',
    transition: 'all 0.2s ease-in-out',
    boxShadow: isOver
      ? 'inset 0 0 8px 5px rgba(255, 255, 255, 0.7)'
      : 'inset 0 0 0 0 rgba(255, 255, 255, 0)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    ...variations[variant],
    ...style,
  }

  // make buttons smaller in smaller breakpoints
  if (isMobile) {
    styleObj = {
      ...styleObj,
      fontSize: '.8rem',
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      style={styleObj}
      onMouseEnter={() => {
        setIsOver(true)
        onMouseEnter()
      }}
      onMouseLeave={() => {
        setIsOver(false)
        onMouseLeave()
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
  onMouseEnter: () => {},
  onMouseLeave: () => {},
}
