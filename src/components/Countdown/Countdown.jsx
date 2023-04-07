import React, { useEffect, useState } from 'react'

import styles from './countdown.module.css'

export const Countdown = () => {
  let id = 0
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    let difference = +new Date(`01/01/${++year}`) - +new Date()

    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
        HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
        MONTHS: Math.floor((difference / 1000 / 60) % 60),
        SEC: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <div className={styles.intervalWrp} key={++id}>
        <span className={styles.interval}>{interval}</span>
        <div className={styles.timeIntervalWrp}>
          <span className={styles.timeInterval}>{timeLeft[interval]}</span>
        </div>
      </div>,
    )
  })

  return (
    <>
      <div className={styles.timerWrp}>
        <h2 className={styles.timer__title}>Countdown to New Year</h2>
        <div className={styles.timer}>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      </div>
    </>
  )
}
