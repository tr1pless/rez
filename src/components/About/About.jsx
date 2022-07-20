import React from "react";
import styles from "./about.module.css";
import { Link } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import { wrapperStyle } from "../Constants";

export const About = () => {
  return (
    <>
      <div id="About" className={styles.about__wrp}>
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
              <span>My name is Pavel, i'm from Riga.</span>
              <br />I have serious passion for UI effects, animations and
              creating intuitive, dynamic user experiences. I started my journey
              as a front-end at november of 2021. My final point on this path is
              fullstack developer profession. Currently i continuing education
              as a back-end dev.
            </p>
          </ScrollAnimation>
        </div>
        <div className={styles.features}>
          <div className={`${styles.aboutCard} ${styles.card1}`}>
            <h2 className={`${styles.cardText}`}>
              <svg
                style={{ marginRight: "5px", fill: "#b95656" }}
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 10h-1v-2h-11v13h5v1.617c0 .524.121 1.058.502 1.383h-5.002c-.398 0-.779-.158-1.061-.439-.281-.282-.439-.663-.439-1.061v-15c0-.398.158-.779.439-1.061.282-.281.663-.439 1.061-.439h10c.398 0 .779.158 1.061.439.281.282.439.663.439 1.061v2.5zm2 2.25c0-.69-.56-1.25-1.25-1.25h-5.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h5.5c.69 0 1.25-.56 1.25-1.25v-10.5zm-15.407 11.75h-6.593l2.599-3h3.401v1.804c0 .579.337 1.09.593 1.196zm11.407-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm3-3v-6.024h-6v6.024h6zm-2-15h-2v-3h-17v15h6v2h-8v-19h21v5zm-.5 7h-1c-.276 0-.5.224-.5.5s.224.5.5.5h1c.275 0 .5-.224.5-.5s-.225-.5-.5-.5z" />
              </svg>
              Responsive
            </h2>
            <p className={`${styles.cardText}`}>
              My projects will work on any device, pc, tablet or phone.
            </p>
          </div>
          <div className={`${styles.aboutCard} ${styles.card2}`}>
            <h2 className={`${styles.cardText}`}>
              <svg
                style={{ marginRight: "5px", fill: "black" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.734c0 4.164-3.75 6.98-3.75 10.266h-1.992c.001-2.079.996-3.826 1.968-5.513.913-1.585 1.774-3.083 1.774-4.753 0-3.108-2.518-4.734-5.004-4.734-2.482 0-4.996 1.626-4.996 4.734 0 1.67.861 3.168 1.774 4.753.972 1.687 1.966 3.434 1.967 5.513h-1.991c0-3.286-3.75-6.103-3.75-10.266 0-4.343 3.498-6.734 6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4 11.766c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm0 2c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm-1.701 3.159c-.19.216-.465.341-.752.341h-1.094c-.287 0-.562-.125-.752-.341l-1.451-1.659h5.5l-1.451 1.659zm2.013-18.767c-.489.287-.854.713-1.06 1.312-.556 1.609.373 2.928-.235 4.432-.355.875-1.104 1.33-1.889 1.41-.15 1.551.059 3.702.545 4.953h-1.113c-.581-2.322-.268-6.441 1.025-8.764-.787.603-1.564 2.254-1.79 3.567-2.738-1.642-.659-6.91 4.517-6.91z" />
              </svg>
              Intuitive
            </h2>
            <p className={`${styles.cardText}`}>
              Strong preference for easy to use, intuitive UI.
            </p>
          </div>
          <div className={`${styles.aboutCard} ${styles.card3}`}>
            <h2 className={`${styles.cardText}`}>
              <svg
                style={{ marginRight: "5px", fill: "#b95656" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M8.011 6.215c-1.711-.009-3.86.918-5.499 2.557-.625.625-1.176 1.355-1.601 2.174 1.479-1.119 3.057-1.47 4.903-.434.544-1.437 1.27-2.9 2.197-4.297zm9.785 9.773c-1.516.991-3.007 1.706-4.297 2.21 1.036 1.848.686 3.424-.434 4.902.819-.424 1.549-.975 2.175-1.602 1.644-1.642 2.572-3.796 2.556-5.51zm6.152-15.946c-.412-.028-.816-.042-1.213-.042-8.602 0-13.498 6.558-15.28 11.833l4.728 4.729c5.428-1.946 11.817-6.661 11.817-15.172 0-.439-.017-.888-.052-1.348zm-9.888 9.91c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0 .391 1.023 0 1.414-1.024.39-1.414 0zm2.828-2.828c-.781-.78-.781-2.047 0-2.828s2.048-.781 2.828 0c.781.781.781 2.047 0 2.828s-2.047.781-2.828 0zm-8.021 8.625l1.013 1.012c-.942.954-1.907 2.083-2.287 3.637l-1.39-.34c.467-1.912 1.607-3.24 2.664-4.309zm-1.634-1.633l1.01 1.01c-1.119 1.103-2.413 2.203-4.307 2.666l-.34-1.39c1.553-.381 2.69-1.35 3.637-2.286zm2.746 6.446c.206 2.029-.946 3.265-2.48 3.421-.902.092-1.701-.205-2.356-.88-1.575.556-3.074-.047-3.864-1.172-.622-.883-.76-2.002-.382-3.074-.676-.656-.973-1.448-.88-2.356.154-1.521 1.361-2.694 3.484-2.475l.21 1.208c-.716.067-1.379.104-1.809.533-.722.723-.504 2.229.851 2.629-.899.904-.813 2.202-.137 2.914.707.747 2.057.863 2.987-.063.416 1.41 1.942 1.537 2.629.851.424-.424.465-1.075.531-1.782l1.216.246z" />
              </svg>
              Dynamic
            </h2>
            <p className={`${styles.cardText}`}>
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </div>
        </div>
        <div className={styles.custom__shape__divider__bottom__1658322486}>
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
      </div>
    </>
  );
};
