import Image from "next/image";
import Background from './background/background'; 
import WeatherSearch from "./components/WeatherSearch"; 

export default function Home() {
  return (
    <div className="relative">
      <Background />
      <div className="min-h-screen flex flex-col items-center justify-start pt-20">
        <h2 className="text-7xl font-title text-center text-blue-900 mb-8">
          Where do we want to be today?
        </h2>
        <WeatherSearch />
      </div>
    </div>
  );
}
