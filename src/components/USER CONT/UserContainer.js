import React from 'react'
import styles from "./UserContainer.module.css"
import {BsThreeDots} from "react-icons/bs"
import userImg from "../../images/Ansh Image.jpeg"
import UserInfoSection from './UserInfoSection/UserInfoSection'
import UserEarningCont from './User Earning Section/UserEarningCont'
import RecentActivityCont from '../RecentActivity Cont/RecentActivityCont'

const UserContainer = () => {
  return (
    <section className={styles.outerCont}>
        <div className={styles.top}>
            <BsThreeDots className={styles.threeDots}/>
            <img className={styles.userImagePhoto} src={userImg} alt="user" />
        </div>
        <div className={styles.userName_infoCont}>
        <UserInfoSection/>
        </div>
        
        <UserEarningCont/>
        <RecentActivityCont/>

    </section>
  )
}

export default UserContainer