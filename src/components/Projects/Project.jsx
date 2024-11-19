import { getImageUrl } from "../../util";
import styles from "./Project.module.css";
import projects from "../../Data/projects.json";

export const Project = () => {
  return (
    <section  className={styles.container} id="projects">
    <h2>Selected Works</h2>
       <div className={styles.projectContainer}>
          {projects.map((projects,id)=>{
              return(
                <div key={id} className={styles.project}>
                  <div className={projects.imageContainer}>
                     <img src={getImageUrl(projects.imageSrc)} alt={projects.title} className={styles.img}></img>
                  </div>
                  <div className={styles.projectDes}>
                    <a href={projects.githubLink}>
                    {projects.title}
                    </a>
                  </div>
                 </div>
                   )
                   })}
       </div>
    </section>
       )
}
