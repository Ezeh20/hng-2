import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Cast.module.scss'

export const Cast = ({ slug }) => {
    const [cast, setCast] = useState()
    const [crew, setCrew] = useState()

    useEffect(() => {
        const initial = {
            id: slug,
            media: 'credits'
        }
        const fetch = async () => {
            const { data } = await axios.post(`/api/media/`, initial)
            setCast(data.data.cast.slice(0, 4))
            setCrew(data.data.crew)
        }
        fetch()
    }, [slug])


    const directing = () => {
        const director = crew?.filter((itm) => itm.job === 'Director')
        return director
    }

    const writing = () => {
        const writers = crew?.filter((itm) => itm.department === 'Writing')
        return writers
    }

    const director = directing()
    const writers = writing()

    return (
        <div className={styles.casting}>
            <div className={styles.castContent}>
                <p className={styles.role}>Director :</p>
                {
                    director?.map((itm, idx) => {
                        return (
                            <p key={idx} className={styles.name}>
                                {itm.name}
                                {director.length - 1 === idx ? '' : ','}
                            </p>
                        )
                    })
                }
            </div>
            <div className={styles.castContent}>
                <p className={styles.role}>Writers :</p>
                {
                    writers?.map((itm, idx) => {
                        return (
                            <p key={idx} className={styles.name}>
                                {itm.name}
                                {writers.length - 1 === idx ? '' : ','}
                            </p>
                        )
                    })
                }
            </div>
            <div className={styles.castContent}>
                <p className={styles.role}>Stars :</p>
                {
                    cast?.map((itm, idx) => {
                        return (
                            <p key={idx} className={styles.name}>
                                {itm.name}
                                {cast.length - 1 === idx ? '' : ','}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}
