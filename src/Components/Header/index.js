import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import { FaMagento } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import Popover from "@mui/material/Popover";
import { Link } from "react-router-dom";
import { Context } from "../../Contexts";

function Header({ activeWindow = 0, scrollToWithoutLag = () => {} }) {
  const { isMobile = false } = useContext(Context);
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
          [1, 3, 5].includes(activeWindow) ? styles.green : styles.blue
        }`}
        onClick={() => scrollToWithoutLag(1)}
      />

      <CiMenuFries
        className={`${styles.menu} ${
          isMobile || [3, 5].includes(activeWindow) ? styles.green : styles.blue
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
            <Link to="/my-resume">
              <h3>My Resume</h3>
            </Link>

            <div className={styles.contact}>
              <h3>SAY HI</h3>

              <a href="mailto: amaanmaino@gmail.com">amaanmaino@gmail.com</a>
            </div>

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
      </Popover>
    </div>
  );
}

export default Header;
