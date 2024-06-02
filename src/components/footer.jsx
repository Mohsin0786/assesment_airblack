import PropTypes from "prop-types";
import styles from "./footer.module.css";
import { Poster } from "../components/details";


export default function footer({ className = "" }) {
  return (
    <>
      <div className={[styles.footer, className].join(" ")}>
        <Poster />
        <div className={styles.communityContainer}>

          <div className={styles.p}>
            <div className={styles.joinOurGrowingContainer}>
              <p className={styles.joinOurGrowing}>Join our growing <br/>community of <br/>35,000+ alumni</p>


            </div>
          </div>
          <div className={styles.divframerZlvey9}>
            <div className={styles.divframer923v64}>
              <div className={styles.p1}>
                <b className={styles.applyNow}>Apply Now</b>
              </div>
            </div>
          </div>
          <div className={styles.instagramParent}>
            <img className={styles.Icons} alt="" src="../../Instagram.svg" />
            <img className={styles.Icons} alt="" src="../../fb.svg" />
            <img className={styles.Icons} alt="" src="../../Linkedin.svg" />
            <img className={styles.Icons} alt="" src="../../twitter.svg" />
          </div>
        </div>
      </div>
    </>
  )
}
