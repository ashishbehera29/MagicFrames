import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/3033.jpg"; // Import your image

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-['Poppins'] relative overflow-hidden">
      {/* Background Image Properly Fitting */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", // Stretch while maintaining aspect ratio
          backgroundPosition: "center", // Align properly
          backgroundRepeat: "no-repeat", // Prevent repetition
          width: "100%",
          height: "100%",
          opacity: 0.5
        }}
      ></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center flex-grow text-center px-6 z-10">
       <h1 className="text-lg text-black mt-4 max-w-2xl">MagicFrames</h1>
        <h2 className="text-4xl md:text-6xl font-extrabold text-black-500 mt-10 uppercase leading-snug">
          CREATE YOUR FRAME <br /> IN YOUR STYLE
        </h2>
        <p className="text-lg text-black mt-4 max-w-2xl">
          Design a personalized frame with your favorite gods, custom backgrounds, and add-ons.  
          Make it unique to your vision!
        </p>
        <Link to="/dimension" className="mt-8">
          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transform transition-all 
            hover:bg-blue-700 hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            Create Your Frame
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
