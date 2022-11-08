import React from "react";


export default function Loading({ setLoading }) {
  return (
    <div>
      <div className="loading-container">
       
        <div className="loading-content">
            <p className="loading-content1">Loading...</p>
            <p className="loading-content1">One Second...</p>
        </div>
        {setTimeout(() => {
            setLoading(false);
          }, 1500)}
      </div>
    </div>
  );
}
