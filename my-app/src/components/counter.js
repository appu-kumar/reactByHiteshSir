import {useState} from 'react'
export function Counter(){
    const [count,setCount]=useState(0);

  const increase=()=>{
    if(count<=19)
        setCount(count+1);
    else
        alert('you can not exceed 20');
  }
  const decrease=()=>{
    if(count>0)
         setCount(count-1);
    else   
         alert('no more value')    
    
  }
  return (
    <div className="counter">
     <p>value::{count}</p>
     <button onClick={increase}>increase</button><br />
     <button onClick={decrease}>decrease</button>       
    </div>
  );
}