import React, {useEffect, useState} from "react";
import useSWR from 'swr';
import styles from './apiCall.module.css';
import like from "../like.png"

const ENDPOINT = "https://dummyapi.io/data/v1/post?limit=10"

async function fetcher() {
    const response = await fetch(ENDPOINT, {
        method: "GET",
        headers: {
            "app-id": "64eefdc7f12e9e4a108da33f"
        }
    })
    const json = await response.json();
    
    return json;
  }
 
 export default function ApiCall (){
    const[data, setData] = useState([]);
 
 // const { data, error } = useSWR(ENDPOINT, fetcher);
 useEffect(()=>{
     fetcher()
     .then((result => {
        const resultData = result.data
          setData(resultData)
     }))
 },[])
    return (
        <>
        <ul className={styles.grid}>
            {data?.map((val)=>(
                <li key={val.id} className={styles.card}>
                <div className={styles.owner}>
                   <img className= {styles.ownerPic} src={val.owner.picture} />
                   <p>{val.owner.firstName} {val.owner.lastName}</p>
                </div>
                <div className={styles.details}>
                   <img className = {styles.image} src={val.image} alt="logo"/>
                   <div className={styles.detailvalues}> 
                   <p>{val.text}</p>
                   <div className={styles.likediv}>
                   <img className={styles.like} src={like}></img>
                   <p style={{margin:5}}>{val.likes}</p>
                   </div>
                   {val.tags.map(tag => (
                    <p>{tag}</p>
                   ))
 }
                   </div>
                </div>
                </li>
            ))}
        </ul>
        </>
    )
}