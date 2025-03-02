import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-50 bg-white bg-opacity-80 backdrop-blur-md h-screen p-6 shadow-lg border-r border-gray-300">
      
      
      <nav className="flex flex-col space-y-4">
        <Link
          to="/dimension"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 text-center rounded-lg shadow-md 
                     transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Dimension
        </Link>
        
        <Link
          to="/frame"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 text-center rounded-lg shadow-md 
                     transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Frame
        </Link>
        
        <Link
          to="/gods-image"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 text-center rounded-lg shadow-md 
                     transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Gods Image
        </Link>
        
        <Link
          to="/addons"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 text-center rounded-lg shadow-md 
                     transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Add-ons
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
