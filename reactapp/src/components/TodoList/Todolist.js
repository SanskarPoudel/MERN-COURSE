import React, { useState } from 'react'
import Add from './Add'
import Footer from './Footer'
import Header from './Header'
import Lists from './Lists'
import "./Todolist.css"
export default function Todolist() {
    const[list,setList] = useState([]);

    const addlists = (activity) =>{
        setList((prevList)=>{
            return([...prevList,activity])
        })
    }

    const clearLists = ()=>{
        setList((prevList)=>{
           return([]);
        })
    }

    const listLength = list.length;

  return (
    <div className='todo-root'>
        <div className="card-todo card m-auto" >
        {<Header/>}
       {<Add addLists={addlists}/>}
       {<Lists listArray={list}/>}
       {<Footer clearLists={clearLists} listLength={listLength}/>}
    </div>
    </div>
    
  )
}
