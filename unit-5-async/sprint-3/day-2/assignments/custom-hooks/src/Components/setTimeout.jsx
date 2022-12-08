
import { useTimeout } from '../Hooks/Timeout'

const SetTimeout = () => {
  
   const value =  useTimeout(3000)

   

  return (
    <div>
       {value ? (<h1>setTimeout also working </h1>) : (<h1> wait for setTimeout </h1>)}


    </div>
  )
}

export  {SetTimeout}
