import React from 'react';
import DataTracker from './DataTracker.jsx';
import NoSuchCity from './NoSuchCity.jsx';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: '',
      query: null,
      error: false,
    };
  }

  loadWeather = (cityName) => {
    const myApi = 'cda1159d91a59a47cbd38e2137506662';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${myApi}`;

    return fetch(url)
      .then(res => res.json())
      .then(obj => this.setState({
        weatherData: Object.entries(obj),
      }))
      .catch(error => this.setState({
        error: true,
      }));
  };

  getWeatherInformation = (event) => {
    event.preventDefault();
    this.loadWeather(event.target[0].value);
    this.setState({
      query: this.search.value,
    });
  };


  render() {
    const search = <div className="search-box">
      <form onSubmit={this.getWeatherInformation}>
        <label>
          <input type="search" ref={input => this.search = input} id="mySearch" name="q"
                 placeholder={"enter the city name"}/>
          <input type="submit" value="get weather information"/>
        </label>
      </form>
    </div>;

    if (this.state.error) {
      return <NoSuchCity />;
    }
    if (this.state.query !== null) {
      return <DataTracker weatherData={this.state.weatherData} cityName={this.state.query}/>;
    }


    return <div>{search}</div>;
  }
}
