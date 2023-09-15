import React from 'react'
import Logo from '../../../../../assets/Logo-box.svg'
import logout from '../../../../../assets/logout.svg'
import game from '../../../../../assets/game.svg'
import Image from 'next/image'
import styles from './Sidebar.module.scss'
import { constants } from './constant'

export const Sidebar = () => {
    return (
        <div className={styles.main}>
            <Image src={Logo} alt='logo' className={styles.logo}/>
            <div className={styles.routeLinks}>
                {
                    constants.map((itm) => {
                        const { id, img, text } = itm
                        return (
                            <div key={id} className={id === 1 ? `${styles.route} ${styles.routeAlt}` : `${styles.route}`}>
                                <Image src={img} alt={text} />
                                <p className={styles.routeText}>{text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <Image src={game} alt='game' className={styles.game}/>
            <Image src={logout} alt='logout' className={styles.logout}/>
        </div>
    )
}
