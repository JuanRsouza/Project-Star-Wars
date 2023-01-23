import React from 'react';
import TabelComponent from './components/TabelComponent';
import './App.css';
import AppProvider from './context/AppProvider';
import HeaderFilter from './components/HeaderFilter';
import FilterByNumber from './components/FilterByNumber';

function App() {
  return (
    <div>
      <AppProvider>
        <HeaderFilter />
        <FilterByNumber />
        <TabelComponent />
      </AppProvider>
    </div>
  );
}

export default App;
