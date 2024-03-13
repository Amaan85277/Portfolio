import React, { useCallback, useContext, useEffect } from "react";
import styles from "./styles.module.css";
import Experience from "./Experience";
import ExperienceFlow from "./ExperienceFlow";
import { Context } from "../../../Contexts";
import checkScrollDirectionIsUp from "../../../utils/checkScrollDirectionIsUp";

function Three({ scrollTo = () => {} }) {
  const checkScrollDirection = useCallback((event) => {
    if (checkScrollDirectionIsUp(event)) {
      scrollTo(2);
    } else {
      scrollTo(4);
    }
  },[scrollTo])
  
  useEffect(() => {
    var scrollableElement = document.getElementById("#3");

    scrollableElement.addEventListener("wheel", checkScrollDirection);

    return () => {
      scrollableElement.removeEventListener("scroll", checkScrollDirection);
    };
  }, [checkScrollDirection]);

  const { isMobile = false } = useContext(Context);

  if (isMobile) {
    return (
      <div id="#3" className={styles.container}>
        <Experience />

        <ExperienceFlow />
      </div>
    );
  }

  return (
    <div id="#3" className={styles.container}>
      <Experience />

      <ExperienceFlow />
    </div>
  );
}

export default Three;
