import React, { useState } from 'react'
import styles from "./OrderStatsCont.module.css"
import orderStatsData from '../../data/OrderStatsData'
import { Pie } from 'react-chartjs-2'
import {Chart as ChartJS} from "chart.js/auto"

const OrderStatsCont = () => {
    const [orderData,setOrderData]=useState({
        labels:orderStatsData.map((d)=>d.tag),
        datasets:[{
            label:"Net Growth",
            data:orderStatsData.map((d)=>d.value),
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192)',
                'rgba(201, 203, 207)',
                'rgba(255, 99, 132)',
            ],
          }]
    })
  return (
   <section className={styles.outerCont}>
    <h3 className={styles.title}>Order Stats</h3>
    <div className={styles.chartCont}>
        <Pie data={orderData}/>
    </div>
   </section>
  )
}

export default OrderStatsCont