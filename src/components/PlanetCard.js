import { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const planetAlt = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img alt={ planetAlt } src={ planetImage } />
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};
PlanetCard.defaultProps = {
  planetName: '',
  planetImage: '',
};
export default PlanetCard;
