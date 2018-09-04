import React from 'react';

export const temperature = (receivedWeatherData) => {
  if (receivedWeatherData !== undefined && (typeof receivedWeatherData === 'object')) {
    /** @namespace receivedWeatherData.main.temp */
    return (
      <div>
        <div>Temperature</div>
        <div><strong>{Math.round(receivedWeatherData.main.temp * 10) / 10}&#0176;C</strong></div>
      </div>
    );
  }
  if (typeof receivedWeatherData === 'string') {
    return (
      <div>
        <div>Temperature</div>
        <div><strong>{receivedWeatherData}</strong></div>
      </div>
    );
  }

  return (
      <div>
        <div>Temperature</div>
        <div><strong>{receivedWeatherData}&#0176;C</strong></div>
      </div>
  );
};

export const humidity = (receivedWeatherData) => {
  if (receivedWeatherData !== undefined && (typeof receivedWeatherData === 'object')) {
    return (
      <div>
        <div>Humidity</div>
        <div><strong>{Math.round(receivedWeatherData.main.humidity * 10) / 10}%</strong></div>
      </div>
    );
  }
  if (typeof receivedWeatherData === 'string') {
    return (
      <div>
        <div>Humidity</div>
        <div><strong>{receivedWeatherData}</strong></div>
      </div>
    );
  }

  return (
      <div>
        <div>Humidity</div>
        <div><strong>{receivedWeatherData}%</strong></div>
      </div>
  );
};

export const wind = (receivedWeatherData) => {
  if (receivedWeatherData !== undefined && (typeof receivedWeatherData === 'object')) {
    return (
      <div>
        <div>Wind speed</div>
        <div><strong>{Math.round(receivedWeatherData.wind.speed * 10) / 10} meter/sec</strong></div>
      </div>
    );
  }
  if (typeof receivedWeatherData === 'string') {
    return (
      <div>
        <div>Wind speed</div>
        <div><strong>{receivedWeatherData}</strong></div>
      </div>
    );
  }
  if (receivedWeatherData !== undefined) {
    return (
      <div>
        <div>Wind speed</div>
        <div><strong>{receivedWeatherData} meter/sec</strong></div>
      </div>
    );
  }
};

export const clouds = (receivedWeatherData) => {
  if (receivedWeatherData !== undefined && (typeof receivedWeatherData === 'object')) {
    return (
      <div>
        <div>Cloudiness</div>
        <div><strong>{Math.round(receivedWeatherData.clouds.all * 10) / 10}%</strong></div>
      </div>
    );
  }
  if (typeof receivedWeatherData === 'string') {
    return (
      <div>
        <div>Cloudiness</div>
        <div><strong>{receivedWeatherData}</strong></div>
      </div>
    );
  }
  if (receivedWeatherData !== undefined) {
    return (
      <div>
        <div>Cloudiness</div>
        <div><strong>{receivedWeatherData}%</strong></div>
      </div>
    );
  }
};

export const filterWind = (weatherDataForMaxMinMeanModeValues, value) => {
  if (Array.isArray(weatherDataForMaxMinMeanModeValues)) {
    const windSpeed = [];

    weatherDataForMaxMinMeanModeValues.forEach((element) => {
      windSpeed.push(element.wind.speed);
    });

    windSpeed.sort((a, b) => b - a);

    if (value === 'max') {
      return showMax(windSpeed);
    } if (value === 'min') {
      return showMin(windSpeed);
    } if (value === 'mean') {
      return showMean(windSpeed);
    } if (value === 'mode') {
      return showMode(windSpeed);
    }
  }
};


export const filterTemperature = (weatherDataForMaxMinMeanModeValues, value) => {
  if (Array.isArray(weatherDataForMaxMinMeanModeValues)) {
    const temperature = [];

    weatherDataForMaxMinMeanModeValues.forEach((element) => {
      temperature.push(element.main.temp);
    });

    temperature.sort((a, b) => b - a);

    if (value === 'max') {
      return showMax(temperature);
    } if (value === 'min') {
      return showMin(temperature);
    } if (value === 'mean') {
      return showMean(temperature);
    } if (value === 'mode') {
      return showMode(temperature);
    }
  }
};

export const filterHumidity = (weatherDataForMaxMinMeanModeValues, value) => {
  if (Array.isArray(weatherDataForMaxMinMeanModeValues)) {
    const humidity = [];

    weatherDataForMaxMinMeanModeValues.forEach((element) => {
      humidity.push(element.main.humidity);
    });

    humidity.sort((a, b) => b - a);

    if (value === 'max') {
      return showMax(humidity);
    } if (value === 'min') {
      return showMin(humidity);
    } if (value === 'mean') {
      return showMean(humidity);
    } if (value === 'mode') {
      return showMode(humidity);
    }
  }
};

export const filterClouds = (weatherDataForMaxMinMeanModeValues, value) => {
  if (Array.isArray(weatherDataForMaxMinMeanModeValues)) {
    const cloudiness = [];

    weatherDataForMaxMinMeanModeValues.forEach((element) => {
      cloudiness.push(element.clouds.all);
    });

    cloudiness.sort((a, b) => b - a);

    if (value === 'max') {
      return showMax(cloudiness);
    } if (value === 'min') {
      return showMin(cloudiness);
    } if (value === 'mean') {
      return showMean(cloudiness);
    } if (value === 'mode') {
      return showMode(cloudiness);
    }
  }
};

export const showMax = (weatherDataFromWholeDay) => {
  if (weatherDataFromWholeDay.length <= 1) {
    return Math.round(weatherDataFromWholeDay[0] * 10) / 10;
  }

  return Math.round(weatherDataFromWholeDay[0] * 10) / 10;
};

export const showMin = (weatherDataFromWholeDay) => {
  if (weatherDataFromWholeDay.length <= 1) {
    return Math.round(weatherDataFromWholeDay[0] * 10) / 10;
  }

  return Math.round(weatherDataFromWholeDay[weatherDataFromWholeDay.length - 1] * 10) / 10;
};

export const showMean = (weatherDataFromWholeDay) => {
  if (weatherDataFromWholeDay.length <= 1) {
    return Math.round(weatherDataFromWholeDay[0] * 10) / 10;
  }

  return parseFloat((weatherDataFromWholeDay.reduce((a, b) => a + b) / weatherDataFromWholeDay.length).toFixed(2));
};

export const showMode = (weatherDataFromWholeDay) => {
  const roundedData = weatherDataFromWholeDay.map(x => Math.round(x));
  const message = 'I\'m sorry but there  aren\'t frequent values';
  const frequency = {};
  let max = 0;
  let result = 0;
  for (const v in roundedData) {
    frequency[roundedData[v]] = (frequency[roundedData[v]] || 0) + 1;
    if (frequency[roundedData[v]] > max) {
      max = frequency[roundedData[v]];
      result = roundedData[v];
    }
  }
  if (max > 1) {
    return result;
  }
  return message;
};
