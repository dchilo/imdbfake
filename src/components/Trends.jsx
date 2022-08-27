
import { ContentGrid } from "./ContentGrid";
import { useTrendings } from "../hooks/useTrendings";
import styles from './Trends.module.css'
import { NavBar } from "./NavBar";
import { getGenres } from "../services/getGenres";

export function Trends({params}) {

  const keyword = params.kind
  const {content} = useTrendings({keyword})

  const {genres} = getGenres()
  console.log(genres)

  return (
    <div className={styles.trending}>
        <NavBar />
        <ContentGrid content={content} />
    </div>
    
  )


}
