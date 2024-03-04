import React from 'react';
import styles from './styles.module.css';
import { FaMagento } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

function Header({ activeWindow = 0 }) {
  return (
      <div className={styles.container}>
          <FaMagento className={`${styles.main_icon} ${activeWindow===3 ? styles.green : styles.blue}`} />
          
          <RiMenu3Fill className={`${styles.menu} ${activeWindow === 3 ? styles.green : styles.blue}`} />
    </div>
  )
}

export default Header