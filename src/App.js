
import './App.css';
import { Display } from './Components/Display';
import { Buttons } from './Components/Buttons';
import { FormData } from './Components/FormData';

function App() {
  return (
    <div className="App">
      <Display />
      <Buttons />
      <hr/>
      <FormData/>
    </div>
  );
}

export default App;
