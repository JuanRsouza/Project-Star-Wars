/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState, useEffect } from 'react';
import AppContext from './AppContext';
import useFetch from '../hooks/useFetch';

function AppProvider({ children }) {
  const [filterInput, setFilterInput] = useState('');
  const [newArray, setNewArray] = useState([]);

  const { dados } = useFetch();

  const filterByName = () => {
    if (filterInput === '') {
      setNewArray(dados);
    } else {
      const filter = dados.filter((obj) => obj.name.toLowerCase()
        .includes(filterInput.toLowerCase()));
      setNewArray(filter);
    }
  };

  const filterByValue = ({ filterColumn, filterComparison, filterValue }) => {
    const filtered = newArray
      .filter((obj) => {
        if (filterComparison === 'maior que') {
          return Number(obj[filterColumn]) > filterValue;
        } if (filterComparison === 'menor que') {
          return Number(obj[filterColumn]) < filterValue;
        }
        return Number(obj[filterColumn]) === Number(filterValue);
      });
    setNewArray(filtered);
  };

  useEffect(() => {
    filterByName();
  }, [filterInput, dados]);

  const values = useMemo(() => ({
    filterInput, filterByName, setFilterInput, newArray, filterByValue,
  }), [newArray, filterInput]);

  return (
    <AppContext.Provider value={ values }>
      {children}
    </AppContext.Provider>
  );
}
AppProvider.propTypes = {}.isRequired;

export default AppProvider;
