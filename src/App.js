import React from 'react';
import SideBar from './components/sidebar/sidebar';
import MainContent from './components/maincontent/main-content';
import './App.scss';

function App() {
  return (
    <main className="main">
      <SideBar/>
      <MainContent/>
    </main>
  );
}

export default App;
