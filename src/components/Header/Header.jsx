import React from "react";
import styles from "./header.module.css";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.navBar}>
          <li className={`${styles.navItem} ${styles.navMain}`}>
            <Link
              activeClass="active"
              to="Main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Main
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.navAbout}`}>
            <Link
              className={styles.link}
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          {/* <li className={styles.navItem}>Section 3</li> */}
          {/* <li className={styles.navItem}>Section 4</li> */}
          {/* <li className={styles.navItem}>Section 5</li> */}
        </ul>
      </header>
    </>
  );
};
