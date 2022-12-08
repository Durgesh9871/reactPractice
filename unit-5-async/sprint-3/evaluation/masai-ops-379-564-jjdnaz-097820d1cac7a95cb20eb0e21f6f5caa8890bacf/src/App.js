import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import UserCard from "./Components/UserCard";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  //import the useDark mode hook here
  const [value , setValue] = useState("")

  const handleChange = (event)=>{setValue(event.target.value)}

  // console.log("value" , value)

  const [isDarkMode ,toggleDarkMode] = useDarkMode()

   const defaultClassName = isDarkMode ? "dark-mode" : "App" 
  const defaultText = isDarkMode ? "Light" :"Dark"


//  console.log(isDarkMode)
  return (
    // add the dark-mode class name along with App depending on the boolean value of isDarkMode
    <div data-testid="app-component"  className={defaultClassName}>
      {/* to toggle the darkMode value of the application */}
      {/* Default value: Dark.  */}
      <button onClick={()=>toggleDarkMode()}>{defaultText}</button>

      {/* use the UserCard component here */}
      <UserCard imageURL="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60" avatarShape="round"  name="Software Developer" backgroundColor="red"  title="User1"   />

      <br />
      {/* use the Input component here */}
     <Input  type="text" variant="outline"  size="xl" value={value}  onChange={handleChange}   /> 

     {/* <input  type = "text"  placeholder="image" value={value}  onChange={handleChange}/> */}

      <div data-testid="input-value">Input value is {value} </div>
    </div>
  );
}

export default App;

/*
imageURL for testing;
1. https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60

2. https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60
*/
