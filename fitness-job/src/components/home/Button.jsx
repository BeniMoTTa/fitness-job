// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins   font-bold text-[18px] text-black  bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Venha conhecer!
  </button>
);

export default Button;
