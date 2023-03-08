import React from "react";
import "./App.scss";
import AboutSlide from "./components/AboutSlide/AboutSlide";
import ApplySlide from "./components/ApplySlide/ApplySlide";
import Header from "./components/Header/Header";
import HomeSlide from "./components/HomeSlide/HomeSlide";
import PartnersSlide from "./components/PartnersSlide/PartnersSlide";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomeSlide />
        <AboutSlide />
        <PartnersSlide />
        <ApplySlide />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
