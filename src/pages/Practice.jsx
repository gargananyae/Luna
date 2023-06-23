import React from 'react'
import { useState } from 'react'

function Practice() {

    const arr = ['+', '-', '*', '/'];

    const[counter , setCounter] = useState(1)
    const[offset , setOffset] = useState(0);
    const[op, setOp] = useState('');

    const increment = ()=>{
        console.log("Inc");
        setCounter(counter+parseInt(offset));
    }
    const decrement =()=>{
        console.log("dec")
        setCounter(counter-offset);
    }

    const handleChange =(event) =>{
        setOffset(event.target.value);
        console.log(event.target.value);
    }

    const onOptionChangeHandler = (event) =>{
        setOp(event.target.value);
        console.log(event.target.value);
    }

    const logic = () =>{
        if (op == '+')
        (increment())
        else
        (decrement())   
    }
    

  return (
    <div className={"concept"}>
        {counter}
        
        <button onClick={logic}>{op}</button>
        <input
    type="number"
    id="message"
    name="message"
    onChange={handleChange}
    value={offset}
    
  />
<select onChange={onOptionChangeHandler}>
 
 <option>Please choose one option</option>
 {arr.map((tie, index) => {
     
     return <option key={index} >
         {tie}
     </option>
 })}
</select>

 


    </div>
    
  )
}

export default Practice