import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { AiOutlineCopyright } from "react-icons/ai";
import { Popover } from "@mui/material";
import { PiBugDroidDuotone } from "react-icons/pi";

const bug = [
  {
    id: "1",
    val: `Always enhancing. Spot a bug or have suggestions? Reach out!`,
  },
  {
    id: "2",
    val: `Meanwhile, I'll keep refining this portfolio with fresh updates.`,
  },
];

function EndingPage() {
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
      <div className={styles.details}>
        <div className={styles.hello}>SAY HI</div>

        <div className={styles.values}>
          <div>
            <a href="mailto: amaanmaino@gmail.com">amaanmaino@gmail.com</a>
          </div>

          <div>
            <Link to="/my-resume">
              My Resume
            </Link>
          </div>

          <div className={styles.updates} onClick={handleClick}>Updates/Bug</div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.copyright}>
          <AiOutlineCopyright />

          <span>Amaan Ahmad 2024</span>
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

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handleClose}
        className={styles.Popover}
      >
        <div className={styles.popover_container}>
          <PiBugDroidDuotone />

          <div>
            {bug.map((item) => (
              <div key={item.id}>{item.val}</div>
            ))}
          </div>
        </div>
      </Popover>
    </div>
  );
}

export default EndingPage;
