import { useState } from "react";
import styles from "./styles.module.css";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Header from "../Header";
import NavBar from "../NavBar";
  
function Home() {
  const [activeWindow, setActiveWindow] = useState(1);

  function scrollTo (i) {
      setActiveWindow(i);
      const element = document.getElementById(`#${i}`);
      element.scrollIntoView({ behavior: "smooth" });
  };

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

export default Home;
