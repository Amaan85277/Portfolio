import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Header from "../Header";
import NavBar from "../NavBar";
import { Context } from "../../Contexts";
import { freezeScroll, freeScroll } from "../../utils/freezeUtils";

function Home() {
  const [activeWindow, setActiveWindow] = useState(1);

  let timeout;
  let scroll_timeout;

  function scrollTo(i) {
    freezeScroll(); //freeze scroll as soon as the function is initiated.

    clearTimeout(timeout);
    clearTimeout(scroll_timeout);

    const element = document.getElementById(`#${i}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    timeout = setTimeout(() => {
      setActiveWindow(i);
    }, 280);

    scroll_timeout = setTimeout(() => {
      freeScroll(); // free the scroll as soon as the function end...
    }, 2000);
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

      <One scrollTo={scrollTo} scrollToWithoutLag={scrollToWithoutLag} />
      <Two scrollTo={scrollTo} scrollToWithoutLag={scrollToWithoutLag} />
      <Three scrollTo={scrollTo} scrollToWithoutLag={scrollToWithoutLag} />
      <Four scrollTo={scrollTo} scrollToWithoutLag={scrollToWithoutLag} />
      <Five scrollTo={scrollTo} scrollToWithoutLag={scrollToWithoutLag} />
    </div>
  );
}

export default Home;
