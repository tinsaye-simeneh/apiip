import React, { useEffect } from "react";
import axios from "axios";

export default function App() {
    async function getIpInfo (){
        const response = await axios.get('http://apiip.net/api/check?accessKey=f7af0b2a-efb5-4aa2-a541-c8432c6356ef');
        const result = response.data;
        console.log(result);
      }
    return ( 
        useEffect(() => {
            getIpInfo();
        }, []
        )
    );
    }
