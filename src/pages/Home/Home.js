import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from "./Home.module.css"
import revOrdCusData from "../../data/RevOrdCusData"
import RevOrdCusCont from '../../components/REVORDCUS Container/RevOrdCusCont'
import OverViewCont from '../../components/OverView Cont/OverViewCont'

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
                <div className={styles.userActivityCont}></div>
                {/* ORDER STATS CONT */}
                <div className={styles.orderStatsCont}></div>
                {/* TOP PRODUCTS CONT */}
                <div className={styles.topProductsCont}></div>
            </div>
            </div>
            
            
            
            
            {/* RIGHTMOST CONT */}
            <div className={styles.userInfoRightCont}></div>
            </div>
            </div>
        </div>
       
    </>
  )
}

export default Home