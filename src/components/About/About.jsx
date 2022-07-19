import React from "react";
import styles from "./about.module.css";
import { Link } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import { wrapperStyle } from "../Constants";

export const About = () => {
  return (
    <>
      <div style={wrapperStyle} id="About" className={styles.about__wrp}>
        <div className={styles.custom__shape__divider__top__1657712595}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.shape__fill}
            ></path>
          </svg>
        </div>
        <div className={styles.about}>
          <ScrollAnimation
            offset={50}
            animateIn="fadeIn"
            animateOnce={true}
            delay={500}
            duration={0.5}
          >
            <h1 className={styles.about__title}>About Me</h1>
          </ScrollAnimation>
          <ScrollAnimation
            offset={50}
            animateIn="fadeIn"
            animateOnce={true}
            delay={700}
            duration={1}
          >
            <p className={styles.about__text}>
              I started my journey as a front-end at november of 2021. My final
              point on this path is fullstack developer profession. Currently i
              continuing education as a back-end dev.
            </p>
          </ScrollAnimation>
        </div>
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

          <ul className={styles.skills__list}>
            <ScrollAnimation
              offset={50}
              animateIn="bounceInRight"
              animateOnce={true}
              delay={1100}
              duration={1}
            >
              <li className={styles.skills__list__item}>
                <img src={"https://via.placeholder.com/15"} />
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
                <img src={"https://via.placeholder.com/15"} />
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
                <img src={"https://via.placeholder.com/15"} />
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
                <img src={"https://via.placeholder.com/15"} />
                React Redux + Router
              </li>
            </ScrollAnimation>
          </ul>
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
        __
      </div>
    </>
  );
};
