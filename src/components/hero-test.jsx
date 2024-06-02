import PropTypes from "prop-types";
import styles from "./hero-text.module.css";

const HeroText = ({ className = "" }) => {
  return (
    <div className={[styles.heroText, className].join(" ")}>
      <div className={styles.title}>
        <p className={styles.professionalOnline}>Professional Online <br/>Makeup Course</p>
      </div>
      <div className={styles.divframer1htwsli}>
        <div className={styles.divframer171cvlqParent}>
          <div className={styles.divframer171cvlq}>
            <img
              className={styles.svg1509293611944Icon}
              alt=""
              src="/badge.svg" 
            />
          </div>
          <div className={styles.divframerYhfsxu}>
            <div className={styles.p}>
              <div className={styles.certificationProgramme}>
                Certification Programme
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divframer2kuydl}>
          <div className={styles.divframer1jff7sf}>
            <img
              className={styles.svg335647554937Icon}
              alt=""
              src="/star.svg"
            />
          </div>
          <div className={styles.divframer1j9x5ww}>
            <div className={styles.p1}>
              <div className={styles.rated4855}>Rated 4.85/5</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.points}>
        <div className={styles.div}>
          <div className={styles.icon}>
            <img
              className={styles.svg78612104852Icon}
              alt=""
              src="/tick.svg"
            />
          </div>
          <div className={styles.text}>India’s No.1 Online Makeup Course</div>
        </div>
        <div className={styles.div}>
          <div className={styles.icon}>
            <img
              className={styles.svg78612104852Icon}
              alt=""
              src="/tick.svg"
            />
          </div>
          <div className={styles.text}>
            Learn by LIVE Do-it-Together Classes
          </div>
        </div>
        <div className={styles.div}>
          <div className={styles.icon}>
            <img
              className={styles.svg78612104852Icon}
              alt=""
              src="/tick.svg"
            />
          </div>
          <div className={styles.text}>
            Unlimited Practise Session to master skills
          </div>
        </div>
      </div>
    </div>
  );
};

HeroText.propTypes = {
  className: PropTypes.string,
};

export default HeroText;
