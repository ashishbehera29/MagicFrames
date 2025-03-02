import { useContext, useState } from "react";
import { FrameContext } from "../context/FrameContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpeg";
import cornerImg from "../assets/cornor.png";
import lamp1 from "../assets/lamp1.png";
import lamp2 from "../assets/lamp2.png";
import lamp3 from "../assets/lamp3.png";

const backgrounds = [bg1, bg2, bg3];
const lamps = [lamp1, lamp2, lamp3];

const Addons = () => {
  const { height, width, frameStyle, selectedGods = [], selectedBackground, setSelectedBackground } = useContext(FrameContext);
  const [showCorners, setShowCorners] = useState(false);
  const [selectedLamp, setSelectedLamp] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-br from-purple-200 to-purple-300">
      <Navbar />
      <div className="flex flex-grow overflow-hidden relative">
        <Sidebar />

        {/* Frame Preview Section */}
        <div className="mt-6 flex flex-grow justify-center relative">
          <div
            className="relative p-4 bg-white rounded-lg shadow-lg"
            style={{ height: `${height * 10}px`, width: `${width * 10}px` }}
          >
            {/* Background Image */}
            {selectedBackground && (
              <img
                src={selectedBackground}
                alt="Background"
                className="absolute inset-0 pointer-events-none rounded-lg"
                style={{ height: "100%", width: "100%", objectFit: "cover", zIndex: 1 }}
              />
            )}

            {/* Gods Images */}
            <div
              className="absolute top-0 left-0 w-full h-full grid p-6"
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${selectedGods.length}, 1fr)`,
                gap: "8px",
                zIndex: 10
              }}
            >
              {selectedGods.map((god, index) => (
                <div key={index} className="flex justify-center items-center relative" style={{ height: "100%" }}>
                  {god && <img src={god} alt="God" className="absolute object-contain rounded-lg" style={{ height: "100%", width: "100%" }} />}
                </div>
              ))}
            </div>

            {/* Lamps Between Gods */}
            {selectedLamp && selectedGods.length > 1 && (
              <div className="absolute top-[55%] left-0 flex justify-center w-full transform -translate-y-1/2 z-15">
                {Array.from({ length: selectedGods.length - 1 }).map((_, index) => (
                  <img
                    key={index}
                    src={selectedLamp}
                    alt="Lamp"
                    className="absolute object-contain"
                    style={{
                      width: `${width * 4}px`,
                      height: `${height * 4}px`,
                      left: `${(100 / selectedGods.length) * (index + 1)}%`,
                      transform: "translateX(-50%)"
                    }}
                  />
                ))}
              </div>
            )}

            {/* Frame Style */}
            {frameStyle && (
              <img
                src={frameStyle}
                alt="Frame Style"
                className="absolute inset-0 pointer-events-none"
                style={{ height: "100%", width: "100%", objectFit: "fill", zIndex: 20 }}
              />
            )}

            {/* Corner Design */}
            {showCorners && (
              <>
                {(() => {
                  const cornerWidth = Math.min(height, width) * 4;
                  const cornerHeight = height * 5.7;
                  const offsetX = cornerWidth * 0.0;
                  const offsetY = cornerHeight * 0.15;

                  return (
                    <>
                      <img src={cornerImg} alt="Corner" className="absolute" style={{ width: `${cornerWidth}px`, height: `${cornerHeight}px`, top: `${-offsetY}px`, left: `${-offsetX}px`, zIndex: 25 }} />
                      <img src={cornerImg} alt="Corner" className="absolute transform rotate-90" style={{ width: `${cornerWidth}px`, height: `${cornerHeight}px`, top: `${-offsetY}px`, right: `${-offsetX}px`, zIndex: 25 }} />
                      <img src={cornerImg} alt="Corner" className="absolute transform -rotate-90" style={{ width: `${cornerWidth}px`, height: `${cornerHeight}px`, bottom: `${-offsetY}px`, left: `${-offsetX}px`, zIndex: 25 }} />
                      <img src={cornerImg} alt="Corner" className="absolute transform rotate-180" style={{ width: `${cornerWidth}px`, height: `${cornerHeight}px`, bottom: `${-offsetY}px`, right: `${-offsetX}px`, zIndex: 25 }} />
                    </>
                  );
                })()}
              </>
            )}
          </div>
        </div>

        {/* Right Side Panel */}
        <div className="w-1/5 p-4 bg-white shadow-lg">
          <button 
            className="w-full py-3 mb-3 font-bold text-lg border-b bg-purple-200 hover:bg-purple-300 rounded-lg transition-all duration-200"
            onClick={() => setActiveTab(activeTab === "background" ? null : "background")}
          >
            Select Background
          </button>
          {activeTab === "background" && (
            <div className="grid grid-cols-2 gap-4 p-3">
              {backgrounds.map((bg, index) => (
                <img 
                  key={index} 
                  src={bg} 
                  alt={`Background ${index + 1}`} 
                  className="w-28 h-28 cursor-pointer border-2 border-gray-300 hover:border-purple-500 rounded-lg shadow-md hover:scale-105 transition-all duration-200" 
                  onClick={() => setSelectedBackground(bg)} 
                />
              ))}
            </div>
          )}

          <button 
            className="w-full py-3 mb-3 font-bold text-lg border-b bg-purple-200 hover:bg-purple-300 rounded-lg transition-all duration-200"
            onClick={() => setActiveTab(activeTab === "lamp" ? null : "lamp")}
          >
            Select Lamp
          </button>
          {activeTab === "lamp" && (
            <div className="flex flex-wrap gap-4 p-3">
              {lamps.map((lamp, index) => (
                <img 
                  key={index} 
                  src={lamp} 
                  alt={`Lamp ${index + 1}`} 
                  className={`w-24 h-24 cursor-pointer border-2 rounded-lg shadow-md transition-all duration-200 
                    ${selectedLamp === lamp ? "border-purple-500 scale-105" : "border-gray-300 hover:border-purple-500 hover:scale-105"}`} 
                  onClick={() => setSelectedLamp(selectedLamp === lamp ? null : lamp)} 
                />
              ))}
            </div>
          )}

          <button 
            className="w-full py-3 font-bold text-lg border-b bg-purple-200 hover:bg-purple-300 rounded-lg transition-all duration-200"
            onClick={() => setShowCorners(!showCorners)}
          >
            {showCorners ? "Remove Corners" : "Apply Corners"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addons;
