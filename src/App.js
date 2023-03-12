import './App.css';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {count}
      <button onClick={()=> setCount(count + 1)}>plus</button>
      <button onClick={()=> setCount(count - 1)}>minus</button>

    </div>
  );
}

export default App;
