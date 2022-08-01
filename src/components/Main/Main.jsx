import React from "react";
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
            offset={2}
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
        <div className={styles.custom__shape__divider__bottom__1657712270}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className={styles.shape__fill}
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};
