import React, { useState } from 'react'
import styles from "./RecentActivityCont.module.css"
import RecentActivityData from '../../data/RecentActivityData'

const RecentActivityCont = () => {
   

  return (
    <>
    <h3 className={styles.title}>Recent Activity</h3>
    <section className={styles.outerCont}>
    {RecentActivityData.map((act)=>{
        return <>
        <div key={act.id} className={styles.activityCont}>
    <div className={styles.activityDate}>
    <p className={styles.activityNum}>{act.date}</p>
    <p>{act.month}</p>
    </div>
    <p className={styles.activityInfo}>{act.info.slice(0,36)}{act.info.length>36?"...":null}{act.info.length>36?<span style={{cursor:"pointer",color:"blue"}}>Read More..</span>:null}</p>
</div>
        </>
    })}

    </section>
    </>
  )
}

export default RecentActivityCont