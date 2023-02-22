import React, { useState } from 'react'
import styles from "./TopProductCont.module.css"
import {RiArrowDropDownLine} from "react-icons/ri"
import TopPrductData from '../../data/TopPrductData'

const TopProductCont = () => {
    const[options,setOptions]=useState("Weekly")
    const[isoptionClick,setIsOptionClick]=useState(false)
  return (
    <section className={styles.outerCont}>
       <div className={styles.top}>
            <h3>Top Products</h3>
            <div onClick={()=>setIsOptionClick(e=>!e)} className={styles.topOptionCont}>{options} <span><RiArrowDropDownLine/></span>
            {isoptionClick?<div onClick={(e)=>{e.stopPropagation();setOptions(e.target.innerHTML);setIsOptionClick(false)}} className={styles.subOptionCont}>
                <p>Yearly</p>
                <p>Monthly</p>
                <p>Weekly</p>
            </div>:null}
            </div>
        </div>
        <div className={styles.listCont}>
        {TopPrductData.map((l)=>{
            return <>
            <div key={l.id} className={styles.listItem}>
            <div className={styles.numCont}>#{l.id}</div>
            <div className={styles.listInfoCont}>
                <p>{l.name}</p>
                <h3>{l.amt}</h3>
            </div>
            <p className={styles.listValue}>{l.sale}</p>
           </div> 
            </>
        })}
          
        </div>
    </section>
  )
}

export default TopProductCont