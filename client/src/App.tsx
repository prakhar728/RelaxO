'use client';
import styles from './page.module.css';
import Lottie from "lottie-react";
import money from "./assets/114506-money-goal.json";
import f1 from "./assets/Click.svg"
import f2 from "./assets/savings.svg"
import f3 from "./assets/hello.svg"
import logo from "./assets/RELAXO.png"
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles.landingWrapper}>
      <nav className={styles.nav}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="logo" className={styles.logoImage} />
        </div>
        <button className={styles.navButton} onClick={() => navigate('/app')} >
          Go To App
        </button>
      </nav>
      <div className={styles.landingContent}>
        <div className={styles.bannerContent}>
          <div className={styles.leftBanner}>
            <h2 className={styles.bannerH2} >
              Suscribing <br /> is that Easy.
            </h2>
            <h4 className={styles.bannerH4}>
              Welcome to the Realm of Subscribers. <br />
              A place where subscribing is as easy as a click of a button.
            </h4>
          </div>
          <div className={styles.rightBanner}>
            <Lottie animationData={money} />;
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <img src={f1} alt="Click" />
            Easy one click Suscription.
          </div>
          <div className={styles.featureCard}>
          <img src={f2} alt="Savings" />
            Your Personal Wallet Secure and <br/> Safe
          </div>
          <div className={styles.featureCard}>
          <img src={f3} alt="Hello" />
            Invite people to smooth suscribe.
          </div>
        </div>
      </div>
    </div>
  )
}
