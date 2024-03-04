import { useState } from "react";
import styles from "./styles.module.css";
import NavBar from "./Components/NavBar";
import One from "./Components/One";
import Two from "./Components/Two";
import Three from "./Components/Three";
import Four from "./Components/Four";
import Five from "./Components/Five";
import Header from "./Components/Header";

  
function App() {
  const [activeWindow, setActiveWindow] = useState(1);

  function scrollTo (i) {
      setActiveWindow(i);
      const element = document.getElementById(`#${i}`);
      element.scrollIntoView({ behavior: "smooth" });
  };

  console.log('activeWindow : ', activeWindow)

  return (
    <div id="main_con" className={styles.container}>
      <Header activeWindow={activeWindow} />

      <NavBar activeWindow={activeWindow} scrollTo={scrollTo} />


      <One scrollTo={scrollTo} />
      <Two scrollTo={scrollTo} />
      <Three scrollTo={scrollTo} />
      <Four scrollTo={scrollTo} />
      <Five scrollTo={scrollTo} />
    </div>
  );
}

export default App;
