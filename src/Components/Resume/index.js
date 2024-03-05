import React from "react";
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import resume from "../../assets/resume.pdf";
import { FaCat } from "react-icons/fa";

function Resume() {
  return (
    <div className={styles.container}>
      <Link to="/"><FaCat className={styles.back} /></Link>

      <div className={styles.pdf_container}>
        <iframe title="my-resume" src={resume} className={styles.pdf} />
      </div>
    </div>
  );
}

export default Resume;
