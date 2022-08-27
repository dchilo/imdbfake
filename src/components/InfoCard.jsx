import styles from "./InfoCard.module.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";

export function InfoCard({ content }) {
  const imageURL = "https://image.tmdb.org/t/p/w400" + content.poster_path;

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxl"
    >
      <div className={styles.container}>
        <ThemeProvider
          breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
          minBreakpoint="xxl"
        >
          <img
            src={imageURL}
            alt={content.title}
            className={styles.poster}
          ></img>
        </ThemeProvider>
        <div className={styles.cardInfo}>
          <div className={styles.company}>
            <h3 className={styles.production}>
              {content.production_companies[0].name}
            </h3>
          </div>
        </div>
        <span>
          Release date: {content.release_date || content.first_air_date}
        </span>
      </div>
    </ThemeProvider>
  );
}
