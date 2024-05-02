import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { IoBackspace } from "react-icons/io5";
import resume from "../../assets/resume.pdf";

function Resume() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <IoBackspace className={styles.back} />
      </Link>

      <div className={styles.pdf_container}>
        <iframe title="my-resume" src={resume} className={styles.pdf} />
      </div>
    </div>
  );
}

export default Resume;
