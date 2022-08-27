import styles from "./ContentCard.module.css"
import { Link } from "wouter"


export function ContentCard ({content}) {

    console.log(content)

    const imageURL = "https://image.tmdb.org/t/p/w300" + content.poster_path
    return (
        <Link to={`/${content.media_type}/${content.id}`}>
            <li  className={styles.movieCard}>
                <img width={300} height={450} className={styles.movieImage} src={imageURL} alt={content.title}></img>
                <h3 className={styles.movieInfo}>
                    {content.title || content.name}
                </h3>
            </li>
        </Link>
    )
}