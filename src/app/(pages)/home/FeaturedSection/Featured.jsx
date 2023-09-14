import React from 'react'
import Container from '@/components/Container'
import { Cards } from '@/components/Cards/Cards'
import styles from './Featured.module.scss'

export const Featured = ({ data }) => {
  const info = data?.data.results.slice(0, 10)
  console.log(info);
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.featured}>Featured Movie</h2>
          <p className={styles.see}>See more</p>
        </div>
        <div>
          {
            info?.map((itm) => {
              return (
                <Cards key={itm.id} itm={itm} />
              )
            })
          }
        </div>
      </Container>
    </section>

  )
}