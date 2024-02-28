import { useState } from 'react';
import './App.css';
import HeaderContent from './components/header-box.js';

function App() {
  const [city,setCity] = useState('')

  function handlesearch(){

  }

  return (
    <div className='container'>
        <HeaderContent/>
    </div>
  );
}

export default App;
