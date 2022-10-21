import { Component } from 'react';
import missions from '../data/missions';
import Title from './Title';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const listMission = missions.map((mission, index) => (
      <MissionCard
        key={ index }
        name={ mission.name }
        year={ mission.year }
        country={ mission.country }
        destination={ mission.destination }
      />
    ));
    return (
      <div data-testid="missions" id="Missions">
        <Title headline="Missões" />
        <section id="MissionsList">{ listMission }</section>
      </div>
    );
  }
}
export default Missions;
