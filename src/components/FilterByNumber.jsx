import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

function FilterByNumber() {
  const [selectValues, setSelectValues] = useState({
    filterColumn: 'population',
    filterComparison: 'maior que',
    filterValue: 0,
  });

  const { filterByValue } = useContext(AppContext);

  const handleChange = ({ target: { name, value } }) => {
    setSelectValues({
      ...selectValues,
      [name]: value,
    });
  };

  const handleClick = () => {
    filterByValue(selectValues);
  };

  return (
    <div>
      <select
        name="filterColumn"
        value={ selectValues.filterColumn }
        data-testid="column-filter"
        onChange={ handleChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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

    </div>
  );
}

export default FilterByNumber;
