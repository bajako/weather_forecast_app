import React from 'react';
import {temperature, humidity, wind, clouds} from './Methods.jsx';


export class DayTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue:'',
    }
  }

  setStateWithSelectedValue = (event) => {
    if (event !== undefined) {
      event.preventDefault();
      this.setState({selectValue: event.target.value});
    }
  };

  sendSelectedValueToParent = () => {
    this.props.setStateWithDataFromChild(this.state.selectValue);
  };

  render(){
    return(
      <div  className='days'>
        <div className='nameOfDay'>{this.props.thisDay}</div>
        <div className="weatherValues">{temperature(this.props.temperatureValue)}</div>
        <div className="weatherValues">{humidity(this.props.humidityValue)}</div>
        <div className="weatherValues">{wind(this.props.windSpeed)}</div>
        <div className="weatherValues">{clouds(this.props.cloudinessValue)}</div>
        <select
          value={this.state.selectValue}
          onChange={this.setStateWithSelectedValue}
          onClick={this.sendSelectedValueToParent}>
          <option value='now'>about this hour</option>
          <option value='max'>the maximal weather values</option>
          <option value='min'>the minimal weather values</option>
          <option value='mean'>the most average weather values</option>
          <option value='mode'>the most frequent weather values</option>
        </select>
      </div>
    )
  }
}
