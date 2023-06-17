import logo from './logo.svg';
import './App.css';
import { Display } from './Components/Display';
import { Buttons } from './Components/Buttons';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increase = () =>{
    setCount( count + 1)
  }

  const decrease = () => {
    setCount( count - 1 )
  }
  return (
    <div className="App">
      <Display count={count}/>
      <Buttons increase={increase} decrease={decrease}/>
    </div>
  );
}

export default App;
