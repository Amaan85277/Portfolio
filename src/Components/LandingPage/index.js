import React, { useEffect, useState } from "react";
import Home from "../Home";
import styles from "./styles.module.css";

function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2400);
  });

  return (
    <div>
      {loading ? (
        <div className={styles.container}>
          <div className={styles.box} />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default LandingPage;
