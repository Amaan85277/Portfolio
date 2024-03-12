import React from "react";
import styles from "./styles.module.css";

const position = "Software Developer";
const about = `Always eager to learn new technologies and frameworks, and to collaborate with other developers and 
stakeholders to transform ideas into reality.`;

const skill1 = `Proven experience building successful products.`;
const skill2 = `Highly skilled at UI Engineering.`;

function AboutInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.svg1}>
        <svg
          width="213"
          height="196"
          viewBox="0 0 213 196"
          data-shape="true"
          aria-hidden="true"
          class="square-of-dots"
        >
          <path
            fill="#ccf381"
            d="M3.627 1.414a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM22.594 1.414a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM41.562 1.414a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM60.53 1.414a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM79.498 1.414a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM98.466 1.414a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM117.434 1.414a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM136.401 1.414a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM155.37 1.414a1.5 1.5 0 11-3 .001 1.5 1.5 0 013-.001zM174.337 1.414a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM193.305 1.414a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM212.273 1.414a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM3.627 20.637a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM22.594 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM41.562 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM60.53 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM79.498 20.637a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM98.466 20.637a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM117.434 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM136.401 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM155.37 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM174.337 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM193.305 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM212.273 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.627 39.86a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM22.594 39.86a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM41.562 39.86a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM60.53 39.86a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM79.498 39.86a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM98.466 39.86a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM117.434 39.86a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM136.401 39.86a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM155.37 39.86a1.5 1.5 0 11-3 .001 1.5 1.5 0 013-.001zM174.337 39.86a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM193.305 39.86a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM212.273 39.86a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM3.627 59.084a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.002 0zM22.594 59.084a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM41.562 59.084a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM60.53 59.084a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM79.498 59.084a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM98.466 59.084a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM117.434 59.084a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM136.401 59.084a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM155.37 59.084a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM174.337 59.084a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM193.305 59.084a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM212.273 59.084a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.627 78.306a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM22.594 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM41.562 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM60.53 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM79.498 78.306a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM98.466 78.306a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM117.434 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM136.401 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM155.37 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM174.337 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM193.305 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM212.273 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.627 97.53a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.002.001zM22.594 97.53a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM41.562 97.53a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM60.53 97.53a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM79.498 97.53a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM98.466 97.53a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM117.434 97.53a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM136.401 97.53a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM155.37 97.53a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM174.337 97.53a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM193.305 97.53a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM212.273 97.53a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.627 116.753a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.002 0zM22.594 116.753a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM41.562 116.753a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM60.53 116.753a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM79.498 116.753a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM98.466 116.753a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM117.434 116.753a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM136.401 116.753a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM155.37 116.753a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM174.337 116.753a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM193.305 116.753a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM212.273 116.753a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.627 135.975a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM22.594 135.975a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM41.562 135.975a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM60.53 135.975a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM79.498 135.975a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM98.466 135.975a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM117.434 135.975a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM136.401 135.975a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM155.37 135.975a1.5 1.5 0 11-3 .002 1.5 1.5 0 013-.002zM174.337 135.975a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM193.305 135.975a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM212.273 135.975a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM3.627 155.199a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.002 0zM22.594 155.199a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM41.562 155.199a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM60.53 155.199a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM79.498 155.199a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM98.466 155.199a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM117.434 155.199a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM136.401 155.199a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM155.37 155.199a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM174.337 155.199a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM193.305 155.199a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM212.273 155.199a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.627 174.422a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM22.594 174.422a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM41.562 174.422a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM60.53 174.422a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM79.498 174.422a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM98.466 174.422a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM117.434 174.422a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM136.401 174.422a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM155.37 174.422a1.5 1.5 0 11-3 .001 1.5 1.5 0 013-.001zM174.337 174.422a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM193.305 174.422a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM212.273 174.422a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM3.627 193.645a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM22.594 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM41.562 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM60.53 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM79.498 193.645a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM98.466 193.645a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM117.434 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM136.401 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM155.37 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM174.337 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM193.305 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM212.273 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          ></path>
        </svg>
      </div>

      <div className={styles.svg2}>
        <svg
          width="213"
          height="196"
          viewBox="0 0 213 196"
          data-shape="true"
          aria-hidden="true"
          class="square-of-dots"
        >
          <path
            fill="#ccf381"
            d="M3.627 1.414a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM22.594 1.414a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM41.562 1.414a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM60.53 1.414a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM79.498 1.414a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM98.466 1.414a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM117.434 1.414a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM136.401 1.414a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM155.37 1.414a1.5 1.5 0 11-3 .001 1.5 1.5 0 013-.001zM174.337 1.414a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM193.305 1.414a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM212.273 1.414a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM3.627 20.637a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM22.594 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM41.562 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM60.53 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM79.498 20.637a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM98.466 20.637a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM117.434 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM136.401 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM155.37 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM174.337 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM193.305 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM212.273 20.637a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.627 39.86a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM22.594 39.86a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM41.562 39.86a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM60.53 39.86a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM79.498 39.86a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM98.466 39.86a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM117.434 39.86a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM136.401 39.86a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM155.37 39.86a1.5 1.5 0 11-3 .001 1.5 1.5 0 013-.001zM174.337 39.86a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM193.305 39.86a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM212.273 39.86a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM3.627 59.084a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.002 0zM22.594 59.084a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM41.562 59.084a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM60.53 59.084a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM79.498 59.084a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM98.466 59.084a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM117.434 59.084a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM136.401 59.084a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM155.37 59.084a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM174.337 59.084a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM193.305 59.084a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM212.273 59.084a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.627 78.306a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM22.594 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM41.562 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM60.53 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM79.498 78.306a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM98.466 78.306a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM117.434 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM136.401 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM155.37 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM174.337 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM193.305 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM212.273 78.306a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.627 97.53a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.002.001zM22.594 97.53a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM41.562 97.53a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM60.53 97.53a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM79.498 97.53a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM98.466 97.53a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM117.434 97.53a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM136.401 97.53a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM155.37 97.53a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM174.337 97.53a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM193.305 97.53a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM212.273 97.53a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.627 116.753a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.002 0zM22.594 116.753a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM41.562 116.753a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM60.53 116.753a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM79.498 116.753a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM98.466 116.753a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM117.434 116.753a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM136.401 116.753a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM155.37 116.753a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM174.337 116.753a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM193.305 116.753a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM212.273 116.753a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.627 135.975a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM22.594 135.975a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM41.562 135.975a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM60.53 135.975a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM79.498 135.975a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM98.466 135.975a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM117.434 135.975a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM136.401 135.975a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM155.37 135.975a1.5 1.5 0 11-3 .002 1.5 1.5 0 013-.002zM174.337 135.975a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM193.305 135.975a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM212.273 135.975a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM3.627 155.199a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.002 0zM22.594 155.199a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM41.562 155.199a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM60.53 155.199a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM79.498 155.199a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM98.466 155.199a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM117.434 155.199a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM136.401 155.199a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM155.37 155.199a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM174.337 155.199a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM193.305 155.199a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM212.273 155.199a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.627 174.422a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM22.594 174.422a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM41.562 174.422a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM60.53 174.422a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM79.498 174.422a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM98.466 174.422a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM117.434 174.422a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM136.401 174.422a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM155.37 174.422a1.5 1.5 0 11-3 .001 1.5 1.5 0 013-.001zM174.337 174.422a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM193.305 174.422a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM212.273 174.422a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM3.627 193.645a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM22.594 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM41.562 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM60.53 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM79.498 193.645a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM98.466 193.645a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM117.434 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM136.401 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM155.37 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM174.337 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM193.305 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM212.273 193.645a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          ></path>
        </svg>
      </div>

      <div className={styles.post}>{position}</div>
      <div className={styles.about}>{about}</div>

      <div className={styles.flex}>
        <span>{skill1}</span>
        <span>{skill2}</span>
      </div>
    </div>
  );
}

export default AboutInfo;
