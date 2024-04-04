// Comps imports
import Travelers from "../../components/Travelers";
import Support from "../../components/Support";
import Subscriber from "../../components/Subscribers";
import FlightSearch from "../../components/FlightSearch";
import Navbar from "../../components/Navbar";
import Lounge from "../../components/Lounge";
import Info from "../../components/Info";
import Home from "../../components/Home";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <FlightSearch />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscriber />
      <Footer />
    </>
  );
};

export default HomePage;
