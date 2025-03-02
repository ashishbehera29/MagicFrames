import { useContext } from "react";
import { FrameContext } from "../context/FrameContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";

const frameStyles = [
  { src: frame1, name: "Classic Frame" },
  { src: frame2, name: "Elegant Frame" },
  { src: frame3, name: "Modern Frame" }
];

const Frame = () => {
  const { height, width, numGods, frameStyle, setFrameStyle } = useContext(FrameContext);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-purple-200 to-purple-300 overflow-hidden">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex flex-grow p-6">
          <div className="flex flex-col items-center flex-grow">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 bg-white px-6 py-2 rounded-lg shadow-md">
              Frame Selection
            </h2>
            <div
              className="relative p-4 bg-white border border-black shadow-xl rounded-lg"
              style={{ height: `${height * 10}px`, width: `${width * 10}px` }}>
              {frameStyle && (
                <img
                  src={frameStyle}
                  alt="Selected Frame"
                  className="absolute inset-0 pointer-events-none"
                  style={{ height: "100%", width: "100%", objectFit: "fill", zIndex: 10 }}/>
              )}

             
              <div
                className="bg-white flex flex-wrap p-2 relative"
                style={{
                  height: "100%",
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: `repeat(${numGods}, 1fr)`,
                  gap: "8px",
                  zIndex: 5,
                }}
              >
                {Array.from({ length: numGods }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 border border-gray-500 flex justify-center items-center relative"
                    style={{ height: "100%" }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="h-140 ml-7 flex flex-col justify-center items-center space-y-1 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-900 mb-10">Select Frames</h2>
            {frameStyles.map((style, index) => (
              <div key={index} className="flex flex-col justify-center items-center">
                <img
                  src={style.src}
                  alt={style.name}
                  className="w-32 h-32 cursor-pointer border-2 border-gray-300 hover:border-black rounded-lg transition-transform transform hover:scale-110"
                  onClick={() => setFrameStyle(style.src)}
                />
                <p className="mt-2 text-sm font-medium text-gray-800">{style.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
