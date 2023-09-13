"use client"
import Hero from '@/components/HeroSection'
import Featured from '@/components/FeaturedSection'
import styles from './page.module.scss'


export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Featured />
    </div>
  )
}
