import React from 'react'
import styles from "./Navbar.module.css"
import {AiOutlineSearch} from "react-icons/ai"
import flag from "../../images/india.png"
import {GrProjects} from "react-icons/gr"
import {IoIosNotifications} from "react-icons/io"
import {AiOutlineShoppingCart} from "react-icons/ai"
import anshImg from "../../images/Ansh Image.jpeg"

const Navbar = () => {
  return (
    <>
      <section className={styles.navbarr}>
        <h3>Dashboard</h3>
        <AiOutlineSearch className={styles.searchIcon}/>
        <img className={styles.flag} src={flag} alt="flag" />
        <GrProjects className={styles.navIcons}/>
        <IoIosNotifications className={styles.notification}/>
        <AiOutlineShoppingCart className={styles.navIcons}/>
        <img className={styles.userImage} src={anshImg} alt="user" />
      
      </section>
    </>
  )
}

export default Navbar