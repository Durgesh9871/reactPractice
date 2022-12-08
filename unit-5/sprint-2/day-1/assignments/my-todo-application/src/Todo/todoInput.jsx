import {useState} from "react"
export function InputTodo({handleAddTodo}){
    const [text , updateTodo] = useState("")

     const handleSubmit = ()=>{
        if(text){
            handleAddTodo(text)
            updateTodo("")
        }

     }
    //   console.log(getTodo)
    return (
        <div>
           <input type="text" placeholder="Enter Todo" value ={text}  onChange={(e)=> updateTodo(e.target.value)}/>
           <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
