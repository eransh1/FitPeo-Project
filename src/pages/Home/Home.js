import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from "./Home.module.css"
import revOrdCusData from "../../data/RevOrdCusData"
import RevOrdCusCont from '../../components/REVORDCUS Container/RevOrdCusCont'
import OverViewCont from '../../components/OverView Cont/OverViewCont'
import UserActivityCont from '../../components/UserActivity Cont/UserActivityCont'
import OrderStatsCont from '../../components/OrderStats Cont/OrderStatsCont'
import TopProductCont from '../../components/Top Products Cont/TopProductCont'
import UserContainer from '../../components/USER CONT/UserContainer'

const Home = () => {
  return (
    <>
        <Sidebar/>
        <div className={styles.outerCont}>
            <div className={styles.innerCont}>
            <Navbar/>
            {/* INFO CONTAINER */}
            <div className={styles.infoOuterCont}>
            {/* MIDDLE CONT */}
            <div className={styles.middleEntireDataCont}>
            {/* REVENUE ORDER CUSTOMER CONT */}
            <div className={styles.revOrdCustCont}>
            {revOrdCusData.map((item)=>{
                return<><RevOrdCusCont item={item}/></>
            })}
            </div>
            {/* OVERVIEW CONT */}
            <div className={styles.overViewCont}>
               <OverViewCont/> 
            </div>
            {/* USER Activity ORDER STATS TOP PRODUCTS CONT */}
            <div className={styles.uaOsTpCont}>
                {/* USER ACTIVITY CONT */}
                <div className={styles.userActivityCont}>
                  <UserActivityCont/>
                </div>
                {/* ORDER STATS CONT */}
                <div className={styles.orderStatsCont}>
                  <OrderStatsCont/>
                </div>
                {/* TOP PRODUCTS CONT */}
                <div className={styles.topProductsCont}>
                  <TopProductCont/>
                </div>
            </div>
            </div>
            
            
            
            
            {/* RIGHTMOST CONT */}
            <div className={styles.userInfoRightCont}>
              <UserContainer/>
            </div>
            </div>
            </div>
        </div>
       
    </>
  )
}

export default Home