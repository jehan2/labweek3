//import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"
import axios from "axios"
import { Grid } from '@chakra-ui/react'
import Create from './components/Create';
import Maa from './components/Maa';


function App() {
  // const[state, setstate]= useState([])
  // useEffect(() => {
  //   axios.get("https://6362424b66f75177ea2a998e.mockapi.io/ToDo").then((res)=>{
  //     console.log(res.data.results);
  //     setstate(res.data.results);
  //     })
  // }, [])

  return (
    <div className="App">
      <Create/>
      <Maa/>
     
      {/* <Grid templateColumns='repeat(3, 1fr)' gap={6}> */}
      {/* <div className='api-con'>
    { state.map((items)=>{
      return(
        <>
       
        <div className='img-con'> */}
        {/* <p> {items.image}</p> */}
        {/* <img className='' src={items.image}></img>
       <p className='grid'> {items.name}</p>
       </div>
        </>
       )
    })} 
    </div>
    </Grid> */}
    </div>
  );
}

export default App;
