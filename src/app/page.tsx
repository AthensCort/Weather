import Image from "next/image";
import Background from './background/background'; 
import Search from "./components/searchbar";

export default function Home() {
  return (
    <div>
      <Background />
      <div className="min-h-screen text-center pt-80">
      {/*<h1 className="text-7xl font-title text-center mb-10 text-black mix-blend-difference"
      style={{ textShadow: "2px 2px 10px rgba(145, 255, 0, 0.8)" }}> Where do we want to be today? </h1> */}
      <h2><Search/></h2>
      <h2 className="text-7xl font-title text-center mb-10 text-green mix-blend-difference"> Where do we want to be today? </h2>

      </div>
    </div>
  );
}
