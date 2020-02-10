import React from 'react'
import styles from './Main.module.scss'

const Main = ({ children, className, props }) => (
  <div role="main" className={`${styles.root} ${className}`} {...props}>
    {children}
  </div>
)

export default Main

Main.defaultProps = {
  className: '',
}
