import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function HeaderFilter() {
  const { filterInput, setFilterInput } = useContext(AppContext);

  const handleChange = ({ target: { value } }) => {
    setFilterInput(value);
  };

  return (
    <div>

      <input
        id="filter-input"
        name="filterInput"
        type="text"
        className="search-bar"
        data-testid="name-filter"
        value={ filterInput }
        onChange={ handleChange }
      />

    </div>
  );
}
