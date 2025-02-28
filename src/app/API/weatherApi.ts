import axios from "axios";
import { Weather } from "../types/weather";

const API_KEY = "155bb2f1f42f42719f234742252702";    
const BASE_URL = "https://api.weatherapi.com/v1";

export const fetchWeather = async (city: string): Promise<Weather | null> => {
  try {
    const response = await axios.get<Weather>(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
