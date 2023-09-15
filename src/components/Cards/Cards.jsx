"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getImage } from '@/helpers/getImage/getImage'
import favor from '../../assets/Favorite.svg'
import fav from '../../assets/loved.png'
import imbd from '../../assets/imbd.svg'
import tomato from '../../assets/tomato.svg'
import styles from './Cards.module.scss'

export const Cards = ({ itm }) => {
    const [liked, setLiked] = useState(false)
    const { id, poster_path, release_date, vote_average, original_title } = itm
    const utc = new Date(release_date)
    const date = utc.toUTCString()
    const imbdRating = (vote_average * 10).toFixed(1)
    const tomatoRating = (vote_average * 10)

    const like = () => {
        setLiked(prev => !prev)
    }

    return (
        <div data-testid='movie-card' style={{ position: 'relative' }}>
            <Link prefetch={false} href={`/movies/${id}`}>
                <div className={styles.cardContainer}>
                    <Image data-testid='movie-poster'
                        width={250}
                        height={370}
                        src={getImage.small(poster_path)}
                        alt='img'
                        className={styles.img}
                    />
                    <div className={styles.content}>
                        <p data-testid='movie-release-date' className={styles.date}>{date}</p>
                        <p data-testid='movie-title' className={styles.title}>{original_title}</p>
                        <div className={styles.rating}>
                            <div className={styles.ratingContent}>
                                <Image src={imbd} alt='imbd' />
                                <p>{imbdRating} / 100</p>
                            </div>
                            <div className={styles.ratingContent}>
                                <Image src={tomato} alt='tomato' />
                                <p>{tomatoRating}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <button className={styles.btn} onClick={like}>
                {
                    liked ? <Image src={fav} alt='fav' className={styles.img} />
                        : <Image src={favor} alt='favor' className={styles.img} />
                }
            </button>
        </div>
    )
}
