import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); 

  const links = [
    { path: "/dimension", label: "Dimension" },
    { path: "/frame", label: "Frame" },
    { path: "/gods-image", label: "Gods Image" },
    { path: "/addons", label: "Add-ons" },
  ];

  return (
    <div className="w-50 bg-white bg-opacity-80 backdrop-blur-md h-screen p-6 shadow-lg border-r border-gray-300">
      <nav className="flex flex-col space-y-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`p-3 text-center rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              location.pathname === link.path
                ? "bg-gradient-to-r from-purple-500 to-purple-400 text-white font-bold shadow-xl scale-105"
                : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
