
import { ContentCard } from "./ContentCard";
import styles from "./ContentGrid.module.css";

export function ContentGrid( {content} ) {

  return (
    <div>
      <ul className={styles.moviesGrid}>
        {content.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </ul>
    </div>
  );
}
