import React, { useState } from "react";
import styles from "./form.module.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [textError, setTextError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (name.length == 0 ?? email.length == 0 ?? text.length == 0) {
    //   if (name.length == 0) {
    // setNameError(true);
    // console.log(nameError);
    //   } else {
    // setNameError(false);
    //   }
    //   if (email.length == 0) {
    // setEmailError(true);
    // console.log(emailError);
    //   } else {
    // setEmailError(false);
    //   }
    //   if (message.length == 0) {
    // setTextError(true);
    // console.log(textError);
    //   } else {
    // setTextError(false);
    //   }
    // }
    // e.preventDefault();
    // console.log(email);
    // console.log(name);
    // console.log(message);
    // console.log(emailError);
    // console.log(nameError);
    // console.log(textError);
    if (name !== "") {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  return (
    <>
      <div className={styles.form__wrp}>
        <h1 className={styles.form__title}>
          Use this form to send me a message.
        </h1>
        <form className={styles.form} action="submit">
          {emailError
            ? true
            : <p className={styles.error}>Enter your email.</p> || null}
          <label className={styles.label} htmlFor="email">
            Email.
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={styles.email}
            value={email}
            id="email"
            type="email"
          />
          {nameError
            ? true
            : <p className={styles.error}>Enter your name.</p> || null}
          <label className={styles.label} htmlFor="name">
            Name.
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className={styles.name}
            id="name"
            type="text"
            value={name}
          />
          {textError
            ? true
            : <p className={styles.error}>Enter your message.</p> || null}
          <label className={styles.label} htmlFor="text">
            Message.
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={styles.text}
            id="text"
          />
          <div className={styles.buttons__wrp}>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              className={styles.form__button}
            >
              Submit
            </button>
            <button className={styles.form__button}>Clear</button>
          </div>
        </form>
      </div>
    </>
  );
};
