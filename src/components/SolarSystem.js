import { Component } from 'react';
import planets from '../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const listPlanets = planets.map((planet, index) => (
      <PlanetCard
        key={ index }
        planetName={ planet.name }
        planetImage={ planet.image }
      />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section id="SolarSystem">{ listPlanets }</section>
      </div>
    );
  }
}
export default SolarSystem;
