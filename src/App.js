import React from 'react';
import TabelComponent from './components/TabelComponent';
import './App.css';
import AppProvider from './context/AppProvider';
import HeaderFilter from './components/HeaderFilter';

function App() {
  return (
    <div>
      <AppProvider>
        <HeaderFilter />
        <TabelComponent />
      </AppProvider>
    </div>
  );
}

export default App;
