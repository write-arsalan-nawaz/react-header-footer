import React, { useState } from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";
import Content from "./components/Content";

const App = () => {
  const [activeHeader, setActiveHeader] = useState(null);
  const [activeSubHeader, setActiveSubHeader] = useState(null);

  return (
    <div className="app">
      <Header setActiveHeader={setActiveHeader} />
      {activeHeader && (
        <SubHeader
          activeHeader={activeHeader}
          setActiveSubHeader={setActiveSubHeader}
        />
      )}
      <main>
        <Content activeSubHeader={activeSubHeader} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
