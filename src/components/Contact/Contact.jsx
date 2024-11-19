import { getImageUrl } from "../../util";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
        <div className={styles.contact}>
        <h2>Get In Touch</h2>
        <p>If you want to work with me  shoot an email or
        connect with me on phone.</p>
        </div>
        <div className={styles.img} >
            <img src={getImageUrl("contact/phone-call.png")} className={styles.imgs}></img>
            <img src={getImageUrl("contact/email.png")} className={styles.imgs}></img>
        </div>
    </section>
  )
}
