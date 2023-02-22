import React, { useEffect, useState } from 'react'
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
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import {AiFillCloseCircle} from "react-icons/ai"
const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const[rightMostCont,setRightMostCont]=useState(false)
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);



  useEffect(()=>{
    console.log("width",width)
if(width<1220){setRightMostCont(true)}
if(width>1220){setRightMostCont(false)}
  },[width])

  return (
    <>
        <Sidebar width={width}/>
        <div className={styles.outerCont}>
            <div className={styles.innerCont}>
            <Navbar/>
            {/* INFO CONTAINER */}
            <div className={styles.infoOuterCont}>
            {rightMostCont?<BsFillArrowLeftCircleFill onClick={()=>setRightMostCont(false)} className={styles.arrowRight}/>:null}
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
            <div style={{transform:rightMostCont?"translateX(490px)":""}} className={styles.userInfoRightCont}>
            {width<1220?<AiFillCloseCircle onClick={()=>setRightMostCont(true)} className={styles.close}/>:null}
              <UserContainer />
            </div>

            </div>
            </div>
        </div>
       
    </>
  )
}

export default Home