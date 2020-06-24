import React,{ useEffect } from 'react';
import axios from 'axios';

const TotalValue = (props) => {
    
    useEffect(()=>{
        axios.get("./data/3_1.json").then(res=>{
            console.log('the result is: ', res.data);
        })
    },[])

    return (
        <div></div>
    ) 
}

export default TotalValue