import React from 'react';
import {filterWind, filterTemperature, filterHumidity, filterClouds} from './Methods.jsx';
import {DayTemplate} from './DayTemplate.jsx';


export class DayAfterTomorrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: '',
    }
  }

  setStateWithDataFromChild = (dataFromChild) => {
    this.setState({selectValue: dataFromChild});
  };


  render() {

    const dayAfterTomorrow = 'Day After Tomorrow';

    const minWindSpeed = filterWind(this.props.wholeDay, 'min');
    const maxWindSpeed = filterWind(this.props.wholeDay, 'max');
    const meanWindSpeed = filterWind(this.props.wholeDay, 'mean');
    const modeWindSpeed = filterWind(this.props.wholeDay, 'mode');

    const minTemperatureValue = filterTemperature(this.props.wholeDay, 'min');
    const maxTemperatureValue = filterTemperature(this.props.wholeDay, 'max');
    const meanTemperatureValue = filterTemperature(this.props.wholeDay, 'mean');
    const modeTemperatureValue = filterTemperature(this.props.wholeDay, 'mode');

    const minHumidityValue = filterHumidity(this.props.wholeDay, 'min');
    const maxHumidityValue = filterHumidity(this.props.wholeDay, 'max');
    const meanHumidityValue = filterHumidity(this.props.wholeDay, 'mean');
    const modeHumidityValue = filterHumidity(this.props.wholeDay, 'mode');

    const minCloudinessValue = filterClouds(this.props.wholeDay, 'min');
    const maxCloudinessValue = filterClouds(this.props.wholeDay, 'max');
    const meanCloudinessValue = filterClouds(this.props.wholeDay, 'mean');
    const modeCloudinessValue = filterClouds(this.props.wholeDay, 'mode');


    if (this.state.selectValue === 'max') {
      return (
        <DayTemplate temperatureValue={maxTemperatureValue} humidityValue={maxHumidityValue} windSpeed={maxWindSpeed}
                     cloudinessValue={maxCloudinessValue} thisDay={dayAfterTomorrow}
                     setStateWithDataFromChild={this.setStateWithDataFromChild}/>

      )
    }
    else if (this.state.selectValue === 'min') {
      return (
        <DayTemplate temperatureValue={minTemperatureValue} humidityValue={minHumidityValue} windSpeed={minWindSpeed}
                     cloudinessValue={minCloudinessValue} thisDay={dayAfterTomorrow}
                     setStateWithDataFromChild={this.setStateWithDataFromChild}/>

      )
    }
    else if (this.state.selectValue === 'mean') {
      return (
        <DayTemplate temperatureValue={meanTemperatureValue} humidityValue={meanHumidityValue} windSpeed={meanWindSpeed}
                     cloudinessValue={meanCloudinessValue} thisDay={dayAfterTomorrow}
                     setStateWithDataFromChild={this.setStateWithDataFromChild}/>

      )
    }
    else if (this.state.selectValue === 'mode') {
      return (
        <DayTemplate temperatureValue={modeTemperatureValue} humidityValue={modeHumidityValue} windSpeed={modeWindSpeed}
                     cloudinessValue={modeCloudinessValue} thisDay={dayAfterTomorrow}
                     setStateWithDataFromChild={this.setStateWithDataFromChild}/>

      )
    }
    return (
      <DayTemplate temperatureValue={this.props.dayAfterTomorrow} humidityValue={this.props.dayAfterTomorrow}
                   windSpeed={this.props.dayAfterTomorrow} cloudinessValue={this.props.dayAfterTomorrow}
                   thisDay={dayAfterTomorrow}
                   setStateWithDataFromChild={this.setStateWithDataFromChild}/>
    )
  }
}
