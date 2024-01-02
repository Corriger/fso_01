import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Content from './components/Header.jsx';
import Content from './components/Content.jsx';
import Content from './components/Total.jsx';

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
