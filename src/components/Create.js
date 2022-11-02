import React, {useState} from 'react';
import axios from "axios";

function Create() {
    const [fName, setFName]= useState()
    const [lName, setlName]= useState()
    const[email, setEmail]= useState()
    const[pass, setPass]= useState()
    let url="https://6362424b66f75177ea2a998e.mockapi.io/ToDo"

    const postData= ()=>{
        axios.post(url,{
            fName,
            lName,
            email,
            pass
        }).then(res=>{
            console.log(res);
        })
    }
  return (
    <div>
       <input placeholder='fName' onChange={e=>{setFName(e.target.value)}}></input>
       <input placeholder='lName' onChange={e=>{setlName(e.target.value)}}></input>
       <input placeholder='email' onChange={e=> {setEmail(e.target.value)}}></input>
       <input placeholder='pass' onChange={e=> {setPass(e.target.value)}}></input>

       <button onClick={postData}>Login</button>
       </div>
  )
}

export default Create