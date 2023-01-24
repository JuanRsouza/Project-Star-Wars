import React from 'react';

function OrderComponent() {
  return (
    <div>
      <select
        name=""
        data-testid="column-sort"
      >
        <option value="">population</option>
        <option value="">orbital_period</option>
        <option value="">diameter</option>
        <option value="">rotation_period</option>
        <option value="">surface_water</option>

      </select>
      <label htmlFor="ascendente">
        Ascendente
        <input
          type="radio"
          name="ascendente"
          id="ascendente"
          data-testid="column-sort-input-asc"
          value="ASC"
        />

      </label>
      <label htmlFor="descendente">
        Descendente
        <input
          type="radio"
          name="descendente"
          id="descendente"
          data-testid="column-sort-input-desc"
          value="DESC"
        />

      </label>

      <button data-testid="column-sort-button">Ordenar</button>
    </div>
  );
}

export default OrderComponent;
