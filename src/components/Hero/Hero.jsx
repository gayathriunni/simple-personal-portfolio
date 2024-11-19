
import styles from "./Hero.module.css";
import { getImageUrl } from "../../util";


export const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
    <img
        src={getImageUrl("hero/profile2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
        <h1 className={`${styles.typewriter} ${styles.title}`}> Hi  I&apos;m Gayathri</h1>
       
        <div className={styles.des}>
        <p className={styles.description}>
            I&apos;m a full-stack developer interest in building dynamic and responsive web applications.
        </p>
        </div>
       <a href="mailto:me.gayathriunni@email.com" className={styles.contactBtn}>
          Contact
        </a>
       
    </div>
  
    </section>
  )
}

