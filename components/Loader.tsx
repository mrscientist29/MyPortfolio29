import React from "react";
import { Html } from "@react-three/drei";
import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <Html>
      <div className={styles.loaderContainer}>
        <div className={styles.spinner}></div>
      </div>
    </Html>
  );
};