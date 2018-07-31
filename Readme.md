# Weather Forecast Application

This is a simple weather forecast application you can use to check the weather in your city.<br />
This simple app is created in React, I use Webpack.
API is from [OpenWeatherMap](https://openweathermap.org/).

## Few words about it...
After you enter the city name, to check the weather forecast, you will receive weather data for next three days.<br />
Now you can filter the results depending on the options available.<br />
* **about this hour** - shows the data available for now or on subsequent days at this time;<br />
* **the maximal weather values** - retrieves values from whole day and returns the highest value;<br />
* **the minimal weather values** - retrieves values from whole day and returns the lowest value;<br />
* **the most average weather values** - retrieves values from whole day and returns the mean value;<br />
* **the most frequent weather values** - retrieves values from whole day and returns the mode value.<br />

The OpenWeatherMap API provides data for every three hours.<br />
I assumed that the day begins after 8am and ends around 9pm. This way, only weather data between these hours are taken into account. The exception here is the option **about this hour**, shows the data available for now or on subsequent days at this time.<br />

## How to get it up and running

You can:
* look it up and use it here - [GitHub Pages](https://bajako.github.io/weather_forecast_app/). <br /><br />
* run it on your local machine.<br /><br />
  To do so - download the project, open a terminal in the folder that contains the project and use command:
  ```
  npm install
  ```
  It will install all dependencies (listed in **package.json**) that you need to enjoy the game.
  
  Next, if you have your **webpack** installed globaly type:
  ```
  webpack
  ```
  And if you don't, use:
  ```
  ./node_modules/.bin/webpack
  ```
  Last thing - open index.html file in your browser and enjoy! 
  
 ## Author
 [Bartek Jakoniuk](https://github.com/bajako)
 
 ## License
 This project is licensed under the MIT License.
 
 

