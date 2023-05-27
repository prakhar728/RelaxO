'use client';
import styles from './page.module.css';

import f1 from "./assets/f1.png"
import f2 from "./assets/f2.png"
import f3 from "./assets/f3.png"
import logo from "./assets/logo.svg"
import { useNavigate } from "react-router-dom";
import bannerVector from "./assets/bannerVector.svg";

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
              One Click <span>Subscriptions</span>
              <br />
              Discover the <p>Power of Ease</p>
            </h2>
            <h4 className={styles.bannerH4}>
            Welcome to the Realm of Subscribers. A place where subscribing is as easy as a click of a button.
            <br />

Yes, it is THAT easy!
            </h4>
          </div>
          <div className={styles.rightBanner}>
            {/* <Lottie animationData={money} />; */}
            <img src={bannerVector} alt="Vector" />
          </div>
        </div>
        <div className={styles.features}>
            <img src={f1} alt="Click" className={styles.featureCard} />
          <img src={f2} alt="Savings"  className={styles.featureCard}/>
          <img src={f3} alt="Hello"  className={styles.featureCard}/>
        </div>
      </div>
    </div>
  )
}
