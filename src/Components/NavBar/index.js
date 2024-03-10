import React from "react";
import styles from "./styles.module.css";

function NavBar({ activeWindow = 0, scrollToWithoutLag = () => { } }) {
  if (activeWindow === 5) {
    return null;
  }

  return (
    <div className={styles.parent_nav}>
      <div className={styles.diamond_container}>
        {[...Array(5).keys()].map((item, i) => {
          return (
            <div
              className={
                activeWindow === i + 1
                  ? `${styles.active} ${activeWindow ===3 ? styles.green_border : styles.blue_border} ${styles.diamond}`
                  : `${activeWindow ===3 ? styles.green_background : styles.blue_background} ${styles.diamond}`
              }
              role="presentation"
              onClick={() => {
                scrollToWithoutLag(i + 1);
              }}
              key={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
