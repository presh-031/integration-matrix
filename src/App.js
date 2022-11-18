import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Pricing from "./components/Pricing";
import Trusted from "./components/Trusted";
import Usage from "./components/Usage";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Trusted />
      <Info />
      <Usage />
      <Pricing />
    </div>
  );
}

export default App;
