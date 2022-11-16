import React from 'react'
import"../Todolist.css"
export default function Footer({clearLists,listLength}) {

    const handleClear = ()=>{
       clearLists();
    }
  return (
    <div className='d-flex justify-content-between '>
      <p className='pending-text mt-3'>You have {listLength} pending tasks</p>
      <button type="button" className=" danger btn btn-danger mt-3" onClick={handleClear}>Clear All</button>

    </div>
  )
}
