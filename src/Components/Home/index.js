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

function Home() {
  const [activeWindow, setActiveWindow] = useState(1);

  let timeout;
  let scroll_timeout;

  async function scrollTo(i) {
    freezeScroll(); //freeze scroll as soon as the function is initiated.

    clearTimeout(timeout);
    clearTimeout(scroll_timeout);

    //? the timeout here, for scrolling is added : 
    //? because when the function 'scrollToWithoutLag' is triggered via navbar click,
    //? if there is no timeout for the below 'timeout' function than 
    //? even if the user is on 5th page and clicks 1st page nav index (diamond), 
    //? it'll only go to the above index page i.e. 4th page
    //? as the 'scrollToWithoutLag' function will be over-written by the useEffect under pages and trigger 'scrollTo'
  
    timeout =  setTimeout(() => {
      setActiveWindow(i);
      
      const element = document.getElementById(`#${i}`);
      if (element) {
        element.scrollIntoView();
      }
    }, 280);
    
    scroll_timeout = setTimeout(() => {
      freeScroll(); // free the scroll as soon as the function end...
    }, 1000);
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
