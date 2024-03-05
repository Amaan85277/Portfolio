import React from "react";
import styles from "./styles.module.css";

const data = `A Software Engineer  passionate about creating captivating and user-friendly web interfaces 
that enhance the user experience and satisfaction. 
Always eager to learn new technologies and frameworks, and to collaborate with others to bring ideas to life.
Constantly seeking opportunities to grow my skills and network,
I am eager to contribute to challenging and impactful projects that make a meaningful difference.`

function Bio() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>About</div>

        <div className={styles.value}>{data}</div>
      </div>

      <div className={styles.svg}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="325"
          height="193"
          aria-hidden="true"
          data-shape="true"
          viewBox="0 0 325 193"
        >
          <path
            fill="none"
            stroke="#4831d4"
            stroke-miterlimit="50"
            stroke-width="2"
            d="M17.053 9.57a7.891 7.891 0 1 1-15.782 0 7.891 7.891 0 0 1 15.782 0zm28.069 0a7.891 7.891 0 1 1-15.782 0 7.891 7.891 0 0 1 15.782 0zm28.068 0a7.891 7.891 0 1 1-15.781 0 7.891 7.891 0 0 1 15.782 0zm28.07 0a7.891 7.891 0 1 1-15.782 0 7.891 7.891 0 0 1 15.782 0zm28.069 0a7.891 7.891 0 1 1-15.783 0 7.891 7.891 0 0 1 15.783 0zm108.754 94.393-.561 22.259 22.259-.561-.561 22.258 22.259-.56-.561 22.258 22.259-.56-.559 22.26 22.26-.56"
          />
        </svg>
      </div>
    </div>
  );
}

export default Bio;
