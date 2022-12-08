import React from 'react' 

//  useCallBacks are used to store the refrence of previos function, so we prevent from un neccessary rendering 

//  Use memo is used to memoize the value 


const Todoinput = ({task , status }) => {
    console.log('hello')
  return (
    <div style={{display:"flex" , justifyContent:"space-around" , width:"32%" , margin:"auto" }}>
        <div><h1>{task }</h1></div>
        <div><h1>{status ? "Completed":"Not Completed"}</h1></div>
    </div>
  )
}

export default  React.memo(Todoinput)
