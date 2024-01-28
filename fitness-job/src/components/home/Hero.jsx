import styles from "../../style";

import GetStarted from "./GetStarted";
import { MdOutlineDiscount } from "react-icons/md";
const StartHeader = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col py-48 `}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <MdOutlineDiscount className="text-[#ff4500]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">50%</span> de desconto nos{" "}
            <span className="text-white">3 primeiros meses</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            O seu parceiro <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Profissional</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          para sua saúde
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
          Que tal conseguir seus objetivos, de forma rápida, técnica, sem
          privações alimentares, buscando o seu bem estar e saúde.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="rounded border-2 border-white ">
          <img
            src={
              "https://img.freepik.com/fotos-gratis/o-atleta-masculino-treinando-forte-na-academia_155003-38259.jpg"
            }
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5] bg-cover"
          />
        </div>

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default StartHeader;
