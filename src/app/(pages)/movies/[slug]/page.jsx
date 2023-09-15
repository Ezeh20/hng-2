"use client"
import React from 'react'
import star from '../../../../assets/Star.svg'
import tick from '../../../../assets/tick.svg'
import more from '../../../../assets/more.svg'
import arrow from '../../../../assets/arrow.svg'
import shows from '../../../../assets/shows.svg'
import Image from 'next/image'
import { Button } from '@/components/Button/Button'
import { Video } from './video/Video'
import { Cast } from './cast/Cast'
import { Sidebar } from './sidebar/Sidebar'
import { useSwr } from '@/hooks/useSwr/useSwr'
import styles from './Details.module.scss'

const Details = ({ params }) => {
    const { slug } = params
    const { data } = useSwr(`/api/movie/${slug}`)

    if (!data?.success) {
        return <p>{data?.message}</p>
    }

    const { popularity, genres, release_date, overview, original_title, vote_average, vote_count, runtime } = data?.data
    const utc = new Date(release_date)
    const date = utc.toUTCString()
    const vote = Number(vote_average)
    const rated = popularity.toFixed(0)

    return (
        <main className={styles.main}>
            <Sidebar />
            <section className={styles.details}>
                <Video slug={slug} />
                <div className={styles.content}>
                    <div className={styles.mainContent}>
                        <div className={styles.titleSection}>
                            <div className={styles.info}>
                                <p data-testid="movie-title">{original_title}</p>
                                <p data-testid="movie-release-date">{date}</p>
                                <p data-testid="movie-runtime">{runtime}</p>
                            </div>
                            <div className={styles.genres}>
                                {
                                    genres?.map(itm => {
                                        const { name } = itm
                                        return (
                                            <p key={name} className={styles.name}>{name}</p>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className={styles.ratingSection}>
                            <div className={styles.star}>
                                <Image src={star} alt='star' className={styles.img} />
                                <p className={styles.avg}>{vote.toFixed(1)}</p>
                            </div>
                            <p>|</p>
                            <p className={styles.count}>{vote_count}</p>
                        </div>
                    </div>
                    <div className={styles.overview}>
                        <div className={styles.left}>
                            <p data-testid="movie-overview" className={styles.over}>{overview}</p>
                            <Cast slug={slug} />
                            <div className={styles.rated}>
                                <div className={styles.popular}>
                                    <Button className={styles.ratedBtn}>
                                        <p>Top rated movie #{rated}</p>
                                    </Button>
                                    <p className={styles.text}>Awards 9 nominations</p>
                                </div>
                                <Image src={arrow} alt='arrow' className={styles.arrow} />
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.btns}>
                                <Button className={styles.btn}>
                                    <Image src={tick} alt='tick' />
                                    <p>See Showtimes</p>
                                </Button>
                                <Button className={`${styles.btn} ${styles.btnAlt}`}>
                                    <Image src={more} alt='more' />
                                    <p>See Showtimes</p>
                                </Button>
                            </div>
                            <div className={styles.imgContainer}>
                                <Image src={shows} alt='shows' className={styles.shows} />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </main>
    )
}
// }

export default Details