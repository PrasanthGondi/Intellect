import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Wifi = () => {
  const [selectedBar, setSelectedBar] = useState(1);

  const handleBarClick = (value) => {
    setSelectedBar(value);
  };

  return (
    <div className="mainContainer">
      <h1 className="Strength">{`${
        selectedBar < 3 ? "Low" : selectedBar > 4 ? "High" : "Good"
      }`}</h1>
      <div className="wifi-signal">
        {[5, 4, 3, 2, 1].map((value) => (
          <div
            key={value}
            className={`bar ${
              value <= selectedBar ? "active" : ""
            } bar${value}`}
            onClick={() => handleBarClick(value)}
          ></div>
        ))}
      </div>
      <Link to="/">
        <button className="backBtn">Back</button>
      </Link>
    </div>
  );
};

export default Wifi;
