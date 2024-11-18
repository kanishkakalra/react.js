import { useState } from "react"

export const ToggleSwitch =()=>{
  
    const [on, setOn] = useState(false)

    const handleToggle =()=>{
        setOn(!on);
    }
    return(
        <>
        <div className="toggle-switch  w-[100px] h-14 m-auto py-2 px-2  bg-slate-500 rounded-2xl" onClick={handleToggle}>
            <div className="state flex justify-center w-10 h-10 rounded-full  bg-white">
                <span className=" mt-2">{ on ? "ON" : "OFF"}</span>
            </div>
        </div>
        </>
    )
}