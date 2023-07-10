import RangeSlider from "./Slider";
import Wifi from "./Wifi";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wifi" element={<Wifi />} />
      <Route path="/slider" element={<RangeSlider />} />
    </Routes>
  );
};

export default App;
