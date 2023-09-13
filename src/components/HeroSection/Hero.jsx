"use client"
import React, { useState } from 'react'
import { mock } from './constants'
import { useSwr } from '@/hooks/useSwr/useSwr'
import Navigation from '../Navigation'
import Image from 'next/image'
import { getImage } from '@/helpers/getImage/getImage'
import Container from '../Container'
import styles from './Hero.module.scss'

export const Hero = () => {
  const [current, setCurrent] = useState(0)
  const { data, isLoading, error } = useSwr()
  const result = data?.data.results
  const slides = result?.slice(0, 5)

  return (
    <div className={styles.carousel}>
      <div style={{ position: 'absolute', zIndex: "1", width: '100%' }}>
        <Navigation />
      </div>
      {
        slides?.length > 0 ?
          <div className={styles.carouselContainer}>
            {slides.map((item, idx) => {
              const { id, backdrop_path, original_title } = item

              return (
                <div key={id} className={idx === current ? `${styles.hero} ${styles.heroActive}` : `${styles.hero}`}>
                  <Image fill src={getImage.original(backdrop_path)} alt="backdrop" className={styles.backDrop}
                  />
                  <div className={styles.overlay}>
                    <Container>

                    </Container>
                  </div>

                </div>
              )
            })}
          </div>
          : ""
      }
    </div >
  )
}
