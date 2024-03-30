import React from "react";
import styles from "./styles.module.css";
import cogoport_logo from "../../../../assets/cogoport.avif";
import nic_logo from "../../../../assets/nic.png";
import dtu_logo from "../../../../assets/dtu.png";

const data = [
  {
    id: "1",
    company: "Cogoport",
    position: "Software Development Engineer",
    from: "07, 2023",
    to: "Present",
    image_url: cogoport_logo,
  },
  {
    id: "2",
    company: "Cogoport",
    position: "Software Developer Intern",
    from: "01, 2023",
    to: "07, 2023",
    image_url: cogoport_logo,
  },
  {
    id: "3",
    company: "National Informatics Center",
    position: "Web Developer Intern",
    from: "05, 2022",
    to: "06, 2022",
    image_url: nic_logo,
  },
  {
    id: "4",
    company: "Delhi Technological University (formerly DCE)",
    position: "Bachelor of Technology",
    from: "08, 2019",
    to: "05, 2023",
    image_url: dtu_logo,
  },
];

function ExperienceFlow() {
  return (
    <div className={styles.container}>
      {data.map((item) => {
        const {
          id = "",
          company = "",
          position = "",
          from = "",
          to = "",
          image_url = "",
        } = item;

        return (
          <div key={id} className={styles.experience}>
            <div className={styles.img_wrapper}>
              <img src={image_url} alt="company's logo" />
            </div>

            <div className={styles.details}>
              <div className={styles.position}>{position}</div>
              <div className={styles.time}>
                {from} - {to}
              </div>
              <div className={styles.company}>{company}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ExperienceFlow;
