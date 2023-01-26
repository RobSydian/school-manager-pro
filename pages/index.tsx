import Head from "next/head";
import styles from "../styles/Home.module.css";
import StyledHome from "./StyledHome";

export default function Home() {
  return (
    <StyledHome>
      <div className={styles.container}>
        <Head>
          <title>Home page</title>
          <meta name="description" content="Initial page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.div}>
          <h1 className={styles.title}>Initial page</h1>

          <p className={styles.description}>Let&apos;s begin</p>
        </div>
      </div>
    </StyledHome>
  );
}
