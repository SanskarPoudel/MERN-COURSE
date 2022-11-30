import React, { useState } from 'react'
import "./Counter.css"
export default function Counter() {

    const[count,setCount] = useState(0);

    const handlePlus=()=>{
        setCount((prevCount)=>{
            return prevCount+1;
        })
    }

    const handleMinus=()=>{
        setCount((prevCount)=>{
            return prevCount-1;
        })
    }

  return (
    <div className=' counter h-100 d-flex align-items-center justify-content-center'>
      <button type="button" className="btn btn-primary mt-2 mx-2 mb-2" onClick={handleMinus} >Decrease</button>
     <h4>{count}</h4>
      <button type="button" className="btn btn-primary mt-2 mx-2 mb-2" onClick={handlePlus}>Increase</button>

    </div>
  )
}
