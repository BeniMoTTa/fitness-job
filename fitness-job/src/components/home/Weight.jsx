import InfoWeight from "./InfoWeight";
import { useState, useEffect } from "react";

const Weight = () => {
  const [height, setHeight] = useState("");
  const [showInfoWeight, setShowInfoWeight] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [calculatedBMI, setCalculatedBMI] = useState(null);

  const calculateBMI = () => {
    if (height) {
      // Convert height from centimeters to meters
      const heightInMeters = parseFloat(height) / 100;

      // Use a range of BMI values for a more realistic ideal weight range
      const bmiRange = [18.5, 24.9]; // Healthy BMI range

      const minIdealWeight = bmiRange[0] * Math.pow(heightInMeters, 2);
      const maxIdealWeight = bmiRange[1] * Math.pow(heightInMeters, 2);

      setCalculatedBMI({
        min: minIdealWeight.toFixed(1),
        max: maxIdealWeight.toFixed(1),
      });
    } else {
      setCalculatedBMI({ min: 0, max: 0 }); // Set 0 for both results when input is empty
    }
  };

  useEffect(() => {
    calculateBMI();
  }, [height]);

  const handleChangeHeight = (e) => {
    const typeHeight = e.target.value;

    if (typeHeight.length > 0 && !showInfoWeight) {
      setShowInfoWeight(true);
      setShowInfo(true);
    }

    setHeight(typeHeight);
  };

  return (
    <div
      id="test"
      className={`h-fit pb-32 pt-20 background-animated border-t-2 border-b-2 border-white flex justify-center text-justify px-4 flex-col items-center transition-height duration-500 ease-in-out ${
        showInfo ? "h-auto" : "h-fit"
      }`}
    >
      <h3 className="text-white text-[30px] maxsm:text-[15px] font-merriweather font-extrabold">
        Calcule seu{" "}
        <span className="text-[45px] maxsm:text-[25px] text-cover3 ">PESO</span>{" "}
        ideal com sua{" "}
        <span className="text-[45px] maxsm:text-[25px] text-[#5ce1e6] ">
          ALTURA
        </span>{" "}
        atual.
      </h3>
      <div className="flex w-full justify-center pt-10 maxsm:flex-col max-w-[1400px]">
        <div className="input-container w-[50%] h-full maxsm:w-full pb-8 ">
          <input
            className=""
            id="height"
            type="number"
            placeholder="Coloque sua altura em centímetros..."
            value={height}
            onChange={handleChangeHeight}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </div>

        <div className="h-full w-[1px] bg-white"></div>
        {showInfoWeight && (
          <div className=" hide-info-weight  px-8 pt-6 w-[50%] maxsm:w-full pb-8 mb-4 translate-x-0 sm:translate-x-full">
            <h4 className="text-cover text-xl font-merriweather">
              Seu peso ideal está entre:
            </h4>
            <p className="font-poppins h-full font-extrabold w-full text-[80px] flex maxsm:text-[50px] justify-center mt-1 gradient-text">
              {calculatedBMI ? calculatedBMI.min : ""}
              <span className="h-full  flex mx-4 text-[20px] items-center">
                a
              </span>
              {calculatedBMI ? calculatedBMI.max : ""}
              <span className="text-cover text-xl h-full flex items-end">
                kg
              </span>
            </p>
          </div>
        )}
      </div>
      {showInfo && (
        <div className="hide-info">
          <InfoWeight />
        </div>
      )}
    </div>
  );
};

export default Weight;
