import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import { useEffect, useMemo, useState } from "react";
import { Context } from "./Contexts";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 510;

  const contextValue = useMemo(() => {
    return { isMobile };
  }, [isMobile]);

  console.log('isMobile : ', isMobile);

  return (
    <Context.Provider value={contextValue}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/my-resume" element={<Resume />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
