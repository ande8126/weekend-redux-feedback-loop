import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Router from '../Router/Router';

function App() {

  return (
    <div className='App'>
      <Header />
      <Router />
    </div>
  );
}

export default App;
