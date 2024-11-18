import { useEffect, useState } from "react"

// export const ReactUseEffect = ()=>{
//     const[count, setCount] = useState(0);
//     useEffect(()=>{
//     console.log("hello", count); 
//     },[count])
    

// return(
//     <>
//     <h1> Hello use effect</h1>
//     <h2>{count}</h2>
//     <button onClick={()=>setCount(count+1)}>Add</button>
//     </>
// )
// }

//  export const Example2=()=>{
   
//     const [date, setDate] = useState(0);

//     useEffect(()=>{
//         setInterval(()=>{
//             const upadatedDate = new Date();
//             setDate(upadatedDate.toLocaleTimeString())
//         },1000)
      
//     },[])

//     return(
//         <>
//         <h1> Date :{date}</h1>
//         </>
//     )

//  } 

export const Inc=()=>{
 
    const[count, setCount]= useState(0);
   
    setInterval(()=>{
        setCount(count+1)
},1000)
    return (
    <>
    <button></button>
   </>
    )
}