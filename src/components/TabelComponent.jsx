import { useContext } from 'react';
import AppContext from '../context/AppContext';

function TabelComponent() {
  const { newArray } = useContext(AppContext);

  return (
    <table>
      <thead>
        <tr>
          { newArray.length > 0 && (
            Object.keys(newArray[0]).map((keyname) => (
              <th key={ keyname }>
                {(keyname)}
              </th>
            ))
          )}
        </tr>
      </thead>
      <tbody>
        {newArray.map((planet, index) => (
          <tr key={ index }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films.map((film) => (film))}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelComponent;
