// weatherAPI.ts
import axios from "axios";

export interface WeatherData {
  name: string;
  description: string;
  temp: number;
}

export const cities = [
  { CityCode: "1248991", CityName: "Colombo" },
  { CityCode: "1850147", CityName: "Tokyo" },
  { CityCode: "2644210", CityName: "Liverpool" },
  { CityCode: "2988507", CityName: "Paris" },
  { CityCode: "2147714", CityName: "Sydney" },
  { CityCode: "4930956", CityName: "Boston" },
  { CityCode: "1796236", CityName: "Shanghai" },
  { CityCode: "3143244", CityName: "Oslo" },
];

const BASE_URL = import.meta.env.VITE_API_BASE_URL + "/weather";


// Helper to get auth headers
const authHeaders = () => {
  const token = localStorage.getItem("token"); // make sure you save it after login
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getWeather = async (cityId: string) => {
  const response = await axios.get(`${BASE_URL}/${cityId}`, authHeaders());
  return response.data as WeatherData;
};

export const getAllWeather = async () => {
  const results: WeatherData[] = [];
  for (const city of cities) {
    try {
      const data = await getWeather(city.CityCode);
      results.push(data);
    } catch (e) {
      console.warn(`Failed to fetch weather for ${city.CityName}`, e);
    }
  }
  return results;
};
