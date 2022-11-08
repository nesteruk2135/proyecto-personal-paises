import React from "react";


export default function Loading ({setLoading}){
    return(
    <div>
        <div classname="loading-container">
            <div className="loading-content">
                <p className="loading content1">Loading...</p>
                <p className="loading content1">One second...</p>
            </div>
            {setTimeout(()=>{
                setLoading(false);
            },1500)}
        </div>
    </div>
    
    )
}