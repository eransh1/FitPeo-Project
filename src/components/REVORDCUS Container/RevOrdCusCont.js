import React from 'react'
import styles from "./RevOrdCusCont.module.css"

const RevOrdCusCont = ({item}) => {
    console.log(item)
  return (
    <>
<section className={styles.outerCont}>
    <div className={styles.iconCont}>{item.icon}</div>
    <div className={styles.infoCont}>
        <p>{item.name}</p>
        <h5>{item.price}</h5>
    </div>
    <div className={styles.profitCont}>
        <h5 style={{color:item.profit?"green":"red"}}>{item.net}</h5>
    </div>

</section>
    </>
  )
}

export default RevOrdCusCont