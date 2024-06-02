import React from 'react'
import HeroText from "../components/hero-test";
import ContainerForm from "../components/container-form";
import Footer from "../components/footer";
import {Details} from "../components/details";
import styles from "./mobile.module.css";
export default function Mobile() {
  // ../../public/logo.svg
  return (
    <>
    <header className="App-header">
        <img
          alt=""
          src="/hero.png"
        />
        <div className={styles.headerContainer}><img src="../../logo.svg" alt="" srcset="" />
        <p>PRESENTS</p></div>
      </header>
      <div >
        <HeroText />
        <ContainerForm />
        <Details/>
        <div className={styles.div}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="../../public/left.svg" />

            <p className={styles.getCertifiedFrom}>Get Certified From <br/>India’s Biggest <br/>Beauty Platform</p>

          <img className={styles.vectorIcon1} alt="" src="../../public/right.svg" />
        </div>
        <img className={styles.image676Icon} alt="" src="../../public/certificate.svg" />
      </div>
      <Footer/>
      </div>
    </>
  )
}
