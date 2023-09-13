import React from "react";
import styles from "./Tags.module.css";

export default function Tags({val}){
    return (
        <div className={styles.tagDiv}>
        {val.tags.map((tag, index) => (
            <span key={index} className={styles.tagBox}>{tag}</span>
           ))
}
</div>
    )
}