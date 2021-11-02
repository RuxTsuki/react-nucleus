import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { ThirdSection } from "./components/third-section/ThirdSection";
import { WhatIsNucleus } from "./components/what-is-nucleus/WhatIsNucleus";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <WhatIsNucleus />
        <ThirdSection />
      </div>
    </div>
  );
}

export default App;
