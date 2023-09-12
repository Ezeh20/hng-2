"use client"
import React, { useState } from 'react'
import { mock } from './constants'
import Navigation from '../Navigation'
import Image from 'next/image'
import Container from '../Container'
import styles from './Hero.module.scss'

export const Hero = () => {
  const [current, setCurrent] = useState(0)
  return (
    <div className={styles.carousel}>
      <div style={{ position: 'absolute', zIndex: "1", width: '100%' }}>
        <h1>h1</h1>
        <Navigation />

        <button onClick={() => setCurrent(prev => prev + 1)}>click</button>
      </div>
      {
        mock.length > 0 ?
          <div className={styles.carouselContainer}>
            {mock.map((item, idx) => {
              const { id, backdrop, title, rating, overview, btn } = item

              return (
                <div key={id} className={idx === current ? `${styles.hero} ${styles.heroActive}` : `${styles.hero}`}>
                  <Image src={backdrop} alt="backdrop" className={styles.backDrop}
                  />
                  <div className={styles.overlay}>
                    <Container>
                      <h1>Ade</h1>
                    </Container>
                  </div>

                </div>
              )
            })}
          </div>
          : ""
      }
    </div >
    // <div className={styles.main}>
    //   {/* <div style={{ position: 'absolute', zIndex: "1", width: '100%' }}>
    //     <h1>h1</h1>
    //     <Navigation />
    //   </div> */}
    //   <div className={styles.heroContent}>
    //     {
    //       mock.map((itm, idx) => {
    //         const { id, backdrop, title, rating, overview, btn } = itm
    //         return (
    //           <div key={id} className={idx === current ? `${styles.hero} ${styles.heroActive}` : `${styles.hero}`}
    //             style={{ position: 'relative', height: '100%' }}>
    //             <Image src={backdrop} sizes='100vw' fill alt='title' />
    //             <div className={styles.overlay}>
    //               <Container>
    //                 <p>{title}</p>
    //                 <p>{rating}</p>
    //                 <p>{overview}</p>
    //                 <button>{btn}</button>
    //               </Container>
    //             </div>
    //           </div>
    //         )
    //       })
    //     }
    //   </div>
    // </div>
  )
}
