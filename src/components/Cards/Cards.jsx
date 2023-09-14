import React from 'react'
import Image from 'next/image'
import { getImage } from '@/helpers/getImage/getImage'

export const Cards = ({ itm }) => {
    const { id, poster_path, release_date, vote_average, original_title } = itm
    const utc = new Date(release_date)
    const date = utc.toUTCString()
    return (
        <div data-testid='movie-card'>
            <Image data-testid='movie-poster'
                width={100}
                height={100}
                src={getImage.small(poster_path)}
                alt='img'
            />
            <div>
                <p data-testid='movie-title'>{original_title}</p>
                <p data-testid='movie-release-date'>{date}</p>
            </div>
        </div>
    )
}
