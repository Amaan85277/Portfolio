import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { usePrevious } from '../../utils/usePrevious';

function One({ scrollTo=()=>{} }) {
    const eleRef = React.useRef();
    const [isInView, setIsInView] = React.useState(false);
    const wasInView = usePrevious(isInView);

    const checkInView = () => {
        const ele = eleRef.current;
        if (!ele) {
            return;
        }
        const rect = ele.getBoundingClientRect();
        setIsInView(rect.top < window.innerHeight && rect.bottom >= 0);
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
  
  return (
    <div id="#1" className={styles.container} ref={eleRef} />
  )
}

export default One