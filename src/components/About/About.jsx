
import { getImageUrl } from "../../util";
import styles from "./About.module.css";

export const About = () => {
  return (
    
<section className={styles.container} id="about">
  <div className={styles.h2}>
  <h2>About Me</h2>
  </div>
  <div className={styles.p}>
  <p>My name is Gayathri Unni I am a full-stack developer interested in creating designs and building responsive web applications</p>
  </div>
     <div className={styles.h3}>
     <h3>What do I do?</h3>
     </div>
<div className={styles.content}>
  <div className={styles.card}>
    <img src={getImageUrl("about/front-end-programming.png")}></img>
    <h4>Front end Developemnt</h4>
    <p>Designing and developing visually engaging and  user-friendly web interfaces, ensuring that websites are responsive and provide an optimal user experience across all devices.</p>
 </div>
 <div className={styles.card}>
    <img src={getImageUrl("about/coding.png")}></img>
    <h4>Back end Developemnt</h4>
    <p>Developing and maintaining the server-side logic of web applications, ensuring seamless integration and efficient functionality to support the front end.</p>
 </div>
 <div className={styles.card}>
    <img src={getImageUrl("about/ux-design.png")}></img>
    <h4>UI Designing</h4>
    <p>Creating aesthetically pleasing user interfaces. Using tools like Figma, design prototypes and systems that enhance user interaction and align with contemporary design standards.</p>
 </div>
</div>
<div className={styles.contactButn}>
<a href="/gayathriunni.resume.pdf" download className={styles.contactBtn}>
          Download CV
        </a>
</div>
    </section>
  );
};