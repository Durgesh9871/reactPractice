import logo from './logo.svg';
import './App.css';


import { handleAdd, handleSub } from "./Redux/action";
import { useDispatch, useSelector } from "react-redux";

function App() {
 // const { dispatch, subscribe } = store;
  // const { count } = store.getState();
  // const [update, setUpdate] = useState(0);

  // console.log(store.getState())
  // subscribe(() => {
  //   // console.log("yes")
  //   setUpdate(update + 1);
  // });
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">

      <h1>count : {count}$</h1>
      <button onClick={() => dispatch(handleAdd(1))}>Add Money</button>
      <br />
      <br />
      <button disabled={count === 0} onClick={() => dispatch(handleSub(1))}>
        Subtract Money
      </button>

    </div>
  );
}

export default App;
