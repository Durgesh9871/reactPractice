import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "gender":
      return { ...state, gender: action.payload };
    case "role":
      return { ...state, role: action.payload };
    case "maritalStatus":
      return { ...state, maritalStatus: action.payload };
    case "reset":
      return initialState ;
    default:
      return state;
  }
};

function App() {
  const [state , dispatch] = useReducer(reducer , initialState)
  const [userdata , setUserData] = useState([])
   
   const handleChange = (e)=>{
    e.preventDefault()
    const setData = [...userdata] ;
    setData.push(state)
    setUserData(setData)
    dispatch({type:"reset"})
    
   }
    // console.log("state" , state)
  //  console.log(userdata)

  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" >
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text" placeholder="Name" name="name" value={state.name} onChange={(e)=>dispatch({type:"name",payload:e.target.value })}/>
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender" data-testid="gender-select" value={state.gender} onChange={(e)=>dispatch({type:"gender",payload:e.target.value})} >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer Not to Say">Prefer Not to Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper" >
              <label>Role</label>
              <select name="role" data-testid="role-select" value={state.role} onChange={(e)=>dispatch({type:"role",payload:e.target.value})} >
                <option value="FrontEnd Developer">FrontEnd Developer</option>
                <option value="BackEnd Developer">BackEnd Developer</option>
                <option value="FullStack Developer">FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"} value={state.maritalStatus} name="maritalStatus" onChange={(e)=>dispatch({type:"maritalStatus",payload:true})}  />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit" onClick={handleChange}>SUBMIT</button>
            </div>
          </form>
        </div>

        {/* map through the userdata and render UserRow component to display the data in tabular format */}
        {/* print "no users found"  in there is no user data */}
           
           {userdata.length === 0 ? <h2  data-testid = "no-user-container">no users found</h2> :""}
       
          {userdata.map((el ,id)=>(
             <UserRow  name={el.name} gender={el.gender} role={el.role} maritalStatus={el.maritalStatus?"married":"unmarried"} id={id+1} key={id+1}/>
         ))}
            
          
      </div>
    </div>
  );
}

export default App;
