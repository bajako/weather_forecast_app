import React from 'react';
import {Today} from './Today.jsx';
import {Tomorrow} from './Tomorrow.jsx';
import {DayAfterTomorrow} from './DayAfterTomorrow.jsx';
import App from './index.jsx';


export class DataTracker extends React.Component {
  constructor(props) {
    super(props);
  }

  returnToMainSite = () => {
    return <App/>;

  };

  getWeatherDataForAboutThisHour = (weatherData, day) => {

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

    const weatherData = this.props.weatherData;

    return (
      <div>
        <form onSubmit={this.returnToMainSite} className='newQueryForm '>
          <input type='submit' value='New Query' className='newQuery'/>
        </form>
        <div className='cityName'>{this.props.cityName}</div>
        <div className='underline'> </div>
        <div className='container'>
          <Today today={this.getWeatherDataForAboutThisHour(weatherData, 0)}
                 obiekt={this.getWeatherDataForMaxMinMeanModeValues(weatherData, 0)}
                 className='threeDays'/>
          <Tomorrow tomorrow={this.getWeatherDataForAboutThisHour(weatherData, 8)}
                    obiekt={this.getWeatherDataForMaxMinMeanModeValues(weatherData, 8)}
                    className='threeDays'/>
          <DayAfterTomorrow dayAfterTomorrow={this.getWeatherDataForAboutThisHour(weatherData, 16)}
                            obiekt={this.getWeatherDataForMaxMinMeanModeValues(weatherData, 16)} className='threeDays'/>
        </div>
      </div>
    )
  }
}
