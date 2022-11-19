import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { User } from "../types/user";

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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Initial page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Initial page</h1>

        <p className={styles.description}>Let&apos;s begin</p>
        {typeof backendData === "undefined" ? (
          <p>Loading...</p>
        ) : (
          backendData.map((user, i) => <p key={i}>{user.name}</p>)
        )}
      </main>

      <footer></footer>
    </div>
  );
}
