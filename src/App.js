import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [helloWorld, setHelloWorld] = useState('Loading...')

  useEffect(() => {
    axios.get('http://localhost:5000').then(result => setHelloWorld(result.data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Trombenext
        </p>
        <p>
          {helloWorld}
        </p>
      </header>
    </div>
  );
}

export default App;
