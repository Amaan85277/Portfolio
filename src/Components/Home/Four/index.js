import React, { useCallback, useContext, useEffect} from "react";
import styles from "./styles.module.css";
import Connect from "./Connect";
import { Context } from "../../../Contexts";
import checkScrollDirectionIsUp from "../../../utils/checkScrollDirectionIsUp";

function Four({ scrollTo = () => {} }) {
  const checkScrollDirection = useCallback((event) => {
    if (checkScrollDirectionIsUp(event)) {
      scrollTo(3);
    } else {
      scrollTo(5);
    }
  },[scrollTo])
  
  useEffect(() => {
    var scrollableElement = document.getElementById("#4");

    scrollableElement.addEventListener("wheel", checkScrollDirection);

    return () => {
      scrollableElement.removeEventListener("scroll", checkScrollDirection);
    };
  }, [checkScrollDirection]);

  const { isMobile = false } = useContext(Context);

  if (isMobile) {
    return (
      <div id="#4" className={styles.container}>
        <Connect />
      </div>
    );
  }

  return (
    <div id="#4" className={styles.container}>
      <Connect />
    </div>
  );
}

export default Four;
