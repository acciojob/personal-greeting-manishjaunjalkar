
import React,{useCallback, useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName]= useState("")
  return (
    <div>
      <h1>Enter your name:</h1>
      <input type="text" onChange={(e)=>setName("Hello "+e.target.value+"!")}/>
      <h1>{name}</h1>
    </div>
  )
}

export default App
