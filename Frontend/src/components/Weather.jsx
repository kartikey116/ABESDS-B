import React, { useState } from 'react';

const apiKey = "93ef3a8d39473047e2e4f3d3d0a1e2c1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchWeather(cityName) {
    if (!cityName) {
      setError('Please enter a city name.');
      return;
    }
    setLoading(true);
    setError(null);
    setWeather(null);
    try {
      const res = await fetch(`${apiUrl}${encodeURIComponent(cityName)}&appid=${apiKey}`);
      if (!res.ok) throw new Error('City not found or network error');
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchWeather(city.trim());
  }

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: 16, fontFamily: 'Arial, sans-serif' }}>
      <h3>Weather App</h3>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city (e.g. London)"
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit" style={{ padding: '8px 12px' }}>Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: 16, border: '1px solid #ddd', padding: 12, borderRadius: 6 }}>
          <h4 style={{ margin: '0 0 8px 0' }}>{weather.name}, {weather.sys?.country}</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {weather.weather?.[0]?.icon && (
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                width={80}
                height={80}
              />
            )}
            <div>
              <div style={{ fontSize: 18, fontWeight: 700 }}>{Math.round(weather.main.temp)}°C</div>
              <div style={{ textTransform: 'capitalize' }}>{weather.weather?.[0]?.description}</div>
              <div>Humidity: {weather.main.humidity}%</div>
              <div>Wind: {weather.wind.speed} m/s</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;