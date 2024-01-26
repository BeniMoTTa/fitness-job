import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import Stats from "./components/home/Stats";
import Business from "./components/home/Business";
import Billing from "./components/home/Billing";
import CardDeal from "./components/home/CardDeal";
import Testimonials from "./components/home/Testimonials";
import Clients from "./components/home/Clients";
import CTA from "./components/home/CTA";
import Footer from "./components/home/Footer";
import styles from "./style";
import Weight from "./components/home/Weight";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
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
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
