import React from "react";
import styles from "./styles.module.css";

const data = `In the vibrant world of JavaScript app development, I harness a potent toolkit to craft swift solutions that shine.
With mastery in React.js, and familiarity with Next.js and React Native.
Gearing up for my next adventure Node.js and Express.js – because why not keep the tech journey interesting, right?`;

function Engineering() {
  return (
    <div className={styles.container}>
      <div className={styles.svg}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="213"
          height="196"
          aria-hidden="true"
          class="square-of-dots"
          data-shape="true"
          viewBox="0 0 213 196"
        >
          <path
            fill="#ccf381"
            d="M3.627 1.414a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-2.999.001 1.5 1.5 0 0 1 2.999-.001zm18.968 0a1.5 1.5 0 1 1-2.999.001 1.5 1.5 0 0 1 2.999-.001zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-2.999.001 1.5 1.5 0 0 1 2.999-.001zm18.967 0a1.5 1.5 0 1 1-2.998.001 1.5 1.5 0 0 1 2.998-.001zm18.969 0a1.5 1.5 0 1 1-3 .001 1.5 1.5 0 0 1 3-.001zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-2.998.001 1.5 1.5 0 0 1 2.998-.001zm18.968 0a1.5 1.5 0 1 1-2.999.001 1.5 1.5 0 0 1 2.999-.001zM3.627 20.637a1.5 1.5 0 1 1-3.002 0 1.5 1.5 0 0 1 3.002 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3.001 0 1.5 1.5 0 0 1 3.001 0zm18.968 0a1.5 1.5 0 1 1-3.001 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.969 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM3.627 39.86a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-2.999.001 1.5 1.5 0 0 1 2.999-.001zm18.968 0a1.5 1.5 0 1 1-2.999.001 1.5 1.5 0 0 1 2.999-.001zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-2.999.001 1.5 1.5 0 0 1 2.999-.001zm18.967 0a1.5 1.5 0 1 1-2.998.001 1.5 1.5 0 0 1 2.998-.001zm18.969 0a1.5 1.5 0 1 1-3 .001 1.5 1.5 0 0 1 3-.001zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-2.998.001 1.5 1.5 0 0 1 2.998-.001zm18.968 0a1.5 1.5 0 1 1-2.999.001 1.5 1.5 0 0 1 2.999-.001zM3.627 59.084a1.5 1.5 0 1 1-3.002-.001 1.5 1.5 0 0 1 3.002 0zm18.967 0a1.5 1.5 0 1 1-3-.001 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001 0zm18.968 0a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.969 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3-.001 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM3.627 78.306a1.5 1.5 0 1 1-3.002 0 1.5 1.5 0 0 1 3.002 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3.001 0 1.5 1.5 0 0 1 3.001 0zm18.968 0a1.5 1.5 0 1 1-3.001 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.969 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM3.627 97.53a1.5 1.5 0 1 1-3.002-.001 1.5 1.5 0 0 1 3.002.001zm18.967 0a1.5 1.5 0 1 1-3-.001 1.5 1.5 0 0 1 3 .001zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001zm18.968 0a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3 .001zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.969 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3-.001 1.5 1.5 0 0 1 3 .001zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM3.627 116.753a1.5 1.5 0 1 1-3.002-.001 1.5 1.5 0 0 1 3.002 0zm18.967 0a1.5 1.5 0 1 1-3-.001 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001 0zm18.968 0a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.969 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3-.001 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM3.627 135.975a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-2.999.002 1.5 1.5 0 0 1 2.999-.002zm18.968 0a1.5 1.5 0 1 1-2.999.002 1.5 1.5 0 0 1 2.999-.002zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-2.999.002 1.5 1.5 0 0 1 2.999-.002zm18.967 0a1.5 1.5 0 1 1-2.998.002 1.5 1.5 0 0 1 2.998-.002zm18.969 0a1.5 1.5 0 1 1-3 .002 1.5 1.5 0 0 1 3-.002zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-2.998.002 1.5 1.5 0 0 1 2.998-.002zm18.968 0a1.5 1.5 0 1 1-2.999.002 1.5 1.5 0 0 1 2.999-.002zM3.627 155.199a1.5 1.5 0 1 1-3.002-.001 1.5 1.5 0 0 1 3.002 0zm18.967 0a1.5 1.5 0 1 1-3-.001 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001 0zm18.968 0a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.969 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3-.001 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM3.627 174.422a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-2.999.001 1.5 1.5 0 0 1 2.999-.001zm18.968 0a1.5 1.5 0 1 1-2.999.001 1.5 1.5 0 0 1 2.999-.001zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-2.999.001 1.5 1.5 0 0 1 2.999-.001zm18.967 0a1.5 1.5 0 1 1-2.998.001 1.5 1.5 0 0 1 2.998-.001zm18.969 0a1.5 1.5 0 1 1-3 .001 1.5 1.5 0 0 1 3-.001zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-2.998.001 1.5 1.5 0 0 1 2.998-.001zm18.968 0a1.5 1.5 0 1 1-2.999.001 1.5 1.5 0 0 1 2.999-.001zM3.627 193.645a1.5 1.5 0 1 1-3.002 0 1.5 1.5 0 0 1 3.002 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3.001 0 1.5 1.5 0 0 1 3.001 0zm18.968 0a1.5 1.5 0 1 1-3.001 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.969 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.967 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm18.968 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </div>

      <div>
        <div className={styles.label}>Engineering</div>

        <div className={styles.value}>{data}</div>
      </div>
    </div>
  );
}

export default Engineering;