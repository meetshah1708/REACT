
import Alert from './components/Alert'
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';
import {  BrowserRouter as Router , Routes, Route } from 'react-router-dom';

function App() {
  const [ alert, setAlert ] = useState('THIS IS ALERT');
  const [ mode, setMode ] = useState('light');
  const showALert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showALert('Dark mode is ENABleD', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showALert('LIGHT mode is ENABleD', 'success');
    }
  }
  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
      
        <Route exact path='/' element={<TextForm title="hello" />} />
      </Routes>
    </Router>
  );
}

export default App;
