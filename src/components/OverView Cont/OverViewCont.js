import React from 'react'
import styles from "./OverViewCont.module.css"

const OverViewCont = () => {
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

    <div className={styles.rightCont}></div>

   </section>
  )
}

export default OverViewCont