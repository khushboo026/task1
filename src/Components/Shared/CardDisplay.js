import React, {useEffect, useState} from "react";
import styles from './CardDisplay.module.css';
import PetDetails from "../Pets/PetDetails";
import Owner from "./Owner.js"

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
 
 export default function CardDisplay (){
    const[data, setData] = useState([]);
 
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
                <Owner val={val} />
                <PetDetails val={val} />
                </li>
            ))}
        </ul>
        </>
    )
}