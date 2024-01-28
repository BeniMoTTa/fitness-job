const InfoWeight = () => {
  return (
    <div className="text-white max-w-[1400px] text-justify flex justify-center flex-col">
      <div className="flex  flex-col w-full mb-4 items-center">
        <h3 className="text-3xl font-merriweather font-extrabold">
          Peso Ideal e Saúde
        </h3>
        <p className="text-xl">
          Pontos importantes para falarmos sobre a sua saúde
        </p>
      </div>

      <p className="text-[18px]">
        O peso ideal é um termo relativo que varia de acordo com a idade, sexo,
        composição corporal e nível de atividade física de cada pessoa. Em
        geral, é aquele que está dentro da faixa de referência do Índice de
        Massa Corporal (IMC).
      </p>
      <p className="text-[18px]">
        O IMC é calculado dividindo o peso em quilogramas pela altura em metros
        ao quadrado. Considera-se sobrepeso quando o IMC está entre 25 e 29,9, e
        obesidade quando é igual ou superior a 30.
      </p>
      <h3 className="text-2xl font-semibold mt-2">
        Importância do Peso Ideal para a Saúde:
      </h3>
      <ul className="list-none pl-6 pt-3">
        <li className="mb-2 flex items-center text-xl font-light">
          <span className="inline-block min-w-4 h-4 bg-green-500 rounded-full mr-2"></span>
          Menor risco de doenças crônicas, incluindo cardiovasculares, diabetes
          tipo 2 e alguns tipos de câncer;
        </li>
        <li className="mb-2 flex items-center text-xl font-light">
          <span className="inline-block min-w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
          Melhora da saúde mental, autoestima e bem-estar;
        </li>
        <li className="mb-2 flex items-center text-xl font-light">
          <span className="inline-block min-w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
          Maior capacidade física e resistência;
        </li>
        <li className="mb-2 flex items-center text-xl font-light">
          <span className="inline-block min-w-4 h-4 bg-red-500 rounded-full mr-2"></span>
          Maior expectativa de vida.
        </li>
      </ul>
    </div>
  );
};

export default InfoWeight;
