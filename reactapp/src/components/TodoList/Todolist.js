import React, { useState } from 'react'
import Add from './todoComponents/Add'
import Footer from './todoComponents/Footer'
import Header from './todoComponents/Header'
import Lists from './todoComponents/Lists'
import "./Todolist.css"
export default function Todolist() {
    const[list,setList] = useState([{
      title:"Hello world",
      striked:false
    }]);

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
    console.log(list);

    const changeTodoStrike = (index)=> {
      const newTodoList = list.map((todo,idx)=>{

        if(index===idx){
          return({...todo, striked : !todo.striked})
        }
          return todo;
      })

      setList((prevList)=>{
        return ([...newTodoList])
      })

    }

  return (
    <div className='todo-root'>
        <div className="card-todo card m-auto" >
        {<Header/>}
       {<Add addLists={addlists}/>}
       {<Lists listArray={list} crossOnclick={changeTodoStrike}/>}
       {<Footer clearLists={clearLists} listLength={listLength}/>}
    </div>
    </div>
    
  )
}
