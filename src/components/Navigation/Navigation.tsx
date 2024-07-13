import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

export function Navigation(){
    

    return (
        <nav className={styles.nav}>
            <span className={styles.span}>
                <Link className={styles.link} to='/'>Products</Link>
                <Link className={styles.link} to='/about'>About</Link>
            </span>
        </nav>
    )
}