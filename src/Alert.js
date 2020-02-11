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
  success: {
    background: 'green',
    color: '#fff',
  },
}

const Alert = ({ children, variant, style, ...props }) => (
  <div
    role="alert"
    style={{
      boxSizing: 'border-box',
      padding: '1em',
      border: '1px solid #333',
      borderRadius: 5,
      ...variations[variant],
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
)

export default Alert

Alert.defaultProps = {
  variant: 'primary',
  style: {},
}
