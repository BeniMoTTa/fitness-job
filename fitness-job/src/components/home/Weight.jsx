import InfoWeight from "./InfoWeight";

const Weight = () => {
  return (
    <div className="h-fit pb-32 bg-black flex justify-center  flex-col items-center">
      <h3 className="text-white text-[30px] maxsm:text-[15px] font-merriweather font-extrabold">
        Calcule seu{" "}
        <span className="text-[45px] maxsm:text-[25px] text-cover3 ">PESO</span>{" "}
        ideal com sua{" "}
        <span className="text-[45px] maxsm:text-[25px] text-primary ">
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
              type="text"
              placeholder="Coloque sua altura em centímetros..."
            />
          </div>
        </form>
        <div className="h-full w-[1px] bg-white"></div>
        <div className="shadow-md rounded px-8 pt-6 w-[50%] maxsm:w-full pb-8 mb-4">
          <h4 className="text-cover text-xl font-merriweather">
            Seu peso ideal está entre:
          </h4>
          <p className="font-poppins h-full font-extrabold w-full text-[80px] flex justify-center mt-1 gradient-text ${styles}">
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
      </div>
      <InfoWeight />
    </div>
  );
};

export default Weight;
