import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Discription from "./components/Discription";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Logo />
      <Nav />
      <Hero />
      <Cards />
      <Discription />
      <Products />
      <Footer />
    </>
  );
}

export default App;
