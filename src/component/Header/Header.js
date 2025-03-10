import React from 'react'
import styles from './Header.module.css'
const Header = ({children}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>🔥 Welcome to the Ultimate Quiz Challenge! 🔥</h1>
      {children}

    </header>
  )
}

export default Header