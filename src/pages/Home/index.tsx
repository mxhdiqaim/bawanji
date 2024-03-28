import {
  Footer,
  Home,
  Info,
  Lounge,
  Navbar,
  Search,
  Subscriber,
  Support,
  Travelers,
} from "../../components";

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
