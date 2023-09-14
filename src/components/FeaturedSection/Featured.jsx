import React from 'react'
import Container from '../Container';
import styles from './Featured.module.scss'

export const Featured = ({ data }) => {
  console.log(data);
  return (

    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.featured}>Featured Movie</h2>
          <p className={styles.see}>See more</p>
        </div>
      </Container>
    </section>

  )
}
