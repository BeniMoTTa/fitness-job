import InfoWeight from "./InfoWeight";
import { useState } from "react";

const Weight = () => {
  const [height, setHeight] = useState("");
  const [showInfoWeight, setShowInfoWeight] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

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
      className={`h-fit pb-32 pt-20 bg-black flex justify-center flex-col items-center transition-height duration-500 ease-in-out ${
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
        <form className=" shadow-md rounded w-[50%] h-full flex-auto items-center maxsm:w-full px-8 pt-6 pb-8">
          <div className="flex h-full justify-center items-center">
            <input
              className="shadow h-12 font-merriweather text-xl  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="height"
              type="number"
              placeholder="Coloque sua altura em centímetros..."
              value={height}
              onChange={handleChangeHeight}
            />
          </div>
        </form>
        <div className="h-full w-[1px] bg-white"></div>
        {showInfoWeight && (
          <div className=" hide-info-weight shadow-md rounded px-8 pt-6 w-[50%] maxsm:w-full pb-8 mb-4 translate-x-0 sm:translate-x-full">
            <h4 className="text-cover text-xl font-merriweather">
              Seu peso ideal está entre:
            </h4>
            <p className="font-poppins h-full font-extrabold w-full text-[80px] flex justify-center mt-1 gradient-text">
              50{" "}
              <span className="h-full  flex mx-4 text-[20px] items-center">
                a
              </span>{" "}
              75
              <span className="text-cover text-xl h-full flex items-end ">
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
