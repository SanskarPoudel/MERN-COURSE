export default function Lists({listArray,key,crossOnclick}) {

    const crossTodo = (index) =>{
      crossOnclick(index);
    }

  return (
    <div>
            <ul className="list-group">
            {listArray.map((element,index)=>{
            return(
                 <li className={element.striked===false ? "list-group-item":"list-group-item text-decoration-line-through"}key={index} onClick={(event)=>crossTodo(index)} >
                 {element.title}
                 </li>
                 )
        })}
        
      </ul>
    </div>
  )
}