import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { usePrevious } from "../../../utils/usePrevious";
import AboutInfo from "./AboutInfo";
import Profile from "./Profile";
import { Context } from "../../../Contexts";

function One({ scrollTo = () => {} }) {
  const eleRef = useRef();
  const [isInView, setIsInView] = useState(false);
  const wasInView = usePrevious(isInView);

  const checkInView = () => {
    const ele = eleRef.current;
    if (!ele) {
      return;
    }
    const rect = ele.getBoundingClientRect();
    setIsInView(rect.top + 100 < window.innerHeight && rect.bottom >= 100);
  };

  useEffect(() => {
    checkInView();
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", checkInView);
    window.addEventListener("resize", checkInView);
    return () => {
      document.removeEventListener("scroll", checkInView);
      window.removeEventListener("resize", checkInView);
    };
  }, []);

  useEffect(() => {
    const ele = eleRef.current;
    if (!ele) {
      return;
    }
    if (!wasInView && isInView) {
      // Element has come into view
      scrollTo(1);
    }
  }, [isInView, scrollTo, wasInView]);

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
    <div id="#1" className={styles.container} ref={eleRef}>
      <AboutInfo />

      <Profile />
    </div>
  );
}

export default One;
