import { useState } from "react";
import "./App.css";
import Header from "./Header";
import FilteredWater from "./Filter";
import WaterBucket from "./Water";

function App() {
  let [waterImage, setWaterImage] = useState<boolean>(false);

  const handleOnClick = () => {
    let filteredWater: string[] = FilteredWater(water, contaminates);
    setWater(filteredWater);

    setWaterImage(true);
  };

  const [water, setWater] = useState<string[]>([
    "chlorine",
    "salt",
    "dirt",
    "calcite",
  ]);

  let contaminates: string[] = ["dirt", "uranium", "germs"];

  return (
    <div>
      <Header />
      <p className="click">
        To filter the water click the filter and see what happens:{" "}
      </p>
      <div className="button">
        <button onClick={handleOnClick}>
          <img src="water_filter.png" alt="machine" />
        </button>
      </div>
      <>
        <div className="result">
          {waterImage && (
            <img className="bucket" src="water_jug.png" alt="Water Bucket" />
          )}
          <WaterBucket water={water} />
        </div>
      </>
    </div>
  );
}

export default App;
