import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaMagento } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { RiMenu3Fill } from "react-icons/ri";
import Popover from "@mui/material/Popover";

function Header({ activeWindow = 0 }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={styles.container}>
      <FaMagento
        className={`${styles.main_icon} ${
          activeWindow === 3 ? styles.green : styles.blue
        }`}
      />

      <RiMenu3Fill
        className={`${styles.menu} ${
          activeWindow === 3 ? styles.green : styles.blue
        }`}
        onClick={handleClick}
      />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleClose}
        className={styles.Popover}
      >
        <div className={styles.popover_container}>
          <div className={styles.close_icon_container}>
            <RxCross1 onClick={handleClose} />
          </div>

          <div className={styles.details}>
            <h3>My Resume</h3>

            <div className={styles.contact}>
              <h3>SAY HI</h3>

              <a href="mailto: amaanmaino@gmail.com">amaanmaino@gmail.com</a>
            </div>

            <div className={styles.flex}>
              <h3><a href="https://www.linkedin.com/in/amaanahmad-/">LN</a></h3>

              <h3><a href="https://github.com/Amaan85277">GH</a></h3>

              <h3><a href="https://www.linkedin.com/in/amaanahmad-/">TW</a></h3> {/* add some other link here*/}
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
}

export default Header;
