import Link from "next/link";
import React from "react";
import styles from "../../../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/privacyConditions">Privacy conditions</Link>
    </footer>
  );
}
