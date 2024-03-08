import { useContext, useState } from "react";
import styles from "./styles.module.css";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Header from "../Header";
import NavBar from "../NavBar";
import { Context } from "../../Contexts";

function Home() {
  const [activeWindow, setActiveWindow] = useState(1);

  let timeout;
  function scrollTo(i) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setActiveWindow(i);
      const element = document.getElementById(`#${i}`);
      if (element) {
        element.scrollIntoView();
      }
    }, 800);
  }

  function scrollToWithoutLag(i) {
    setActiveWindow(i);
    const element = document.getElementById(`#${i}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const { isMobile = false } = useContext(Context);

  return (
    <div id="main_con" className={styles.container}>
      <Header
        activeWindow={activeWindow}
        scrollToWithoutLag={scrollToWithoutLag}
      />

      {isMobile ? null : (
        <NavBar
          activeWindow={activeWindow}
          scrollToWithoutLag={scrollToWithoutLag}
        />
      )}

      <One scrollTo={scrollTo} />
      <Two scrollTo={scrollTo} />
      <Three scrollTo={scrollTo} />
      <Four scrollTo={scrollTo} />
      <Five scrollTo={scrollTo} />
    </div>
  );
}

export default Home;
