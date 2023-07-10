import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <div className="HomeContainer">
      <h1 className="HomeHeading">Widgets</h1>
      <Link to="/wifi">
        <button className="HomeLink">Wifi Signal</button>
      </Link>
      <Link to="/slider">
        <button className="HomeLink">Slider</button>
      </Link>
    </div>
  );
};

export default Home;
