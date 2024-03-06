import React from "react";
import styles from "./styles.module.css";

const data = [
  {
    id: "1",
    val: `My goal is to make them user-friendly, look great, and easy for everyone to use, 
    minimizing the efforts from the user.`,
  },
  {
    id: "2",
    val: `Currently, I work at Cogoport, Gurgaon as a Software Development Engineer, 
    inclined towards frontend development, crafting thoughtful and inclusive experiences that adhere to web standards
    for all the admins and stakeholders across all entities.`,
  },
  {
    id: "3",
    val: `Before getting into full time role, I was working as an intern at Cogoport, Mumbai, 
    where I worked on a suite of tools and services tailored towards KAMs and their managers to boost sales 
    and increase revenue.`,
  },
  {
    id: "4",
    val: `Prior to Cogoport, I was a Web Developer as an intern at National Informatics Center, 
    building JavaScript applications and interfaces, working on 'One Nation One Ration Card' project, 
    revolutionizing ration schemes and benefiting millions of citizens across the country.`,
  },
];

function Experience() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>Over the period,</div>

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
