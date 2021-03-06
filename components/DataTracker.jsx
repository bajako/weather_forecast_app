import React from 'react';
import PropTypes from 'prop-types';
import Today from './Today.jsx';
import Tomorrow from './Tomorrow.jsx';
import DayAfterTomorrow from './DayAfterTomorrow.jsx';
import App from './Index.jsx';


export default class DataTracker extends React.Component {
  returnToMainSite = () => <App/>;

  getWeatherDataForAboutThisHour = function (weatherData, day) {
    if (Array.isArray(weatherData)) {
      return weatherData[3][1][day];
    }
  };

  getWeatherDataForMaxMinMeanModeValues = (weatherData, day) => {
    if (Array.isArray(weatherData)) {
      const today = new Date(weatherData[3][1][day].dt_txt).getDate();

      return weatherData[3][1].filter(checkDate => new Date(checkDate.dt_txt).getDate() === today && new Date(checkDate.dt_txt).getHours() > 8);
    }
  };


  render() {
    return (
      <div>
        <form onSubmit={this.returnToMainSite} className="new-query-form">
          <input type="submit" value="New Query" className="new-query"/>
        </form>
        <div className="city-name">{this.props.cityName}</div>
        <div className="underline"> </div>
        <div className="container">
          <Today today={this.getWeatherDataForAboutThisHour(this.props.weatherData, 0)}
                 wholeDay={this.getWeatherDataForMaxMinMeanModeValues(this.props.weatherData, 0)}
                 className="three-days"/>
          <Tomorrow tomorrow={this.getWeatherDataForAboutThisHour(this.props.weatherData, 8)}
                    wholeDay={this.getWeatherDataForMaxMinMeanModeValues(this.props.weatherData, 8)}
                    className="three-days"/>
          <DayAfterTomorrow dayAfterTomorrow={this.getWeatherDataForAboutThisHour(this.props.weatherData, 16)}
                            wholeDay={this.getWeatherDataForMaxMinMeanModeValues(this.props.weatherData, 16)} className="three-days"/>
        </div>
      </div>
    );
  }
}

DataTracker.propTypes = {
  weatherData: PropTypes.array,
  cityName: PropTypes.string,
};
