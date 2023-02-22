import React from 'react'
import styles from "./UserInfoSection.module.css"

const UserInfoSection = () => {
  return (
   <>
    <h3>Ansh Bansal</h3>
            <p>Front End Developer</p>
            <div className={styles.product_followerList}>
                <div className={styles.prodList}>
                    <h3>1,269</h3>
                    <p>Products</p>
                </div>
                <div className={styles.followerList}>
                    <h3>5K</h3>
                    <p>Followers</p>
                </div>
            </div>
   </>
  )
}

export default UserInfoSection