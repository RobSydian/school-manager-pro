import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { User } from "../types/user";
import StyledHome from "./StyledHome";

export default function Home() {
  const [backendData, setBackendData] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
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
          {typeof backendData === "undefined" ? (
            <p>Loading...</p>
          ) : (
            backendData.map((user, i) => <p key={i}>{user.name}</p>)
          )}
        </div>
      </div>
    </StyledHome>
  );
}
