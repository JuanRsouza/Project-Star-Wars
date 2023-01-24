import React from 'react';
import TabelComponent from './components/TabelComponent';
import './App.css';
import AppProvider from './context/AppProvider';
import HeaderFilter from './components/HeaderFilter';
import FilterByNumber from './components/FilterByNumber';
import OrderComponent from './components/OrderComponent';

function App() {
  return (
    <div>
      <AppProvider>
        <HeaderFilter />
        <FilterByNumber />
        <OrderComponent />
        <TabelComponent />
      </AppProvider>
    </div>
  );
}

export default App;
