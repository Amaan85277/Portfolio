import React from "react";
import styles from "./styles.module.css";
import ProfilePic from "../../../../assets/ProfilePic.png";

function Profile() {
  return (
    <div className={styles.container}>
      <span className={styles.img_wrapper}>
        <img src={ProfilePic} loading="lazy" alt="profile" />
      </span>
    </div>
  );
}

export default Profile;
