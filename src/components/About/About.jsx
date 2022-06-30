import React from "react";
import { css, cssImg } from "../Constants";
import styles from "./about.module.css";

export const About = () => {
  return (
    <>
      <div className={styles.about__wrp}>
        <div id="About" className={styles.about}>
          <h1 className={styles.about__title}>About Me</h1>
          <p className={styles.about__text}>
            I started my journey as a front-end at november of 2021. My final
            point on this path is fullstack developer profession. Currently i
            continuing education as a back-end dev.
          </p>
        </div>
        <div className={styles.skills}>
          <h2 className={styles.skills__title}>My Skills</h2>
          <ul className={styles.skills__list}>
            <li className={styles.skills__list__item}>
              <img src={"https://via.placeholder.com/15"} />
              HTML + CSS
            </li>
            <li className={styles.skills__list__item}>
              <img src={"https://via.placeholder.com/15"} />
              JavaScript
            </li>
            <li className={styles.skills__list__item}>
              <img src={"https://via.placeholder.com/15"} />
              React.js
            </li>
            <li className={styles.skills__list__item}>
              <img src={"https://via.placeholder.com/15"} />
              React Redux + Router
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
