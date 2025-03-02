import { useContext } from "react";
import { FrameContext } from "../context/FrameContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dimension = () => {
  const { setHeight, setWidth, setNumGods, height, width, numGods } = useContext(FrameContext);

  const handleHeightChange = (e) => {
    const value = Number(e.target.value);
    if (value > 50) {
      alert("Height can be a maximum of 50 inches.");
    } else {
      setHeight(value);
    }
  };

  const handleWidthChange = (e) => {
    const value = Number(e.target.value);
    if (value > 100) {
      alert("Width can be a maximum of 100 inches.");
    } else {
      setWidth(value);
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-br from-purple-200 to-purple-300">
      <Navbar />
      <div className="flex flex-grow overflow-hidden relative">
        <Sidebar />

        <div className="absolute h-190 ml-300 w-1/4 p-4 bg-white shadow-lg">
          <div className="flex flex-col space-y-3">
            <label className="text-m font-semibold">
              Height (in inches):
              <input
                type="number"
                value={height}
                onChange={handleHeightChange}
                className="w-40 ml-2 p-2 border border-gray-400 rounded"
              />
            </label>

            <label className="text-m font-semibold">
              Width (in inches):
              <input
                type="number"
                value={width}
                onChange={handleWidthChange}
                className="w-40 ml-2 p-2 border border-gray-400 rounded"
              />
            </label>

            <label className="text-m font-semibold">
              No. of Gods:
              <input
                type="number"
                value={numGods}
                onChange={(e) => setNumGods(Number(e.target.value))}
                className="w-40 ml-2 p-2 border border-gray-400 rounded"
              />
            </label>
          </div>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center p-6">
          <h2 className="mr-80 mb-10 text-2xl font-bold text-gray-900 bg-white px-6 py-2 rounded-lg shadow-md">
            Dimension Section
          </h2>
          <div 
            className="mr-80 flex bg-white border border-black justify-center p-4 max-h-[80vh] overflow-hidden shadow-xl rounded-lg"
            style={{ 
              height: `${height * 10}px`, 
              width: `${width * 10}px`,
            }}>
            <div className="w-full flex gap-4">
              {Array.from({ length: numGods }).map((_, index) => (
                <div key={index} 
                  className="border border-gray-500 bg-gray-200"
                  style={{ 
                    width: `calc(100% / ${numGods} - 10px)`, 
                    height: "100%",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dimension;
