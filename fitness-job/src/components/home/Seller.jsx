import styles from "../../style";
import Button from "./Button";

const Seller = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col background-animated rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col text-justify ">
      <h2
        className={` maxsm:text-[30px] maxsm:text-left font-merriweather font-semibold text-white text-[50px]`}
      >
        Venha nos conhecer agora
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Estarei do seu lado desde o começo da sua jornada, até o seu objetivo
        final. Lembrando, o primeiro passo é ter um objetivo!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default Seller;
