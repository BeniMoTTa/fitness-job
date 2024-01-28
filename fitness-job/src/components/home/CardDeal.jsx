import styles, { layout } from "../../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Acompanhamento <br className="sm:block hidden" /> para todos os perfis
      </h2>
      <p className={`${styles.paragraph} text-justify max-w-[470px] mt-5`}>
        Independente da sua condição, idade, dificuldade, tenho conhecimento
        para te acompanhar e te encaminhar para o seu desempenho e saúde.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img
        src={
          "https://sistemasca.blob.core.windows.net/arquivos/blog/c-11851ur.jpg"
        }
        alt="billing"
        className="w-[100%] h-[100%] rounded-xl"
      />
    </div>
  </section>
);

export default CardDeal;
