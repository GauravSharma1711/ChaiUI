import Home from "./HomePage/MainHome/Home";
import PortfolioHero from "./MuksidRandom/HeroSections/PortfolioHero";
import Navbar from "./MuksidRandom/Navbar/Navbar";

function App() {
  return (
    <>
      {/* <div className="relative flex justify-center">
        <Navbar />
        {/* <Home /> */}
      {/* </div> */} */
      <Navbar />
      <PortfolioHero />
    </>
  );
}

export default App;
