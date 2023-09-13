"use client"
import React, { useState } from 'react'
import { useSwr } from '@/hooks/useSwr/useSwr'
import Navigation from '../Navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../Button/Button'
import { getImage } from '@/helpers/getImage/getImage'
import play from '../../assets/play.svg'
import imbd from '../../assets/imbd.svg'
import tomato from '../../assets/tomato.svg'
import Container from '../Container'
import styles from './Hero.module.scss'

export const Hero = () => {
  const [current, setCurrent] = useState(4)
  const { data, isLoading, error } = useSwr()
  const result = data?.data.results
  const slides = result?.slice(0, 5)

  console.log(slides);
  return (
    <div className={styles.carousel}>
      <div style={{ position: 'absolute', zIndex: "1", width: '100%' }}>
        <Navigation />
      </div>
      {
        slides?.length > 0 ?
          <div className={styles.carouselContainer}>
            {slides.map((item, idx) => {
              const { id, backdrop_path, overview, vote_average, original_title } = item
              let imbdRating = vote_average * 10
              let tomatoRating = vote_average * 100 / 10

              return (
                <div key={id} className={idx === current ? `${styles.hero} ${styles.heroActive}` : `${styles.hero}`}>
                  <Image fill src={getImage.original(backdrop_path)} alt="backdrop" className={styles.backDrop}
                  />
                  <div className={styles.overlay}>
                    <Container>
                      <div className={styles.overlayContent}>
                        <p className={styles.title}>{original_title}</p>
                        <p className={styles.overview}>{overview}</p>
                        <div className={styles.rating}>
                          <div className={styles.icon}>
                            <Image src={imbd} alt='imbd' />
                            <p>{imbdRating.toFixed(1)} / 100</p>
                          </div>
                          <div className={styles.icon}>
                            <Image src={tomato} alt='tomato' />
                            <p>{tomatoRating}%</p>
                          </div>
                        </div>
                        <Link href={`/${id}`} className={styles.link}>
                          <Button className={styles.button}>
                            <Image src={play} alt='play' />
                            <p>Watch trailer</p>
                          </Button>
                        </Link>
                      </div>
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
