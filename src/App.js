import "./App.css";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Pricing from "./components/Pricing";
import Trusted from "./components/Trusted";
import Usage from "./components/Usage";

function App() {
  return (
    <div style={{ "max-width": "1440px", margin: "0 auto" }}>
      <Header />
      <Hero />
      <Trusted />
      <Info />
      <Usage />
      <Pricing />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
