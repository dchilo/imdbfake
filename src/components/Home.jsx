
import styles from './Home.module.css'
import { useEffect, useState } from "react";
import { useTrendings } from "../hooks/useTrendings";
import { NavBar } from "./NavBar";
import { ContentGrid } from "./ContentGrid";
import { getGenres } from '../services/getGenres';

export function Home() {

  const [keyword, setKeyword] = useState('all')
  const {content} = useTrendings({keyword})

  const [categories, setCategories] = useState([])

  useEffect(
    function () {
      getGenres().then((genres) => setCategories(genres));
    },
    []
  );

    console.log(categories)

  return (
    <div className={styles.home}>
      <NavBar onClick={(filter) => setKeyword(filter)} categories={categories.genres} />
      <ContentGrid content={content} />
    </div>
  );
}
