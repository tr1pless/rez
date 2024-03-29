import React from 'react'
import { About } from './About/About'
import { Footer } from './Footer/Footers'
import { FormComponent } from './Form/Form'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import styles from './appRouter.module.css'

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Main />
      <div className={styles.backgroundWrp}>
        <About />
        <FormComponent />
        <Footer />
      </div>
    </>
  )
}
