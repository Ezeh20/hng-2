"use client"
import Hero from '@/components/HeroSection'
import Featured from '@/components/FeaturedSection'
import { useSwr } from '@/hooks/useSwr/useSwr'
import styles from './page.module.scss'


export default function Home() {
  const { data, isLoading, error } = useSwr()

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
    </div>
  )
}
