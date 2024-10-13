import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numclicks, setNumClicks] = useState(0);

  const click = () => {
    console.log('Increased');
    setNumClicks(numclicks + 1);
  }

  const reset = ()=>{
    console.log('rebooted');
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className='contenedor-principal'>
        
        <Counter numclicks = { numclicks } />
        <Button 
          textBtn = 'Click'
          classBtn = { true }
          functionBtn = { click } />
        <Button 
          textBtn = 'Reset'
          classBtn = { false }
          functionBtn = { reset } />
      </div>
    </div>
  );
}

export default App;