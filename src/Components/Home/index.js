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
import { freezeScroll, freeScroll } from "../../utils/scrollUtils";
import debounce from "lodash.debounce";

function Home() {
  const [activeWindow, setActiveWindow] = useState(1);

  let scroll_timeout;

  function scrollTo(i) {
    freezeScroll(); //freeze scroll as soon as the function is initiated.
    clearTimeout(scroll_timeout);
    setActiveWindow(i);

    const element = document.getElementById(`#${i}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    scroll_timeout = setTimeout(() => {
      freeScroll(); // free the scroll as soon as the function end...
    }, 1000);
  }

  const scrollWithDebounce = debounce(scrollTo, 1000);

  function scrollToWithoutLag(i) {
    setActiveWindow(i);
    const element = document.getElementById(`#${i}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const { isMobile = false } = useContext(Context);

  return (
    <div
      id="main_con"
      className={styles.container}
    >
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

      <One scrollTo={scrollWithDebounce} />
      <Two scrollTo={scrollWithDebounce} />
      <Three scrollTo={scrollWithDebounce} />
      <Four scrollTo={scrollWithDebounce} />
      <Five scrollTo={scrollWithDebounce} />
    </div>
  );
}

export default Home;