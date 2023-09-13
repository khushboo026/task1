import React from "react";
import styles from "./PetDetails.module.css";
import like from "../../like.png";
import Tags from "../Shared/Tags";


export default function PetDetails({val}){
    return (
<div className={styles.details}>
                   <img className = {styles.petImage} src={val.image} alt="petPic"/>
                   <div className={styles.petDetails}> 
                   <h3 style={{width:280}}>{val.text}</h3>
                   <div className={styles.petLikeDiv}>
                   <img className={styles.like} src={like} alt=
                   "like pic" />
                   <p style={{margin:5}}>{val.likes}</p>
                   </div>
                   <Tags val={val} />
                   </div>
                </div>
    )
}