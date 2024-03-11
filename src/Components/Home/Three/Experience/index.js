import React from "react";
import styles from "./styles.module.css";

const data = [
  {
    id: "1",
    val: `My goal is to make user-friendly interfaces, look great, and easy to use for everyone, 
    making the user fall in love with the application.`,
  },
  {
    id: "2",
    val: `I'm currently a Software Development Engineer at Cogoport in Gurugram/Gurgaon, 
    specializing in frontend development. My focus is on creating intuitive and inclusive experiences
    that meet web standards for all admins and stakeholders, across all entities/countries.`,
  },
  {
    id: "3",
    val: `Before stepping into my full-time role, I interned at Cogoport in Mumbai. During my internship, 
    I concentrated on developing a suite of tools and services designed specifically for
    Key Account Managers (KAMs) and their managers. These tools aimed to enhance sales strategies and drive
    revenue growth.`,
  },
  {
    id: "4",
    val: `Before joining Cogoport, I interned as a Web Developer at the National Informatics Center. 
    During this time, I focused on building JavaScript applications and interfaces for the
    'One Nation One Ration Card' project. This initiative aimed to modernize ration schemes,
    ultimately benefiting millions of citizens nationwide.`,
  },
];

function Experience() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>So Far,</div>

        <div className={styles.value}>
          {data.map((item) => (
            <p key={item.id}>{item.val}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
