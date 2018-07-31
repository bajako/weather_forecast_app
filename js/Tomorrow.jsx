import React from 'react';
import {filtrWind, filtrTemperature, filtrHumidity, filtrClouds} from './Methods.jsx';
import {DayTemplate} from './DayTemplate.jsx';


export class Tomorrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickValue: '',
    }
  }

  setStateWithDataFromChild = (dataFromChild) => {
    this.setState({pickValue: dataFromChild});
  };


  render() {


    const tomorrow = 'Tomorrow';

    const minWindSpeed = filtrWind(this.props.obiekt, 'min');
    const maxWindSpeed = filtrWind(this.props.obiekt, 'max');
    const meanWindSpeed = filtrWind(this.props.obiekt, 'mean');
    const modeWindSpeed = filtrWind(this.props.obiekt, 'mode');

    const minTemperatureValue = filtrTemperature(this.props.obiekt, 'min');
    const maxTemperatureValue = filtrTemperature(this.props.obiekt, 'max');
    const meanTemperatureValue = filtrTemperature(this.props.obiekt, 'mean');
    const modeTemperatureValue = filtrTemperature(this.props.obiekt, 'mode');

    const minHumidityValue = filtrHumidity(this.props.obiekt, 'min');
    const maxHumidityValue = filtrHumidity(this.props.obiekt, 'max');
    const meanHumidityValue = filtrHumidity(this.props.obiekt, 'mean');
    const modeHumidityValue = filtrHumidity(this.props.obiekt, 'mode');

    const minCloudinesValue = filtrClouds(this.props.obiekt, 'min');
    const maxCloudinesValue = filtrClouds(this.props.obiekt, 'max');
    const meanCloudinesValue = filtrClouds(this.props.obiekt, 'mean');
    const modeCloudinesValue = filtrClouds(this.props.obiekt, 'mode');


    if (this.state.pickValue === 'max') {
      return (
        <DayTemplate temperatureValue={maxTemperatureValue} humidityValue={maxHumidityValue} windSpeed={maxWindSpeed}
                     cloudinesValue={maxCloudinesValue} thisDay={tomorrow}
                     setStateWithDataFromChild={this.setStateWithDataFromChild}/>

      )
    }
    else if (this.state.pickValue === 'min') {
      return (
        <DayTemplate temperatureValue={minTemperatureValue} humidityValue={minHumidityValue} windSpeed={minWindSpeed}
                     cloudinesValue={minCloudinesValue} thisDay={tomorrow}
                     setStateWithDataFromChild={this.setStateWithDataFromChild}/>

      )
    }
    else if (this.state.pickValue === 'mean') {
      return (
        <DayTemplate temperatureValue={meanTemperatureValue} humidityValue={meanHumidityValue} windSpeed={meanWindSpeed}
                     cloudinesValue={meanCloudinesValue} thisDay={tomorrow}
                     setStateWithDataFromChild={this.setStateWithDataFromChild}/>

      )
    }
    else if (this.state.pickValue === 'mode') {
      return (
        <DayTemplate temperatureValue={modeTemperatureValue} humidityValue={modeHumidityValue} windSpeed={modeWindSpeed}
                     cloudinesValue={modeCloudinesValue} thisDay={tomorrow}
                     setStateWithDataFromChild={this.setStateWithDataFromChild}/>

      )
    }
    return (
      <DayTemplate temperatureValue={this.props.tomorrow} humidityValue={this.props.tomorrow}
                   windSpeed={this.props.tomorrow} cloudinesValue={this.props.tomorrow} thisDay={tomorrow}
                   setStateWithDataFromChild={this.setStateWithDataFromChild}/>
    )
  }
}
