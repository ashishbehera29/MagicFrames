import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Home from "./pages/Home";
import Dimension from "./pages/Dimension";
import Frame from "./pages/Frame";
import GodsImage from "./pages/GodsImage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addons from "./pages/Addons";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dimension" element={<Dimension />} />
          <Route path="/frame" element={<Frame />} />
          <Route path="/gods-image" element={<GodsImage />} />
          <Route path="/addons" element={<Addons/>} />
        </Routes>
      </Router>
    </DndProvider>
  );
}

export default App;
