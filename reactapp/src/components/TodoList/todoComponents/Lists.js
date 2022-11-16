export default function Lists({listArray,key}) {
  
  return (
    <div>
            <ul className="list-group">
        {listArray.map((element,key)=>{
            return(
                 <li className="list-group-item" key={key} >
                 {element}
                 </li>
                 )
        })}
        
      </ul>
    </div>
  )
}




//PRACTICE FAILED

// const handleCross = ()=>{
//   setListClass((prevListClass)=>{

//     return("list-group-item text-decoration-line-through");

//   })
// }
// return (
//   <div>
//           <ul className="list-group">
//       {listArray.map((element,key)=>{
//           return(
//                <li className={listClass} key={key} onClick={handleCross}>
//                {element}
//                </li>
//                )
//       })}
      
//     </ul>
//   </div>
// )
// }

