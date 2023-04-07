import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-scroll'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer} id='Social'>
        <hr className={styles.hr} />
        <div className={styles.hr__img__wrp}>
          <Link
            activeClass='active'
            to='Main'
            hashSpy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <svg
              className={styles.hr__img}
              xmlns='http://www.w3.org/2000/svg'
              width='35'
              height='30'
              viewBox='0 0 24 24'
            >
              <path d='M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z' />
            </svg>
          </Link>
        </div>

        <div className={styles.links__wrapper}>
          <ScrollAnimation
            offset={50}
            animateIn='bounceInLeft'
            animateOnce={true}
            delay={900}
            duration={0.75}
          >
            <a
              className={styles.link}
              href='https://www.linkedin.com/in/p-chalih/'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.imageWrp}>
                <svg
                  className={styles.link__image}
                  xmlns='http://www.w3.org/2000/svg'
                  width='35'
                  height='35'
                  viewBox='0 0 24 24'
                >
                  <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                </svg>
              </div>
            </a>
          </ScrollAnimation>
          <ScrollAnimation
            offset={50}
            animateIn='bounceInLeft'
            animateOnce={true}
            delay={600}
            duration={0.75}
          >
            <a
              className={styles.link}
              href='https://www.facebook.com/profile.php?id=100005275561541'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.imageWrp}>
                <svg
                  className={styles.link__image}
                  xmlns='http://www.w3.org/2000/svg'
                  width='35'
                  height='35'
                  viewBox='0 0 24 24'
                >
                  <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
                </svg>
              </div>
            </a>
          </ScrollAnimation>
          <ScrollAnimation
            offset={50}
            animateIn='bounceInLeft'
            animateOnce={true}
            delay={300}
            duration={0.75}
          >
            <a
              className={styles.link}
              href='https://www.instagram.com/mdnss.p/'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.imageWrp}>
                <svg
                  className={styles.link__image}
                  xmlns='http://www.w3.org/2000/svg'
                  width='35'
                  height='35'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
              </div>
            </a>
          </ScrollAnimation>
          <ScrollAnimation
            offset={50}
            animateIn='bounceInLeft'
            animateOnce={true}
            delay={0}
            duration={0.75}
          >
            <a
              className={styles.link}
              href='https://github.com/tr1pless'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.imageWrp}>
                <svg
                  className={styles.link__image}
                  xmlns='http://www.w3.org/2000/svg'
                  width='35'
                  height='35'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z' />
                </svg>
              </div>
            </a>
          </ScrollAnimation>
        </div>
        <p className={styles.footer__text}>
          You can use these links to hire me or invite in your project. I'm glad
          to become a part of your team and gain more new experience.
        </p>
        <div className={styles.footer__bottomBg}>
          <svg
            className={styles.footer__botomBg__img}
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
              opacity='.25'
              className={styles.footer__bottomBg__fill}
            ></path>
            <path
              d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
              opacity='.5'
              className={styles.footer__bottomBg__fill}
            ></path>
            <path
              d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
              className={styles.footer__bottomBg__fill}
            ></path>
          </svg>
        </div>
        <p className={styles.footer__name}>
          PAVEL CHALIH <span className={styles.footer__nameSpan}>©2022</span>
        </p>
      </footer>
    </>
  )
}
