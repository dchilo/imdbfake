import { useState, useEffect } from "react";
import { getInfo } from "../services/getInfo";
import { InfoCard } from "./InfoCard";
import styles from "./InfoPage.module.css";
import { InfoText } from "./InfoText";
import { SeasonsGrid } from "./SeasonsGrid";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { NavBar } from "./NavBar";

export function InfoPage({ params }) {
  const [content, setContent] = useState({});

  const bgURL = "https://image.tmdb.org/t/p/original" + content.backdrop_path;

  useEffect(
    function () {
      getInfo({ params }).then((content) => {
        setContent(content);
        setReady(true);
      });
    },
    [params]
  );

  const [ready, setReady] = useState(false);
  console.log(content);
  console.log(params.type);

  if (params.type === "tv") {
    return ready ? (
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxl"
      >
        <NavBar />
        <div
          className={styles.container}
          style={{ backgroundImage: `url('${bgURL}')` }}
        >
          <div className={styles.bannerInfo}>
            <InfoCard content={content} />
            <InfoText content={content} />
          </div>
          <div className={styles.seasons}>
            <SeasonsGrid seasons={content.seasons} />
          </div>
        </div>
      </ThemeProvider>
    ) : (
      <h1 className={styles.carga}>loading...</h1>
    );
  } else {
    return ready ? (
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxl"
      >
        <NavBar />
        <div
          className={styles.container}
          style={{ backgroundImage: `url('${bgURL}')` }}
        >
          <div className={styles.bannerInfo}>
            <InfoCard content={content} />
            <InfoText content={content} />
          </div>
        </div>
      </ThemeProvider>
    ) : (
      <h1 className={styles.carga}>loading...</h1>
    );
  }
}
