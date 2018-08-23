import React from 'react';
import {filterWind, filterTemperature, filterHumidity, filterClouds} from './Methods.jsx';
import {DayTemplate} from './DayTemplate.jsx';


export class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickValue: '',
    }
  }

  setStateWithDataFromChild = (dataFromChild) => {
    this.setState({selectValue: dataFromChild});
  };


  render() {

    const today = 'Today';

    const minWindSpeed = filterWind(this.props.obiekt, 'min');
    const maxWindSpeed = filterWind(this.props.obiekt, 'max');
    const meanWindSpeed = filterWind(this.props.obiekt, 'mean');
    const modeWindSpeed = filterWind(this.props.obiekt, 'mode');

    const minTemperatureValue = filterTemperature(this.props.obiekt, 'min');
    const maxTemperatureValue = filterTemperature(this.props.obiekt, 'max');
    const meanTemperatureValue = filterTemperature(this.props.obiekt, 'mean');
    const modeTemperatureValue = filterTemperature(this.props.obiekt, 'mode');

    const minHumidityValue = filterHumidity(this.props.obiekt, 'min');
    const maxHumidityValue = filterHumidity(this.props.obiekt, 'max');
    const meanHumidityValue = filterHumidity(this.props.obiekt, 'mean');
    const modeHumidityValue = filterHumidity(this.props.obiekt, 'mode');

    const minCloudinessValue = filterClouds(this.props.obiekt, 'min');
    const maxCloudinessValue = filterClouds(this.props.obiekt, 'max');
    const meanCloudinessValue = filterClouds(this.props.obiekt, 'mean');
    const modeCloudinessValue = filterClouds(this.props.obiekt, 'mode');

    if (this.state.selectValue === 'max') {
      return (
        <DayTemplate temperatureValue={maxTemperatureValue} humidityValue={maxHumidityValue} windSpeed={maxWindSpeed}
                     cloudinessValue={maxCloudinessValue} thisDay={today}
                     setStateWithDataFromChild={this.setStateWithDataFromChild}/>
      )
    }
    else if (this.state.selectValue === 'min') {
      return (
        <DayTemplate temperatureValue={minTemperatureValue} humidityValue={minHumidityValue} windSpeed={minWindSpeed}
                     cloudinessValue={minCloudinessValue} thisDay={today}
                     setStateWithDataFromChild={this.setStateWithDataFromChild}/>

      )
    }
    else if (this.state.selectValue === 'mean') {
      return (
        <DayTemplate temperatureValue={meanTemperatureValue} humidityValue={meanHumidityValue} windSpeed={meanWindSpeed}
                     cloudinessValue={meanCloudinessValue} thisDay={today}
                     setStateWithDataFromChild={this.setStateWithDataFromChild}/>

      )
    }
    else if (this.state.selectValue === 'mode') {
      return (
        <DayTemplate temperatureValue={modeTemperatureValue} humidityValue={modeHumidityValue} windSpeed={modeWindSpeed}
                     cloudinessValue={modeCloudinessValue} thisDay={today}
                     setStateWithDataFromChild={this.setStateWithDataFromChild}/>

      )
    }
    return (
      <DayTemplate temperatureValue={this.props.today} humidityValue={this.props.today} windSpeed={this.props.today}
                   cloudinessValue={this.props.today} thisDay={today}
                   setStateWithDataFromChild={this.setStateWithDataFromChild}/>
    )
  }
}
