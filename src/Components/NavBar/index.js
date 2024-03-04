import React from "react";
import styles from "./styles.module.css";

function NavBar({activeWindow=0, scrollTo=()=>{}}) {
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
                scrollTo(i + 1);
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
