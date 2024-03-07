import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { usePrevious } from "../../../utils/usePrevious";
import Connect from "./Connect";

function Four({ scrollTo = () => {} }) {
  const eleRef = useRef();
  const [isInView, setIsInView] = React.useState(false);
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
      scrollTo(4);
    }
  }, [isInView, scrollTo, wasInView]);

  return (
    <div id="#4" className={styles.container} ref={eleRef}>
      <Connect />
    </div>
  );
}

export default Four;
