// isko hum lifting up state bhi bol skte hai 

import { useState } from "react"
 export const Test=()=>{
  let [value, setValue] = useState(2)
  function addValue(){
    return(
   setValue(value +1) 
    )
  }
  const subValue=()=>{
    return(
       
    setValue(value - 1 )
    )
  }

  return(
    <>
    <div className="  flex text-center w-[500px] h-48 bg-black gap-20 ">
    {/* <h1>the Value is :{value}</h1> */}
    <button onClick={addValue} className="w-20 h-20 bg-yellow-500 rounded-full">Add value</button>
    <button onClick={subValue} className="w-20 h-20  bg-yellow-500 rounded-full">Sub value</button>
    </div>
    </>
  )

}