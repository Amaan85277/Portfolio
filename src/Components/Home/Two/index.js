import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { usePrevious } from "../../../utils/usePrevious";

function Two({ scrollTo = () => {} }) {
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
            const backgroundStyle = window.getComputedStyle(eleRef.current, null).getPropertyValue("background-color");
            scrollTo(2, backgroundStyle);
        }
    }, [isInView, scrollTo, wasInView]);

  return (
      <div id="#2" className={styles.container} ref={eleRef} />
  );
}

export default Two;
