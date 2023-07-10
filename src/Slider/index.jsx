import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import CircleProgressBar from "./CircleProgressBar";

const RangeSlider = () => {
  const [sliderValue, setSliderValue] = useState(5);

  return (
    <div className="SliderContainer">
      <CircleProgressBar percentage={sliderValue} circleWidth="200" />
      <input
        type="range"
        min="0"
        max="10"
        step="1"
        className="range-slider"
        id="range1"
        value={sliderValue}
        onChange={(ev) => setSliderValue(ev.target.value)}
      />
      <Link to="/">
        <button className="backBtn">Back</button>
      </Link>
    </div>
  );
};

export default RangeSlider;
