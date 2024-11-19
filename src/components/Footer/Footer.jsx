import { getImageUrl } from "../../util";
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <img className={styles.img} src={getImageUrl("nav/logo.png")}></img>
      <p className={styles.p}>Designed by Gayathri @2024</p>
      </div>
      <div className={styles.right}>
      <img src={getImageUrl("footer/linkedin.png")} className={styles.footerimg}></img>
      <img src={getImageUrl("footer/instagram.png")} className={styles.footerimg}></img>
      <img src={getImageUrl("footer/github.png")} className={styles.footerimg}></img>
      </div>
    </section>
  )
}

 