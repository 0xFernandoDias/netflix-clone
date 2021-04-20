import React from 'react'
import './App.css';
import Banner from './components/banner/banner.component'
import Nav from './components/nav/nav.component'
import Rows from './components/rows/rows.component'

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Rows />
    </div>
  );
}

export default App;
