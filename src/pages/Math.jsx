import React, { useState } from 'react'



function Math() {
    const arr = ['+','-','*'];
    //console.log(Math.random())
    // const randomNumberInRange = (min, max) => {
    //     return Math.floor(Math.random() 
    //             * (max - min + 1)) + min;
    // };

    
    function getans(x,y,op){
        if(op == '+'){
           return x+y;
        }
        if(op=='-'){
            return x-y;
        }
        return x*y;
        
    }
    //console.log(randomNumberInRange(0,5))
    
    const ans=getans(2,3,1);

    const{value, setValue} = useState(0);

    const valueerr=(event)=>{
        setValue = event.target.value
    }
    const compare=()=>{
        if(value == ans){
            return "Congratulations! Your ans is currect";
        }
        else{
            return "OOPS! Please try again";
        }
    }



  return (
    <div>
        <input type='number' value={value} placeholder={"Enter your expected sum value: "}/>
        <button onClick={compare}></button>
    </div>
  )
}

export default Math