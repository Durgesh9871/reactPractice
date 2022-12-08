import logo from './logo.svg';
import './App.css';
import useTimeout from './Hook/useTimeout';
import useFetch from './Hook/useFetch';
function App() {

   {/* USE TIMEOUT CUSTOM HOOK IS HERE ------ */}
  const {ready} = useTimeout(5000)

  // {USEfETCH CUSTOME HOOK IS HERE ---------------------------------------->}
  const {loading ,data ,isError} = useFetch('http://api.github.com/users?q=masai')

  //  console.log(data)

  return (
    <div className="App">
       {/* USEfETCH CUSTOME HOOK IS HERE ----------------------------------------> */}

      {loading && "...loading"}
      {isError && (alert('Break in url'))}
      {data.length >0 && data.map((el)=>{
        return  <h1 key={el.id}>{el.login}</h1>
      })}

      {/* USE TIMEOUT CUSTOM HOOK IS HERE ------ */}

     {/* {ready ? "Start Working" :"...wait"} */}
    </div>
  );
}

export default App;
