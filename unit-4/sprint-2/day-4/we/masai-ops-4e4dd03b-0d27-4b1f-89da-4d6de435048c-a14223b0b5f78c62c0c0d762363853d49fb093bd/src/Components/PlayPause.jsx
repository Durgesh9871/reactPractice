// Write Code here
// do a default export
import { useState } from "react"

export default function Play(){
const [count , setCount] = useState("paused")
     function  handle(){
        setCount("play")
     }

    return <div>
    <h1>The state is {count}</h1>
    <button onClick={handle}>{count}</button>
    </div>
}