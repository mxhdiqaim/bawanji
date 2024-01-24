import "./App.scss";
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
} from "./Components";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscriber />
      <Footer />
    </div>
  );
}

export default App;
