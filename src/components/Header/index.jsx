// importação do css do header
import './Header.module.css';
import React, { useState, useEffect } from 'react';

// função do header
function Header() {

    
  return (
  
    <header className="app-header">
      <h1 className="header-title">Quiz Interativo</h1>
      <span>Questão 1 de 10</span>

      <p></p>
    </header>
  );
}

export default Header;
