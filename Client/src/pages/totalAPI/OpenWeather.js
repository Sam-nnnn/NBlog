import React, { useState } from "react";

const OpenWeather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [res, setRes] = useState("");
  const lang = "zh_tw";
  const APIKey = "ce891c65752a5cd26d718aa87e3687ab";
  const dataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&lang=${lang}&units=metric `;

  const changeCity = (e) => {
    setWeather("溫度");
    setCity(e.target.value);
  };

  const weatherSearch = (e) => {
    if (e.target.value === "溫度") {
      setWeather("溫度");
    } else if (e.target.value === "氣象") {
      setWeather("氣象");
    } else if (e.target.value === "風速") {
      setWeather("風速");
    } else {
      setWeather("濕度");
    }
  };

  // fetch data
  // 1.then catch
  const WeatherRes = () => {
    if (weather === "溫度") {
      fetch(dataUrl, {
        method: "GET",
      })
        .then((d) => d.json())
        .then((dataJson) => setRes(dataJson.main.temp))
        .catch(() => setRes(`Cannot get '${city}' Weather`));
    } else if (weather === "氣象") {
      fetch(dataUrl, {
        method: "GET",
      })
        .then((d) => d.json())
        .then((dataJson) => setRes(dataJson.weather[0].description))
        .catch(() => setRes(`Cannot get '${city}' Weather`));
    } else if (weather === "風速") {
      fetch(dataUrl, {
        method: "GET",
      })
        .then((d) => d.json())
        .then((dataJson) => setRes(`${dataJson.wind.speed} m/s`))
        .catch(() => setRes(`Cannot get '${city}' Weather`));
    } else if (weather === "濕度") {
      fetch(dataUrl, {
        method: "GET",
      })
        .then((d) => d.json())
        .then((dataJson) => setRes(dataJson.main.humidity))
        .catch(() => setRes(`Cannot get '${city}' Weather`));
    }
  };

  // 2.async function
  // const data = await fetch(dataUrl, {
  //   method: "GET",
  // });
  // const dataJson = await data.json();
  // setRes(dataJson.weather[0].main);

  return (
    <div className="OpenWeather">
      <h3 className="title">天氣API</h3>
      <div className="Input">
        <input
          placeholder="請用英文輸入城市名稱"
          id="cityWeatherInput"
          type="text"
          onChange={(e) => {
            changeCity(e);
          }}
        />
        <select
          name="weatherSearch"
          onChange={(e) => {
            weatherSearch(e);
          }}
        >
          <option>溫度</option>
          <option>氣象</option>
          <option>風速</option>
          <option>濕度</option>
        </select>
        <button
          onClick={(e) => {
            WeatherRes();
          }}
        >
          查詢
        </button>
      </div>
      <div className="Output">
        <p>{res}</p>
      </div>
    </div>
  );
};

export default OpenWeather;
