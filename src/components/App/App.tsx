import React from 'react';
import Form from '../Form/Form';
import Info from '../Info/Info';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className='app_wrap'>
        <Info />
        <Form />
      </div>
    </div>
  );
}

export default App;
