/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function FilterByNumber() {
  const [selectValues, setSelectValues] = useState({
    filterColumn: 'population',
    filterComparison: 'maior que',
    filterValue: 0,
  });

  const {
    filterByValue,
    selectArray,
    attSelect,
    dados,
    arrayState,
    objectForArray,
    removeAll,
    removeText,
    setNewArray } = useContext(AppContext);

  const handleChange = ({ target: { name, value } }) => {
    setSelectValues({
      ...selectValues,
      [name]: value,
    });
  };

  const handleClick = () => {
    attSelect(selectValues.filterColumn);
    objectForArray(selectValues);
  };

  useEffect(() => {
    const filteredArrayPlanets = arrayState
      .reduce((array, obj) => filterByValue(obj, array), dados);
    setNewArray(filteredArrayPlanets);
  }, [arrayState]);

  useEffect(() => {
    attSelect();
    setSelectValues({ ...selectValues, filterColumn: selectArray[0] });
  }, [selectArray]);

  return (
    <div>
      <select
        name="filterColumn"
        value={ selectValues.filterColumn }
        data-testid="column-filter"
        onChange={ handleChange }
      >
        {selectArray.map((string) => (
          <option
            key={ string }
            value={ string }
          >
            {string}
          </option>

        ))}
      </select>

      <select
        name="filterComparison"
        value={ selectValues.filterComparison }
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        value={ selectValues.filterValue }
        name="filterValue"
        data-testid="value-filter"
        onChange={ handleChange }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>

      {arrayState.map(({ filterColumn, filterComparison, filterValue }) => (
        <div
          data-testid="filter"
          key={ filterColumn }
        >
          {`${filterColumn} - ${filterComparison} ${filterValue}`}
          <button
            type="button"
            onClick={ () => removeText(filterColumn) }
          >
            excluir
          </button>
        </div>
      ))}

      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => removeAll() }
      >
        Excluir Filtros
      </button>

    </div>
  );
}

export default FilterByNumber;
