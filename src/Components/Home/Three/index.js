import React, { useContext, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { usePrevious } from "../../../utils/usePrevious";
import Experience from "./Experience";
import ExperienceFlow from "./ExperienceFlow";
import { Context } from "../../../Contexts";

function Three({ scrollTo = () => {} }) {
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
      scrollTo(3);
    }
  }, [isInView, scrollTo, wasInView]);

  const { isMobile = false } = useContext(Context);

  if (isMobile) {
    return (
      <div className={styles.container}>
        <Experience />

        <ExperienceFlow />
      </div>
    );
  }

  return (
    <div id="#3" className={styles.container} ref={eleRef}>
      <Experience />

      <ExperienceFlow />
    </div>
  );
}

export default Three;
