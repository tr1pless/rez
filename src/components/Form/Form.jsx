import React, { useState } from "react";
import styles from "./form.module.css";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data, errors);

  const [name, setName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className={styles.form__wrp}>
      <h1 className={styles.form__title}>
            Use this form to send me a message.
        </h1>
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <label className={styles.label} htmlFor="name">
              First name.
            </label>
      <input
      onChange={(e) => setName(e.target.value)}
      value={name}
      id="name"
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
      />
        <label className={styles.label} htmlFor="lName">
              Last name.
            </label>
      <input
      onChange={(e) => setLName(e.target.value)}
      value={lName}
      id="lName"
        type="text"
        placeholder="Last name"
        {...register("Last name", { required: true, maxLength: 100 })}
      />
       <label className={styles.label} htmlFor="email">
            Email.
           </label>
      <input
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      className={styles.email}
      id='email'
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
    <label className={styles.label} htmlFor="number">
              Phone number.
            </label>
      <input
      value={number}
      id="number"
      onChange={(e) => setNumber(e.target.value)}
        type="number"
        placeholder="Phone number"
        {...register("Phone number", {  maxLength: 12 })}
      />
      <textarea
      value={message}
      className={styles.text}
      id="message"
      onChange={(e) => setMessage(e.target.value)}
      {...register("Text", {required: true})} />

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
  );
};
