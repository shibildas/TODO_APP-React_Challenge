import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  const [toDos,setToDos]=useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=> setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={()=>setToDos([...toDos,{id:Date.now(), text:toDo,status:false}])}></i>
      </div>
     
     <div className="todos">
     { 
     toDos.map((value)=>{
     
        return(<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
          console.log(e.target.value);
          console.log(value);
          setToDos(toDos.filter(value2=>{
            if (value2.id === value.id){
              value2.status = e.target.checked
            }
            return value2 
          }))
        }} value={value.status} type="checkbox" name="" id="" />
            <p>{value.text}</p>
            
          </div>
          <div className="right">
            <i className="fas fa-times" onClick={(e)=>{
              setToDos(toDos.filter((value2) =>{
                if(value2.id === value.id){
                  value2 = null
                }return value2
              }))

            }}></i>
          </div>
        </div>)})}
        {toDos.map((value)=>{
          if (value.status){
            return <h1>{value.text}</h1>
          }return null
        })}
      </div>
    </div>
  );
}

export default App;
