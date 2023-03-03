import { useContext } from 'react';
import AppContext from '../context/AppContext';

function TabelComponent() {
  const { newArray } = useContext(AppContext);

  return (
    <div className="table-comp">

      <table>
        <thead>
          <tr>
            { newArray.length > 0 && (
              Object.keys(newArray[0]).map((keyname) => (
                <th className="th-style" key={ keyname }>
                  {(keyname)}
                </th>
              ))
            )}
          </tr>
        </thead>
        <tbody>
          {newArray.map((planet, index) => (
            <tr key={ index }>
              <td className="row">{planet.name}</td>
              <td className="row">{planet.rotation_period}</td>
              <td className="row">{planet.orbital_period}</td>
              <td className="row">{planet.diameter}</td>
              <td className="row">{planet.climate}</td>
              <td className="row">{planet.gravity}</td>
              <td className="row">{planet.terrain}</td>
              <td className="row">{planet.surface_water}</td>
              <td className="row">{planet.population}</td>
              <td className="row">{planet.films.map((film) => (film))}</td>
              <td className="row">{planet.created}</td>
              <td className="row">{planet.edited}</td>
              <td className="row">{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelComponent;
