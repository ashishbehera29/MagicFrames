import { createContext, useState } from "react";

export const FrameContext = createContext();

export const FrameProvider = ({ children }) => {
  const [height, setHeight] = useState(20);
  const [width, setWidth] = useState(10);
  const [numGods, setNumGods] = useState(0);
  const [frameStyle, setFrameStyle] = useState(null);
  const [selectedGods, setSelectedGods] = useState([]); 
  const [selectedBackground, setSelectedBackground] = useState(null);// Stores gods with positions // Store selected frame style

  return (
    <FrameContext.Provider value={{ 
      height, width, numGods, setHeight, setWidth, setNumGods, 
      frameStyle, setFrameStyle, selectedGods, setSelectedGods , selectedBackground, // ✅ Provide it in context
      setSelectedBackground,  // Provide frameStyle state
    }}>
      {children}
    </FrameContext.Provider>
  );
};
