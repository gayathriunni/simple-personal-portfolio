import styles from "./Experience.module.css";
import skills from "../../Data/skills.json"
import { getImageUrl } from "../../util";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h2>
            Experience in..
        </h2>
        <div className={styles.skillContainer}>
         {skills.map((skill,id)=>{
          return(
            <div key={id} className={styles.skills}>
              <div className={skills.imageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={styles.img}></img>
                <p className={styles.title}>{skill.title}</p>
              </div>
            </div>
          )
         })}
        </div>

    </section>
  )
}