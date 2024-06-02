import React from 'react'
import styles from "./details.module.css";
import PropTypes from "prop-types";

function Poster(){
    return (
        <div className={styles.detailContainer}>
          <img src="../../detail.png" alt="" />      
        </div>
    )
}
 function Details({ className = "" }) {
  return (
    <div className={[styles.div, className].join(" ")}>
    <Poster/>
<div className={styles.joinContainer}>
<div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="../../left.svg" />
        <div className={styles.whyShouldYouContainer}>
          <p className={styles.whyShouldYou}>Why Should You <br/>Join Airblack?</p>
        </div>
        <img className={styles.vectorIcon1} alt="" src="../../right.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <img className={styles.frameChild} alt="" src="../../Frame 12705.svg" />
          <div className={styles.doItTogetherLiveOn}>
            Do-it-together, live on zoom
          </div>
        </div>
        <div className={styles.frameGroup}>
          <img className={styles.frameItem} alt="" src="../../Frame 12706.svg" />
          <div className={styles.doItTogetherLiveOn}>
            <p className={styles.whyShouldYou}>{`4.8 /5 `}</p>
            <p className={styles.whyShouldYou}>Rated Classes</p>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <img className={styles.frameItem} alt="" src="../../Frame 12707.svg" />
          <div className={styles.doItTogetherLiveOn}>
            <p className={styles.whyShouldYou}>{`35000+ `}</p>
            <p className={styles.whyShouldYou}>Members</p>
          </div>
        </div>
      </div>
      <div className={styles.divframerZlvey9}>
        <div className={styles.divframer923v64}>
          <div className={styles.p2}>
            <b className={styles.applyNow}>Apply Now</b>
          </div>
        </div>
      </div>
      </div>
      </div>

  )
}


Details.propTypes = {
    className: PropTypes.string,
  };
  

export  {Poster,Details};