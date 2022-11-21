import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import StyledHome from "./StyledHome";
import { Classroom } from "../types/classroom";

export default function Home() {
  const [backendData, setBackendData] = useState<Classroom[]>([]);

  useEffect(() => {
    fetch("/api/classrooms")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        console.log(data);
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
            backendData.map((classroom, i) => <p key={i}>{classroom.name}</p>)
          )}
        </div>
      </div>
    </StyledHome>
  );
}
