import { useState, useEffect } from "react";
import Header from "./components/home/Header";
import Stats from "./components/home/Stats";
import Business from "./components/home/Business";
import Billing from "./components/home/Billing";
import CardDeal from "./components/home/CardDeal";
import Testimonials from "./components/home/Testimonials";
import Footer from "./components/home/Footer";
import styles from "./style";
import Weight from "./components/home/Weight";
import Seller from "./components/home/Seller";
import { FiArrowUp } from "react-icons/fi";
import StartHeader from "./components/home/Hero";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setShowBackToTop(scrollPosition > window.innerHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <StartHeader />
        </div>
      </div>

      <div>
        <Weight />
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Seller />
          <Footer />
        </div>
      </div>
      {showBackToTop && (
        <button
          className="w-[55px] h-[55px] rounded-full flex justify-center items-center fixed right-[40px] bottom-[80px] text-white bg-gradient-to-tl from-[#ff7b59] to-[#ff4500] border-[2px] border-white hover:shadow-2xl transform text-[30px] hover:scale-105 transition-transform backtotop"
          onClick={scrollToTop}
        >
          <FiArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;
