"use client"
import Hero from './(pages)/home/HeroSection'
import Featured from './(pages)/home/FeaturedSection'
import { Footer } from '@/components/Footer/Footer'
import { useSwr } from '@/hooks/useSwr/useSwr'
import styles from './page.module.scss'


export default function Home() {
  const { data, isLoading, error } = useSwr('/api/movie')

  if (isLoading) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    )
  } else if (error) {
    return (
      <div>
        <p>Something went wrong</p>
      </div>
    )
  }

  return (
    <div className={styles.home}>
      <Hero data={data} />
      <Featured data={data} />
      <Footer />
    </div>
  )
}
