import React, { useRef } from "react";
import styles from "./main.module.css";
import { mainStyle } from "../Constants";
import { Link } from "react-scroll";

export const Main = () => {
  return (
    <>
      <div id="Main" style={mainStyle}>
        <div className={styles.main__box}>
          <p className={styles.main__text}>
            Hello! My name is
            <span className={styles.main__text__span}> Pavel Chalih</span>.
            <br /> I'm junior front-end developer.
          </p>
          <Link
            className={styles.welcome__link}
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p className={styles.welcome__text}>
              Welcome!
              <span className={styles.welcome__text__span}>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};
