import axios from 'axios';
import  { useState } from 'react';
export default function App() {
 const [username,setUsername]=useState("");
  async function handleSubmit(e){
    e.preventDefault();
    const response=await axios.post("http://localhost:3000/login",{username});
    /*async and await are used to handle asynchronous operations like api calls, 
    file reading, database operations. 
    a function marked with async automatically returns a promise.
    inside an async function, await used to pause execution until promise resolves.
    */
    setUsername(response.data);
    console.log(response.data);
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <label>username</label>
      <input type="text" onChange={(e)=>(setUsername(e.target.value))} />
      <input type="submit" value="submit" /></form>
      
    </>
  )
}