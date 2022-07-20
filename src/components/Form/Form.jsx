import React, { useState } from "react";
import styles from "./form.module.css";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import ScrollAnimation from "react-animate-on-scroll";

const SERVICE_ID = "service_7pi8i2c";
const TEMPLATE_ID = "template_f6sv8v7";
const USER_ID = "TR5PHEAy4hnjGz-gg";

export const FormComponent = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title:
            "Thank you for your message, i will answer you as soon as possible",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div id="Contact" className={styles.form__wrp}>
      <div className={styles.custom__shape__divider__top__1657791939}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className={styles.shape__fill}
          ></path>
        </svg>
      </div>
      <ScrollAnimation
        offset={50}
        animateIn="fadeIn"
        animateOnce={true}
        delay={500}
        duration={2}
      >
        <h1 className={`${styles.form__title} ${styles.text}`}>
          Use this form to send me a message.{" "}
        </h1>
      </ScrollAnimation>

      <form className={styles.form} onSubmit={handleOnSubmit}>
        <div className={styles.emailNameWrp}>
          <ScrollAnimation
            offset={50}
            animateIn="fadeIn"
            animateOnce={true}
            delay={700}
            duration={2}
          >
            <div className={`${styles.emailWrp} ${styles.text}`}>
              <label htmlFor="form-input-control-email">E-Mail</label>
              <input
                className={`${styles.email} ${styles.inputs} ${styles.text}`}
                id="form-input-control-email"
                name="user_email"
                required
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            offset={50}
            animateIn="fadeIn"
            animateOnce={true}
            delay={900}
            duration={2}
          >
            <div className={`${styles.nameWrp} ${styles.text}`}>
              <label htmlFor="form-input-control-last-name">Full name</label>
              <input
                className={`${styles.name} ${styles.inputs} ${styles.text}`}
                style={{ backgroundColor: "transparent" }}
                id="form-input-control-last-name"
                name="user_name"
                required
              />
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          className={`${styles.textArea__animation} ${styles.text}`}
          offset={50}
          animateIn="fadeIn"
          animateOnce={true}
          delay={1300}
          duration={2}
        >
          <label
            style={{ margin: "0 20px 20px 20px" }}
            htmlFor="form-textarea-control-opinion"
          >
            Message
          </label>
          <textarea
            className={`${styles.textArea}  ${styles.text}`}
            id="form-textarea-control-opinion"
            name="user_message"
            required
          />
        </ScrollAnimation>

        <div className={styles.buttons__wrp}>
          <ScrollAnimation
            offset={50}
            animateIn="fadeIn"
            animateOnce={true}
            delay={1500}
            duration={2}
          >
            <button type="submit" className={styles.submitBtn}>
              <span className={styles.submitBtn__span}>Send a message!</span>
            </button>
          </ScrollAnimation>
          <ScrollAnimation
            offset={50}
            animateIn="fadeIn"
            animateOnce={true}
            delay={1700}
            duration={2}
          >
            <button type="reset" className={styles.resetBtn}>
              <span className={styles.resetBtn__span}>Clear</span>
            </button>
          </ScrollAnimation>
        </div>
      </form>
    </div>
  );
};
