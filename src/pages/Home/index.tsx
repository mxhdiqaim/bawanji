import Travelers from "../../components/Travelers";
import Support from "../../components/Support";
import Subscriber from "../../components/Subscribers";
import Search from "../../components/Search";
import Navbar from "../../components/Navbar";
import Lounge from "../../components/Lounge";
import Info from "../../components/Info";
import Home from "../../components/Home";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscriber />
      <Footer />
    </>
  );
};

export default index;
