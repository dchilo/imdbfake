import { useState } from "react";
import { useLocation } from "wouter";
import styles from './SearchBar.module.css'

export function SearchBar() {

  const [search, setSearch] =useState('')
  const [location, setLocation] = useLocation();
  console.log(location)

  const handleSubmit = evt => {
    evt.preventDefault()
    if (search === '') {
      alert('Campo vacio')
    }
    else {
      setLocation('/search/' + search)
      setSearch('')
    }

  }

  const handleChange = evt => {
    setSearch(evt.target.value)
  }
  
  return (
      <form className={styles.searchBar} onSubmit={handleSubmit}>
          <input placeholder="  Search a movie or tv show here..." className={styles.input} value={search} onChange={handleChange}></input>
          <button className={styles.button} onClick={() => handleSubmit()}>Search</button>
      </form>
  );
}
