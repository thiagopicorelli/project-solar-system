import { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (<h2 id="Title">{ headline }</h2>);
  }
}
Title.propTypes = {
  headline: PropTypes.string,
};
Title.defaultProps = {
  headline: '',
};
export default Title;
