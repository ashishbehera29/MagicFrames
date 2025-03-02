import { useContext} from "react";
import { FrameContext } from "../context/FrameContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import god1 from "../assets/god1.png";
import god2 from "../assets/god2.png";
import god3 from "../assets/god3.png";

const godsList = [
  { src: god1, name: "God 1" },
  { src: god2, name: "God 2" },
  { src: god3, name: "God 3" },
];

const GodsImage = () => {
  const { height, width, numGods, frameStyle, selectedGods, setSelectedGods } = useContext(FrameContext);

  // Handle drag start
  const handleDragStart = (e, godSrc, fromIndex) => {
    e.dataTransfer.setData("godSrc", godSrc);
    e.dataTransfer.setData("fromIndex", fromIndex);
  };

  // Handle drop and remove from old partition
  const handleDrop = (e, newIndex) => {
    e.preventDefault();
    const godSrc = e.dataTransfer.getData("godSrc");
    const fromIndex = e.dataTransfer.getData("fromIndex");

    const updatedGods = [...selectedGods];
    if (fromIndex !== "null") updatedGods[fromIndex] = null;
    updatedGods[newIndex] = godSrc;

    setSelectedGods(updatedGods);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-purple-200 to-purple-300 overflow-hidden">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-grow p-6">
          {/* Frame Preview Section */}
          <div className="flex flex-col items-center flex-grow">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 bg-white px-6 py-2 rounded-lg shadow-md">
              Gods Selection
            </h2>
            <div
              className="relative p-4 bg-white border border-black shadow-xl rounded-lg"
              style={{ height: `${height * 10}px`, width: `${width * 10}px` }}
            >
              {frameStyle && (
                <img
                  src={frameStyle}
                  alt="Selected Frame"
                  className="absolute inset-0 pointer-events-none"
                  style={{ height: "100%", width: "100%", objectFit: "fill", zIndex: 10 }}
                />
              )}

              {/* Frame Partitions */}
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
                    className={`flex justify-center items-center relative transition-all ${
                      selectedGods[index] ? "" : "border border-gray-500 bg-gray-200"
                    }`}
                    style={{ height: "100%" }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, index)}
                    draggable={selectedGods[index] ? "true" : "false"}
                    onDragStart={(e) => selectedGods[index] && handleDragStart(e, selectedGods[index], index)}
                  >
                    {/* Display Dropped God Image */}
                    {selectedGods[index] && (
                      <img
                        src={selectedGods[index]}
                        alt="God"
                        className="absolute"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gods Selection Section */}
          <div className="h-145 ml-7 flex flex-col justify-center items-center space-y-1 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-900 mb-10">Select Gods Img <br />Drag & Drop</h2>
            {godsList.map((god, index) => (
              <div key={index} className="flex flex-col justify-center items-center">
                <img
                  src={god.src}
                  alt={god.name}
                  className="w-32 h-32 cursor-pointer border-2 border-gray-300 hover:border-black rounded-lg transition-transform transform hover:scale-110"
                  draggable
                  onDragStart={(e) => handleDragStart(e, god.src, "null")}
                />
                <p className="mt-2 text-sm font-medium text-gray-800">{god.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GodsImage;
