import React from 'react'
import styles from "./UserEarningCont.module.css"
import {FiInfo} from "react-icons/fi"
import SemiCircleProgressBar from "react-progressbar-semicircle";

const UserEarningCont = () => {
  return (
   <div className={styles.outerCont}>
    <div className={styles.top}>
      <h3>Earning</h3>
      <FiInfo className={styles.topIcon}/>
    </div>
    <div className={styles.semiProgressCont}><SemiCircleProgressBar  percentage={76} stroke={"rgb(83, 127, 231)"} diameter={150}/>
    <h3 className={styles.semiProgressText}>76%</h3>
    </div>
    <div className={styles.progressBarInfoCont}>
      <p>Earning This Month</p>
      <div className={styles.progressBarInfoCont_info}>
        <p className={styles.percent}>+2.65%</p>
        <p>From previous period</p>
      </div>
    </div>
   </div>
  )
}

export default UserEarningCont