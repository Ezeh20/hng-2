import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import logo from "../../assets/Logo.svg"
import search from "../../assets/search.svg"
import menu from "../../assets/Menu.svg"
import styles from "./Navigation.module.scss"

export const Navigation = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.lgi}>
            <Image src={logo} alt='logo' />
            <p className={`${styles.text} ${styles.textAlt}`}>MovieBox</p>
          </div>
          <div className={styles.inputContainer}>
            <input type='text' placeholder='what do you want to watch?' className={styles.input} />
            <Image src={search} alt='search' className={styles.searchIcon} />
          </div>
          <div className={styles.lgi}>
            <p className={styles.text}>Sign in</p>
            <Image src={menu} alt='menu' />
          </div>
        </nav>
      </Container>
    </header>
  )
}
