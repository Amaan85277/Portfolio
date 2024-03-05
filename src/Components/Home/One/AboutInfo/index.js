import React from 'react'
import styles from './styles.module.css';

const position = 'Software Developer';
const about = `Always eager to learn new technologies and frameworks, and to collaborate with other developers and 
stakeholders to transform ideas into reality.`

const skill1 = `Proven experience building successful products.`;
const skill2 = `Highly skilled at UI Engineering.`;

function AboutInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.post}>{position}</div>
      <div className={styles.about}>{about}</div>

      <div className={styles.flex}>
        <span>{skill1}</span>
        <span>{skill2}</span>
      </div>
    </div>
  )
}

export default AboutInfo;
