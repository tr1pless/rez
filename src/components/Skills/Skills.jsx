import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-scroll";
import styles from "./skills.module.css";

export const Skills = () => {
  return (
    <>
      <div className={styles.skillsWrp}>
        <div className={styles.custom__shape__divider__top__1658322684}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className={styles.shape__fill}
            ></path>
          </svg>
        </div>
        <div className={styles.listsWrp}>
          <div className={styles.skills}>
            <ScrollAnimation
              offset={50}
              animateIn="fadeIn"
              animateOnce={true}
              delay={900}
              duration={0.5}
            >
              <h2 className={styles.skills__title}>My Skills</h2>
            </ScrollAnimation>

            <ul style={{ padding: "0px" }} className={styles.skills__list}>
              <ScrollAnimation
                offset={50}
                animateIn="bounceInRight"
                animateOnce={true}
                delay={1100}
                duration={1}
              >
                <li className={styles.skills__list__item}>
                  <img
                    style={{ width: "25px", marginRight: "5px" }}
                    src="/images/htmlcss.svg "
                  ></img>
                  HTML + CSS
                </li>
              </ScrollAnimation>
              <ScrollAnimation
                offset={50}
                animateIn="bounceInRight"
                animateOnce={true}
                delay={1300}
                duration={1}
              >
                <li className={styles.skills__list__item}>
                  <img
                    style={{ width: "25px", marginRight: "5px" }}
                    src="/images/js.svg "
                  ></img>
                  JavaScript
                </li>
              </ScrollAnimation>
              <ScrollAnimation
                offset={50}
                animateIn="bounceInRight"
                animateOnce={true}
                delay={1500}
                duration={1}
              >
                <li className={styles.skills__list__item}>
                  <img
                    style={{ width: "25px", marginRight: "5px" }}
                    src="/images/react.svg "
                  ></img>
                  React.js
                </li>
              </ScrollAnimation>
              <ScrollAnimation
                offset={50}
                animateIn="bounceInRight"
                animateOnce={true}
                delay={1700}
                duration={1}
              >
                <li className={styles.skills__list__item}>
                  <img
                    style={{ width: "25px", marginRight: "5px" }}
                    src="/images/redux.svg "
                  ></img>
                  React Redux + Router
                </li>
              </ScrollAnimation>
            </ul>
          </div>
          <div className={styles.languages}>
            <h2>Languages</h2>
            <ul>
              <li className={styles.languagesItem}>
                <img
                  style={{ width: "24px" }}
                  src="/images/ru.svg"
                  alt="ru"
                ></img>
                Russian - Native
              </li>
              <li className={styles.languagesItem}>
                <img
                  style={{ width: "24px" }}
                  src="/images/lv.svg"
                  alt="lv"
                ></img>
                Latvian
              </li>
              <li className={styles.languagesItem}>
                <img
                  style={{ width: "24px" }}
                  src="/images/us.svg"
                  alt="us"
                ></img>
                English
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.linkWrp}>
          <Link
            className={styles.contact__link}
            activeClass="active"
            to="Contact"
            hashSpy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <p className={styles.contact__text}>
              Contact me
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};
