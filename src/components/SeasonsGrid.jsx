import { SeasonCard } from "./SeasonCard";
import styles from "./SeasonsGrid.module.css";

export function SeasonsGrid({ seasons }) {
  return (
    <ul className={styles.seasonsGrid}>
      {seasons.map((seasons) => (
        <SeasonCard key={seasons.id} season={seasons} />
      ))}
    </ul>
  );
}
