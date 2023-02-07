import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';
import AppRouter from './components/AppRouter';
import { Header } from './components/Header/Header';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
