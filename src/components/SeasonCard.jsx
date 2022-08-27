import styles from "./SeasonCard.module.css";

export function SeasonCard({ season }) {
  console.log(season);

  let year = ''

  if (season.air_date === null) {
    year = ''
  }
  else {
    year = (season.air_date).substring(0,-6);
  }

  const imageURL = "https://image.tmdb.org/t/p/w300" + season.poster_path;
  return (
    <li className={styles.seasonCard}>
      <div className={styles.seasonPoster}>
        <img
          width={130}
          className={styles.seasonImage}
          src={imageURL}
          alt={season.title}
        ></img>
      </div>
      <div className={styles.seasonInfo}>
        <div className={styles.miniHeader}>
          <h3 className={styles.seasonInfo}>{season.title || season.name}</h3>
          <span className={styles.episodesCount}>{year} | {season.episode_count} Episodes</span>
        </div>
        <p className={styles.overview}>{season.overview}</p>
      </div>
      
    </li>
  );
}
