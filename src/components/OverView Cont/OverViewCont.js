import React, { useState } from 'react'
import styles from "./OverViewCont.module.css"
import overviewData from '../../data/OverviewData'
import {Bar} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"

const OverViewCont = () => {
  const [overviewInfo,setOverViewInfo]=useState({
    labels:overviewData.map((d)=>d.month),
    datasets:[{
      label:"Net Growth",
      data:overviewData.map((d)=>d.netGain),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
    }]
  })
  return (
   <section className={styles.outerCont}>
    <div className={styles.leftCont}>
      <h3>Overview</h3>  
      <div className={styles.thisMonthInfo}>
        <p>This Month</p>
        <div className={styles.priceNProfitCont}>
            <h3>$24,568</h3>
            <p>+2.66%</p>
        </div>
      </div>
      <div className={styles.orderSaleCont}>
        <div className={styles.firstItem}>
            <p>Orders</p>
            <h4>5,643</h4>
        </div>
        <div className={styles.secongItem}>
            <p>Sales</p>
            <h3>16,273</h3>
        </div>
      </div>
      <div className={styles.orderSaleCont}>
        <div className={styles.firstItem}>
            <p>Order Value</p>
            <h4>12.03%</h4>
        </div>
        <div className={styles.secongItem}>
            <p>Customers</p>
            <h3>21,456</h3>
        </div>
      </div>
      <div className={styles.orderSaleCont}>
        <div className={styles.firstItem}>
            <p>Income</p>
            <h4>$35,652</h4>
        </div>
        <div className={styles.secongItem}>
            <p>Expenses</p>
            <h3>$12,248</h3>
        </div>
      </div>
    </div>

    <div className={styles.rightCont}>
      <Bar data={overviewInfo} options= {{responsive: true}}/>
    </div>

   </section>
  )
}

export default OverViewCont