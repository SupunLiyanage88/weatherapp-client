import React, { useEffect, useState } from "react";
import { getAllWeather, type WeatherData } from "../api/weatherAPI";

const Dashboard: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

  // Function to get a random tint color
  const getRandomTint = () => {
    const colors = [
      "rgba(255,0,0,0.3)", // red tint
      "rgba(0,0,255,0.3)", // blue tint
      "rgba(0,255,0,0.3)", // green tint
      "rgba(255,165,0,0.3)", // orange tint
      "rgba(128,0,128,0.3)", // purple tint
      "rgba(0,255,255,0.3)", // cyan tint
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllWeather();
      setWeatherData(data);
    };
    fetchData();
  }, []);

  return (
    <div
      className="min-h-screen p-8 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/src/assets/images/dashboard-bg.jpg')",
        backgroundColor: "rgba(0,0,0,0.3)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="bg-opacity-50 rounded-xl p-6 ">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Weather Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
          {weatherData.map((city, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage: "url('/src/assets/images/card-bg.jpg')",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: getRandomTint(), // 🎨 random tint
                backgroundBlendMode: "overlay",
              }}
            >
              <h2 className="text-2xl font-semibold text-gray-300 mb-2">
                {city.name}
              </h2>
              <p className="text-gray-300 mb-2 capitalize">
                {city.description}
              </p>
              <p className="text-3xl font-bold text-white">{city.temp} °C</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
