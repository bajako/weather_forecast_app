import React from 'react';

export const temperature = (receivedWeatherData) => {

  if (receivedWeatherData !== undefined && (typeof receivedWeatherData === "object")) {

    return (
      <div>
        <div>Temperature</div>
        <div><strong>{Math.round(receivedWeatherData.main.temp * 10) / 10}&#0176;C</strong></div>
      </div>
    );
  }
  else if (typeof receivedWeatherData === 'string') {
    return (
      <div>
        <div>Temperature</div>
        <div><strong>{receivedWeatherData}</strong></div>
      </div>
    );
  }
  else if (receivedWeatherData !== undefined) {
    return (
      <div>
        <div>Temperature</div>
        <div><strong>{receivedWeatherData}&#0176;C</strong></div>
      </div>
    );
  }
};

export const humidity = (receivedWeatherData) => {

  if (receivedWeatherData !== undefined && (typeof receivedWeatherData === "object")) {

    return (
      <div>
        <div>Humidity</div>
        <div><strong>{Math.round(receivedWeatherData.main.humidity * 10) / 10}%</strong></div>
      </div>
    )
  }
  else if (typeof receivedWeatherData === 'string') {
    return (
      <div>
        <div>Humidity</div>
        <div><strong>{receivedWeatherData}</strong></div>
      </div>
    );
  }
  else if (receivedWeatherData !== undefined) {
    return (
      <div>
        <div>Humidity</div>
        <div><strong>{receivedWeatherData}%</strong></div>
      </div>
    );
  }
};

export const wind = (receivedWeatherData) => {

  if (receivedWeatherData !== undefined && (typeof receivedWeatherData === "object")) {

    return (
      <div>
        <div>Wind speed</div>
        <div><strong>{Math.round(receivedWeatherData.wind.speed * 10) / 10} meter/sec</strong></div>
      </div>
    )
  }
  else if (typeof receivedWeatherData === 'string') {
    return (
      <div>
        <div>Wind speed</div>
        <div><strong>{receivedWeatherData}</strong></div>
      </div>
    );
  }
  else if (receivedWeatherData !== undefined) {
    return (
      <div>
        <div>Wind speed</div>
        <div><strong>{receivedWeatherData} meter/sec</strong></div>
      </div>
    );
  }
};

export const clouds = (receivedWeatherData) => {

  if (receivedWeatherData !== undefined && (typeof receivedWeatherData === "object")) {

    return (
      <div>
        <div>Cloudines</div>
        <div><strong>{Math.round(receivedWeatherData.clouds.all * 10) / 10}%</strong></div>
      </div>
    )
  }
  else if (typeof receivedWeatherData === 'string') {
    return (
      <div>
        <div>Cloudines</div>
        <div><strong>{receivedWeatherData}</strong></div>
      </div>
    );
  }
  else if (receivedWeatherData !== undefined) {
    return (
      <div>
        <div>Cloudines</div>
        <div><strong>{receivedWeatherData}%</strong></div>
      </div>
    );
  }
};

export const filtrWind = (weatherDataForMaxMinMeanModeValues, value) => {

  if (Array.isArray(weatherDataForMaxMinMeanModeValues)) {

    const windSpeed = [];

    weatherDataForMaxMinMeanModeValues.forEach(function (element) {
      windSpeed.push(element.wind.speed);
    });

    windSpeed.sort((a, b) => b - a);

    if (value === 'max') {
      return showMax(windSpeed);
    } else if (value === 'min') {
      return showMin(windSpeed);
    } else if (value === 'mean') {
      return showMean(windSpeed);
    } else if (value === 'mode') {
      return showMode(windSpeed);
    }
  }
};


export const filtrTemperature = (weatherDataForMaxMinMeanModeValues, value) => {

  if (Array.isArray(weatherDataForMaxMinMeanModeValues)) {

    const temperature = [];

    weatherDataForMaxMinMeanModeValues.forEach(function (element) {
      temperature.push(element.main.temp);
    });

    temperature.sort((a, b) => b - a);

    if (value === 'max') {
      return showMax(temperature);
    } else if (value === 'min') {
      return showMin(temperature);
    } else if (value === 'mean') {
      return showMean(temperature);
    } else if (value === 'mode') {
      return showMode(temperature);
    }
  }
};

export const filtrHumidity = (weatherDataForMaxMinMeanModeValues, value) => {

  if (Array.isArray(weatherDataForMaxMinMeanModeValues)) {

    const humidity = [];

    weatherDataForMaxMinMeanModeValues.forEach(function (element) {
      humidity.push(element.main.humidity);
    });

    humidity.sort((a, b) => b - a);

    if (value === 'max') {
      return showMax(humidity);
    } else if (value === 'min') {
      return showMin(humidity);
    } else if (value === 'mean') {
      return showMean(humidity);
    } else if (value === 'mode') {
      return showMode(humidity);
    }
  }
};

export const filtrClouds = (weatherDataForMaxMinMeanModeValues, value) => {

  if (Array.isArray(weatherDataForMaxMinMeanModeValues)) {

    const cloudines = [];

    weatherDataForMaxMinMeanModeValues.forEach(function (element) {
      cloudines.push(element.clouds.all);
    });

    cloudines.sort((a, b) => b - a);

    if (value === 'max') {
      return showMax(cloudines);
    } else if (value === 'min') {
      return showMin(cloudines);
    } else if (value === 'mean') {
      return showMean(cloudines);
    } else if (value === 'mode') {
      return showMode(cloudines);
    }
  }
};

export const showMax = (weatherDataFromWholeDay) => {
  if (weatherDataFromWholeDay.length <= 1) {
    return Math.round(weatherDataFromWholeDay[0] * 10) / 10
  }
  else {
    return Math.round(weatherDataFromWholeDay[0] * 10) / 10
  }
};

export const showMin = (weatherDataFromWholeDay) => {
  if (weatherDataFromWholeDay.length <= 1) {
    return Math.round(weatherDataFromWholeDay[0] * 10) / 10
  }
  else {
    return Math.round(weatherDataFromWholeDay[weatherDataFromWholeDay.length - 1] * 10) / 10
  }
};

export const showMean = (weatherDataFromWholeDay) => {
  if (weatherDataFromWholeDay.length <= 1) {
    return Math.round(weatherDataFromWholeDay[0] * 10) / 10
  }
  else {
    return Math.round(weatherDataFromWholeDay.reduce((a, b) => a + b)) / weatherDataFromWholeDay.length * 10 / 10
  }
};


export const showMode = (weatherDataFromWholeDay) => {

  const roundedData = weatherDataFromWholeDay.map(x => Math.round(x));
  const message = 'I\'m sorry but there  aren\'t frequent values';
  const frequency = {};
  let max = 0;
  let result = 0;
  for (let v in roundedData) {
    frequency[roundedData[v]] = (frequency[roundedData[v]] || 0) + 1;
    if (frequency[roundedData[v]] > max) {
      max = frequency[roundedData[v]];
      result = roundedData[v];
    }
  }
  if (max > 1) {
    return result
  } else {
    return message
  }
};
