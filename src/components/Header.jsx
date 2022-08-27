import styles from './Header.module.css'
import { Link } from 'wouter'
import { SearchBar } from './SearchBar'

export function Header () {
    return (
        <div className={styles.header}>
            <Link to='/' >
                <h1 className={styles.homeLogo}>The cheapest IMDb</h1>
            </Link>
            <SearchBar />
        </div>
    )
}