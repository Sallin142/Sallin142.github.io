import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';

import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
