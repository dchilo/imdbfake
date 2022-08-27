import styles from './InfoText.module.css'

export function InfoText({ content }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{content.title || content.name}</h1>
      <div className={styles.overview}>
        <h4 className={styles.tagline}>{content.tagline}</h4>
        <h5 className={styles.overviewText}>Overview</h5>
        <p>{content.overview}</p>
      </div>
    </div>
  );
}
