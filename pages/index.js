import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col justify-center pt-12 content-center h-screen">
      <h1
        className={`text-lg font-bold text-center tracking-tight ${styles.title}`}
      >
        Welcome to Library
      </h1>
      <h2 className={`text-md font-semibold text-center ${styles.subtitle}`}>
        You can browse through the books and magazines and details of authors.
      </h2>
    </div>
  );
}
