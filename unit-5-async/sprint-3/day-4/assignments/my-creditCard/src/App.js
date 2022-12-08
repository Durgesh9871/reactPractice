import logo from './logo.svg';
import './App.css';
import Pin from './Components/Pin';

function App() {
  
  return (
    <div className="App">
      <Pin length={4} maxLength={1} size={4} />
    </div>
  );
}

export default App;
