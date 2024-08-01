import React, { useState } from 'react';
import './App.css'; // Import CSS file for styles

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = '0a858c5a4b29693f11da1335ba35b3ff'; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (error) {
      setError('City not found');
      setWeather(null);
    }
    setLoading(false);
  };

  const handleInputChange = (text) => {
    setCity(text);
  };

  const handleSearch = () => {
    fetchWeather();
  };

  return (
    <div className="background">
      <div className="app">
        <h1 className="title">Weather App</h1>
        <input
          className="input"
          value={city}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
        {loading && <div className="loader">Loading...</div>}
        {error ? <div className="error">{error}</div> : null}
        {weather && (
          <div className="weather-container">
            <div className="weather-text">{weather.name}</div>
            <img
              className="weather-icon"
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="Weather Icon"
            />
            <div className="weather-text">{weather.weather[0].description}</div>
            <div className="weather-text">Temperature: {weather.main.temp}°C</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;