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

  useEffect(() => {
    filterByName();
  }, [filterInput, dados]);

  const values = useMemo(() => ({
    filterInput, filterByName, setFilterInput, newArray,
  }), [newArray, filterInput]);

  return (
    <AppContext.Provider value={ values }>
      {children}
    </AppContext.Provider>
  );
}
AppProvider.propTypes = {}.isRequired;

export default AppProvider;
