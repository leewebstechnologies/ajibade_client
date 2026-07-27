import Image from "next/image";
import styles from "./about.module.css";
import { aboutData } from "@/app/data";

// Convert HTML content to plain text
const stripHTML = (html: string = "") => {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/div>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
};


const About = () => {
  const about = aboutData;

  if (!about) {
    return (
      <div className={styles.about}>
        <div className={styles.container}>
          <div className={styles.section}>
            <h2>About Us</h2>
            <p>About information is currently unavailable.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.about}>
      <Image
        className={styles.aboutImage}
        src={
          about.image && about.image !== "about.png" ? about.image : "/images/about.png"
        }
        width={1000}
        height={500}
        alt="Ajibade Recruiting Agency"
      />

      <div className={styles.container}>
        <div className={styles.section}>
          <h2>Who We Are</h2>

          <h3>AJIBADE RECRUITING AGENCY RC 0978440</h3>

          {/* Long HTML introduction converted to plain text */}
          <p>{stripHTML(about.introduction)}</p>
        </div>

        <div className={styles.section}>
          <h2>Our Mission</h2>

          {/* HTML mission converted to plain text */}
          <p>{stripHTML(about.mission)}</p>
        </div>

        <div className={styles.section}>
          <h2>Our Vision</h2>

          {/* HTML vision converted to plain text */}
          <p>{stripHTML(about.vision)}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
