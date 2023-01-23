/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState, useEffect } from 'react';
import AppContext from './AppContext';
import useFetch from '../hooks/useFetch';

function AppProvider({ children }) {
  const [filterInput, setFilterInput] = useState('');
  const [newArray, setNewArray] = useState([]);
  const [selectArray, setSelectArray] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const { dados } = useFetch();

  // const attSelect = (filterColumn) => {

  //   setSelectArray(selectArray.filter((element) => {
  //     if (selectArray.length > 1) {
  //       return element !== filterColumn;
  //     }
  //     return [];
  //   }));
  // };

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

  const filterByValue = ({ filterColumn, filterComparison, filterValue }) => {
    const filtered = newArray
      .filter((obj) => {
        if (filterComparison === 'maior que') {
          return Number(obj[filterColumn]) > Number(filterValue);
        } if (filterComparison === 'menor que') {
          return Number(obj[filterColumn]) < Number(filterValue);
        }
        return Number(obj[filterColumn]) === Number(filterValue);
      });
    setNewArray(filtered);
  };

  const attSelect = (column) => {
    const filterSelect = selectArray.filter((opt) => opt !== column);
    setSelectArray(filterSelect);
  };

  const values = useMemo(() => ({
    filterInput,
    filterByName,
    setFilterInput,
    newArray,
    filterByValue,
    attSelect,
    selectArray,
  }), [newArray, filterInput]);

  return (
    <AppContext.Provider value={ values }>
      {children}
    </AppContext.Provider>
  );
}
AppProvider.propTypes = {}.isRequired;

export default AppProvider;
