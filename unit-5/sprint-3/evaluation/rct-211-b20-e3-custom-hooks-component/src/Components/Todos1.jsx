import React,{useState} from 'react'
import { useTodos } from '../hooks/useTodos'

const Todos1 = ({initialData}) => {
  const [currentTask , setCurrentTask] = useState("")

  //use the initialData that you are getting from the props to be used, as the initial argument for useTodos hook
    const {data ,addData ,clearData , removeDataByIndex} = useTodos(initialData)
    

      return (
    <div data-testid='todos1'>
        <h1 data-testid='todos1-label'>Todos-1</h1>
        <input data-testid='todos1-input' type="text" value={currentTask} onChange={(e) => setCurrentTask(e.target.value)} />
        <button data-testid='todos1-add' onClick={()=>addData(currentTask)}>Add Task</button>
      <div>
       {/* Loop through the todo data that you are getting from the useTodos hook to render the tasks with their name, and a delete button with each task */}
          { !!data.length &&  data.map((item ,index)=>{
      return (
        <div key={index} style={{display:"flex"}}>
            <div data-testid='todos1-element'>
              {item}
            </div>
            <button data-testid='todos1-delete' onClick={()=>removeDataByIndex(index)}>Delete</button>
        </div>

      )
          })}
      
        </div>
        <button data-testid='todos1-clear' onClick={()=>clearData()}>Clear Todos</button>
    </div>
  )
}

export default Todos1