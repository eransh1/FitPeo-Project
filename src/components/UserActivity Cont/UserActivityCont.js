import React, { useState } from 'react'
import styles from "./UserActivityCont.module.css"
import {RiArrowDropDownLine} from "react-icons/ri"
import UserActivityData from '../../data/UserActivityData'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from "chart.js/auto"


const UserActivityCont = () => {
    const[options,setOptions]=useState("Weekly")
    const[isoptionClick,setIsOptionClick]=useState(false)
    const[activityData,setActivityData]=useState({
        labels:UserActivityData.map((d)=>d.month),
        datasets: [
            {
              label: 'Current',
              data: UserActivityData.map((d)=>d.current),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132)',
            },
            {
              label: 'Previous',
              data: UserActivityData.map((d)=>d.previous),
              borderColor: 'rgb(255, 159, 64)',
              backgroundColor: 'rgb(255, 159, 64)',
            }
          ]
    })
  return (
    <section className={styles.outerCont}>
        <div className={styles.top}>
            <h3>User Activity</h3>
            <div onClick={()=>setIsOptionClick(e=>!e)} className={styles.topOptionCont}>{options} <span><RiArrowDropDownLine/></span>
            {isoptionClick?<div onClick={(e)=>{e.stopPropagation();setOptions(e.target.innerHTML);setIsOptionClick(false)}} className={styles.subOptionCont}>
                <p>Yearly</p>
                <p>Monthly</p>
                <p>Weekly</p>
            </div>:null}
            </div>
        </div>
        <div className={styles.middle}>
            <p>This Month</p>
            <h3>16,543</h3>
        </div>

        <div className={styles.bottom}>
        <Line data={activityData} />
        </div>
    </section>
  )
}

export default UserActivityCont