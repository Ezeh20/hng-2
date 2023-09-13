import React from 'react'
import styles from './Button.module.scss'

export const Button = ({ children, className, ...props }) => {
    return (
        <div className={`${styles.btn} ${className}`} {...props}>
            {children}
        </div>
    )
}
