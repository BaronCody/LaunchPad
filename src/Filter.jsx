import React, { useState, useEffect } from "react";
import Axios from 'axios'




export function Filter() {
    const [launching, setlaunching] = useState([])
    const [content, setContent] = useState("")

useEffect(() => {
    async function getdata() {
        const res = await Axios.get('https://api.spacexdata.com/v4/starlink' )
   
        setContent(res.data)
        setlaunching(false)
        console.log(content)
    }
    getdata()
}, []);



    return (
        <div>
            <div>
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <div>
            {content.id}
            
            </div>
        </div>
    );
}