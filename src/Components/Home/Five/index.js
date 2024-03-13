import React, { useCallback, useContext, useEffect } from "react";
import styles from "./styles.module.css";
import EndingPage from "./EndingPage";
import { Context } from "../../../Contexts";
import checkScrollDirectionIsUp from "../../../utils/checkScrollDirectionIsUp";

function Five({ scrollTo = () => {} }) {

  const checkScrollDirection = useCallback((event) => {
    if (checkScrollDirectionIsUp(event)) {
      scrollTo(4);
    } else {
      console.log('down');
    }
  },[scrollTo])
  
  useEffect(() => {
    var scrollableElement = document.getElementById("#5");

    scrollableElement.addEventListener("wheel", checkScrollDirection);

    return () => {
      scrollableElement.removeEventListener("scroll", checkScrollDirection);
    };
  }, [checkScrollDirection]);

  const { isMobile = false } = useContext(Context);

  if (isMobile) {
    return (
      <div id="#5" className={styles.container}>
        <EndingPage />
      </div>
    );
  }

  return (
    <div id="#5" className={styles.container}>
      <EndingPage />
    </div>
  );
}

export default Five;
