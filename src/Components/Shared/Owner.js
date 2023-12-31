import React from "react";
import styles from "./Owner.module.css"

export default function Owner({val}){
    const editedTimeStamp =  val.publishDate? val.publishDate.substr(0,val.publishDate.indexOf('T')):""
    return(
        <div className={styles.owner}>
        <img className= {styles.ownerPic} src={val.owner.picture} alt={`${val.owner}pic`}/>
        <div className={styles.ownerDetails}>
        <p className={styles.ownerName}>{val.owner.firstName} {val.owner.lastName}</p>
        <p style={{margin:0}}>{editedTimeStamp}</p>
        </div>
     </div> 
    )
}