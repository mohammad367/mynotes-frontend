import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import NoteListPage from './pages/NotesListPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";
import NotePage from './pages/NotePage';

function App() {
  return (
    <div className="container dark">
    <div className='app'>
      <Header />
      <Routes>
       <Route exact path="/"  element={<NoteListPage/>} /> 
       <Route path='/notes/:id' element={<NotePage />}/>
      </Routes>
          
        
      
      </div>
    </div>
    

      
  );
}

export default App;
