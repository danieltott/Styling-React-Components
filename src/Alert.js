import React from 'react'
import styles from './Alert.module.scss'

const Alert = ({ children, className, variant, ...props }) => {
  const combinedClassName = `${styles.root} ${styles[variant]} ${className}`
  return (
    <div className={combinedClassName} role="alert" {...props}>
      {children}
    </div>
  )
}

export default Alert

Alert.defaultProps = {
  variant: 'primary',
  className: '',
}
