import axios from "axios";

export interface WeatherData {
  name: string;
  description: string;
  temp: number;
}

// City list
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

const BASE_URL = "http://localhost:8080/api/weather";

/**
 * Fetch weather data for a city by its ID
 * @param cityId CityCode from cities list
 * @returns WeatherData
 */
export const getWeather = async (cityId: string): Promise<WeatherData> => {
  try {
    const response = await axios.get<WeatherData>(`${BASE_URL}/${cityId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

/**
 * Fetch weather data for all cities
 */
export const getAllWeather = async (): Promise<WeatherData[]> => {
  const results: WeatherData[] = [];
  for (const city of cities) {
    try {
      const data = await getWeather(city.CityCode);
      results.push(data);
    } catch (e) {
      console.warn(`Failed to fetch weather for ${city.CityName}`);
    }
  }
  return results;
};
