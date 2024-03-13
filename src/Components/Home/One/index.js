import React, { useCallback, useContext, useEffect } from "react";
import styles from "./styles.module.css";
import AboutInfo from "./AboutInfo";
import Profile from "./Profile";
import { Context } from "../../../Contexts";
import checkScrollDirectionIsUp from "../../../utils/checkScrollDirectionIsUp";

function One({ scrollTo = () => {} }) {
  const checkScrollDirection = useCallback(
    (event) => {
      if (checkScrollDirectionIsUp(event)) {
        // do nothing
      } else {
        scrollTo(2);
      }
    },
    [scrollTo]
  );

  useEffect(() => {
    var scrollableElement = document.getElementById("#1");

    scrollableElement?.addEventListener("wheel", checkScrollDirection);

    return () => {
      scrollableElement?.removeEventListener("scroll", checkScrollDirection);
    };
  }, [checkScrollDirection]);

  const { isMobile = false } = useContext(Context);

  if (isMobile) {
    return (
      <div className={styles.container}>
        <AboutInfo />

        <Profile />
      </div>
    );
  }

  return (
    <div id="#1" className={styles.container}>
      <AboutInfo />

      <Profile />
    </div>
  );
}

export default One;
