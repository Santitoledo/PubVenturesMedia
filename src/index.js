import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import Main from './components/Main';
import Task from './components/Task';
import Clients from './components/Clients';
import Contact from './components/Contatc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <App/>
    <Main/>
    <Task/>
    <Clients/>
    <Contact/>
    
  </React.StrictMode>
);


