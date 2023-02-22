import React, { useEffect, useState } from 'react'
import styles from "./Sidebar.module.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {MdOutlineSpaceDashboard} from "react-icons/md"
import {RiArrowDropUpLine} from "react-icons/ri"
import {SlCalender} from "react-icons/sl"
import {BsFillChatFill} from "react-icons/bs"
import {AiFillFolderOpen} from "react-icons/ai"
import {SlBasketLoaded} from "react-icons/sl"
import {AiOutlineMail} from "react-icons/ai"
import {FaFileInvoice} from "react-icons/fa"
import {AiFillProject} from "react-icons/ai"
import {MdContacts} from "react-icons/md"
import {BiUserPlus} from "react-icons/bi"
import {CgAttribution} from "react-icons/cg"
import {BsFileEarmarkArrowDownFill} from "react-icons/bs"
import {MdOutlineDesignServices} from "react-icons/md"
import {FaWpforms} from "react-icons/fa"

const Sidebar = ({width}) => {
const[isDasboardOpen,setIsDasboardOpen]=useState(true)
const[isSideBarCalled,setIsSideBarCalled]=useState(true)


  useEffect(()=>{
  
if(width<1552){setIsSideBarCalled(false)}
if(width>1552){setIsSideBarCalled(true)}
  },[width])
  return (
   <>
    <section style={{transform:isSideBarCalled?"translateX(0)":""}} className={styles.sidebar}>
        <div className={styles.top}>
           <h3>Fitpeo</h3>
<GiHamburgerMenu style={{color:isSideBarCalled?"":"#fafafa"}} onClick={()=>setIsSideBarCalled(e=>!e)} className={styles.burger}/>
        </div>

    {/* MENU SECTION */}
    <div className={styles.menu}>
        <p>MENU</p>

        <div onClick={()=>setIsDasboardOpen(e=>!e)} className={styles.dashboardCont}>
            <MdOutlineSpaceDashboard style={{marginRight:".5rem"}}/>
            <h3>Dashboards</h3>
            <RiArrowDropUpLine style={{marginLeft:"auto",marginRight:"1.5rem",fontSize:"1.5rem"}}/>
        </div>
        {isDasboardOpen?<div className={styles.dashboardOptionsCont}>
        <h3 style={{color:"#fafafa"}} className={styles.dashboardOptions}>Ecommerce</h3>
        <h3 className={styles.dashboardOptions}>Saas</h3>
        <h3 className={styles.dashboardOptions}>Crypto</h3>
        </div>:null}
    </div>

    {/* APPLICATION SECTION */}
    <div className={styles.application}>
        <p>APPLICATION</p>
    <div className={styles.applicationOptionCont}><SlCalender/><h3>Calender</h3></div>
    <div className={styles.applicationOptionCont}><BsFillChatFill/><h3>Chat</h3><p>New</p></div>
    <div className={styles.applicationOptionCont}><AiFillFolderOpen/><h3>File Manager</h3></div>
    <div className={styles.applicationOptionCont}><SlBasketLoaded/><h3>Ecommerce</h3><span><RiArrowDropUpLine/></span></div>
    <div className={styles.applicationOptionCont}><AiOutlineMail/><h3>Email</h3><span><RiArrowDropUpLine/></span></div>
    <div className={styles.applicationOptionCont}><FaFileInvoice/><h3>Invoices</h3><span><RiArrowDropUpLine/></span></div>
    <div className={styles.applicationOptionCont}><AiFillProject/><h3>Projects</h3><span><RiArrowDropUpLine/></span></div>
    <div className={styles.applicationOptionCont}><MdContacts/><h3>Contacts</h3><span><RiArrowDropUpLine/></span></div>
    </div>

    {/* LAYOUT CONT */}
    <p className={styles.layoutContText}>LAYOUTS</p>

    {/* PAGES CONT */}
    <p className={styles.layoutContText}>PAGES</p>
    <div className={styles.pagesCont}>
       <div className={styles.pagesContOption}><BiUserPlus/><h3>Authentication</h3><span><BsFileEarmarkArrowDownFill style={{color:"#537FE7"}}/></span></div> 
       <div className={styles.pagesContOption}><CgAttribution/><h3>Utility</h3><span><RiArrowDropUpLine/></span></div> 
    </div>

    {/* PAGES CONT */}
    <p className={styles.layoutContText}>COMPONENTS</p>
    <div className={styles.componentCont}>
       <div className={styles.componentContOption}><MdOutlineDesignServices/><h3>UI Element</h3><span><RiArrowDropUpLine/></span></div> 
       <div className={styles.componentContOption}><FaWpforms/><h3>Forms</h3><span><RiArrowDropUpLine/></span></div> 
    </div>

    </section>
   </>
  )
}

export default Sidebar