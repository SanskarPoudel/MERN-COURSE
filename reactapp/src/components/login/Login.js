import React, { useEffect, useState } from 'react'

export default function Login() {

    const[username,setUsername] = useState("");

    const[password,setPassword] = useState("");

    const [alertMsg, setAlertMsg] = useState();

    const[hide,setHide] = useState();

    const[alertClass,setAlertClass]= useState();

    const[loginMsg,setLoginMsg] = useState();

    useEffect(()=>{
        setLoginMsg((_)=>{
           return("PLease Log in to continue")
        })
    },[]);


    const handleUsername = (event)=>{
        const userName = event.target.value;
        setUsername((_)=>{
            return(userName);
        })
    }

    const handlePassword = (event)=>{
        const userPassword = event.target.value;
        setPassword((_)=>{
            return(userPassword);
        })
    }

    const handleLogIn = ()=>{
        if(username==="admin" && password==="admin"){
            console.log("Logged in ")
            setAlertMsg((_)=>{
                return("Logged In Successfully")
            });
            setHide((_)=>{
                return("d-none")
            });
            setAlertClass((_)=>{
                return("alert alert-warning my-2")
            })
        }
        else{
            setAlertMsg((_)=>{
                return("Login Failed ! Invalid username or password...")
            })
            setAlertClass((_)=>{
                return("alert alert-warning my-2")
            })
        }
    }


  return (
    <div className=' container w-50 my-5'>
        <div className={hide}>
        <div className="alert alert-primary" role="alert">
           {loginMsg}
       </div>
       <div className="form-group py-2" >
          <label htmlFor="exampleInputEmail1">Username</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" onChange={handleUsername} value={username}/>
        </div>

        <div className="form-group py-2">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={handlePassword}  />
        </div>

        <button className="btn btn-primary my-2" onClick={handleLogIn}>Log In</button>
        </div>
        <div className={alertClass} role="alert">
            {alertMsg}
        </div>
        
      
    </div>
  )
}
