import React, {useEffect, useState} from "react";
import useSWR from 'swr';
import styles from './apiCall.css';

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
 
  const { data, error } = useSWR(ENDPOINT, fetcher);
    return (
        <>
        <div className={styles.cardHolder}>
            {data?.data.map((val)=>(
                <li key={val.id} className={styles.card}>
                    <div>
                   <img className = {styles.image} src={val.image} alt="logo"/>
                   <p>{val.text}</p>
                   </div>
                </li>
            ))}
        </div>
        </>
    )
}