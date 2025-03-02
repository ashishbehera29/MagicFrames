import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold tracking-wide hover:text-gray-200 transition duration-300">MagicFrames</Link>
    </div>
  );
};

export default Navbar;
