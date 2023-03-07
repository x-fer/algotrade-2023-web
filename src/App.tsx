import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Slide from "./components/Slide/Slide";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Slide>aaa</Slide>
        <Slide>bbb</Slide>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
