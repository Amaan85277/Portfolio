import React, { useCallback, useContext, useEffect } from "react";
import styles from "./styles.module.css";
import Bio from "./Bio";
import Engineering from "./Engineering";
import { Context } from "../../../Contexts";
import checkScrollDirectionIsUp from "../../../utils/checkScrollDirectionIsUp";

function Two({ scrollTo = () => {} }) {
  const checkScrollDirection = useCallback(
    (event) => {
      if (checkScrollDirectionIsUp(event)) {
        scrollTo(1);
      } else {
        scrollTo(3);
      }
    },
    [scrollTo]
  );

  useEffect(() => {
    var scrollableElement = document.getElementById("#2");

    scrollableElement?.addEventListener("wheel", checkScrollDirection);

    return () => {
      scrollableElement?.removeEventListener("scroll", checkScrollDirection);
    };
  }, [checkScrollDirection]);

  const { isMobile = false } = useContext(Context);

  if (isMobile) {
    return (
      <div className={styles.container}>
        <Bio />

        <Engineering />
      </div>
    );
  }

  return (
    <div id="#2" className={styles.container}>
      <Bio />

      <Engineering />
    </div>
  );
}

export default Two;
