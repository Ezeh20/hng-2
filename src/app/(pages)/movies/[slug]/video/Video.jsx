"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Video.module.scss'

export const Video = ({ slug }) => {
    const [video, setVideo] = useState()

    useEffect(() => {
        const initial = {
            id: slug,
            media: 'videos'
        }
        const fetch = async () => {
            const { data } = await axios.post(`/api/media/`, initial)
            setVideo(data.data.results[0])
        }
        fetch()
    }, [slug])
    

    return (
        <div className={styles.video}>
            {
                video ?
                    video?.key.length > 0 ?
                        <iframe key={video?.id} width="100%" height="100%" src={`https://www.youtube.com/embed/${video?.key}?autoplay=1`} frameBorder="0" allow="autoplay"></iframe>
                        : <p>No media to play</p>
                    : 'loading'
            }
        </div>
    )

}
