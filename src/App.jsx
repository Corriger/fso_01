import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Total from './components/Total.jsx';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
}

export default App;
