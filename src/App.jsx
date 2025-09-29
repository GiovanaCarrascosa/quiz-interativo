// imports necessários
import { useState } from 'react'
import Header from './components/Header/index';
import QuestionCard from './components/QuestionCard/index';
import data from './data/questions.js';

import './App.css'

function App() {
  
  return (
    <>

      <Header/>
      <QuestionCard/>
      
    </>
  )
}

export default App
