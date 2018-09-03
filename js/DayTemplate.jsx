import React from 'react';
import PropTypes from 'prop-types';
import {
  temperature, humidity, wind, clouds,
} from './Methods.jsx';

export default class DayTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: '',
    };
  }

  setStateWithSelectedValue = (event) => {
    if (event !== undefined) {
      event.preventDefault();
      this.setState({ selectValue: event.target.value });
    }
  };

  sendSelectedValueToParent = () => {
    this.props.setStateWithDataFromChild(this.state.selectValue);
  };

  render() {
    return (
      <div className="days">
        <div className="name-of-the-day">{this.props.thisDay}</div>
        <div className="weather-values">{temperature(this.props.temperatureValue)}</div>
        <div className="weather-values">{humidity(this.props.humidityValue)}</div>
        <div className="weather-values">{wind(this.props.windSpeed)}</div>
        <div className="weather-values">{clouds(this.props.cloudinessValue)}</div>
        <select
          value={this.state.selectValue}
          onChange={this.setStateWithSelectedValue}
          onClick={this.sendSelectedValueToParent}>
          <option value="now">about this hour</option>
          <option value="max">the maximal weather values</option>
          <option value="min">the minimal weather values</option>
          <option value="mean">the most average weather values</option>
          <option value="mode">the most frequent weather values</option>
        </select>
      </div>
    );
  }
}

DayTemplate.propTypes = {
  thisDay: PropTypes.string,
  temperatureValue: PropTypes.object,
  humidityValue: PropTypes.object,
  windSpeed: PropTypes.object,
  cloudinessValue: PropTypes.object,
  setStateWithDataFromChild: PropTypes.func,
};
