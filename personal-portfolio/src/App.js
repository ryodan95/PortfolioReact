import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/About";
import Services from './components/Services';
import Price from "./components/Price";
import Footer from './components/Footer';
import React, { useEffect } from "react";
import Contact from "./components/Contact";


function App() {


  return (
    <div className="App">
      <Header />
      <Portfolio />
      <NavBar />
      <About />
      <Services />
      <Price />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

