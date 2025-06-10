import { useState } from "react";
import "./App.css";
import Header from "./Header";
import FilteredWater from "./Filter";
import WaterBucket from "./Water";
import filter from "./assets/water_filter.png";
import jug from "./assets/water_jug.png";

function App() {
  let [waterImage, setWaterImage] = useState<boolean>(false);

  const [water, setWater] = useState<string[]>([
    "chlorine",
    "salt",
    "dirt",
    "calcite",
  ]);

  const handleOnClick = () => {
    let filteredWater: string[] = FilteredWater(water, contaminates);
    setWater(filteredWater);

    setWaterImage(true);
  };

  let contaminates: string[] = ["dirt", "uranium", "germs"];

  return (
    <div>
      <Header />
      <p className="click">
        To filter the water click the filter and see what happens:{" "}
      </p>
      <div className="button">
        <button onClick={handleOnClick}>
          <img src={filter} alt="machine" />
        </button>
      </div>
      <>
        <div className="result">
          {waterImage && (
            <img className="bucket" src={jug} alt="Water Bucket" />
          )}
          <WaterBucket water={water.map((item) => item + " ").join("")} />
        </div>
      </>
    </div>
  );
}

export default App;
