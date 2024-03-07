import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function EndingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.hello}>SAY HI</div>

        <div className={styles.values}>
          <div>
            <a href="mailto: amaanmaino@gmail.com">amaanmaino@gmail.com</a>
          </div>

          <Link to="/my-resume">
            <h3>My Resume</h3>
          </Link>
        </div>
      </div>

      <div className={styles.footer}>
        <div>Amaan Ahmad</div>

        <div className={styles.flex}>
          <h3>
            <a href="https://www.linkedin.com/in/amaanahmad-/">LN</a>
          </h3>

          <h3>
            <a href="https://github.com/Amaan85277">GH</a>
          </h3>

          <h3>
            <a href="https://leetcode.com/amaan_a/">LC</a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default EndingPage;
