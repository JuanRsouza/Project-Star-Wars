import React from 'react';
import TabelComponent from './components/TabelComponent';
import './App.css';
import AppProvider from './context/AppProvider';
import HeaderFilter from './components/HeaderFilter';
import FilterByNumber from './components/FilterByNumber';
import OrderComponent from './components/OrderComponent';
import Logo from './components/Logo';

function App() {
  return (
    <AppProvider>
      <Logo />
      <div className="main-div">
        <div className="filters">
          <HeaderFilter />
          <div className="filters-in-line">
            <FilterByNumber />
            <OrderComponent />
          </div>
        </div>
        <TabelComponent />
      </div>
    </AppProvider>
  );
}

export default App;
