import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <Image
        className={styles.aboutImage}
        src="/images/about.png"
        width={1000}
        height={500}
        alt="about"
      />
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>Who We Are</h2>
          <h3>AJIBADE RECRUITING AGENCY RC 0978440</h3>
          <p>
            AJIBADE RECRUITING AGENCY is a professional recruitment and
            workforce solutions company committed to connecting qualified
            candidates with reputable employers across various industries. We
            specialize in talent acquisition, recruitment consulting, executive
            search, workforce outsourcing, and career advisory services, helping
            organizations build high-performing teams while assisting job
            seekers in achieving their career goals. Our mission is to provide
            reliable, efficient, and transparent recruitment services that meet
            the unique needs of both employers and candidates. We are dedicated
            to maintaining the highest standards of professionalism, integrity,
            and confidentiality throughout every stage of the recruitment
            process. At AJIBADE RECRUITING AGENCY, we believe that people are
            the foundation of every successful organization. We strive to create
            meaningful employment opportunities by matching skilled
            professionals with the right organizations based on experience,
            qualifications, and organizational culture. Through our commitment
            to excellence, innovation, and customer satisfaction, we have built
            lasting relationships with both employers and job seekers. We are
            also committed to promoting equal employment opportunities, ethical
            recruitment practices, and continuous improvement in our services.
            By leveraging industry expertise and a deep understanding of the job
            market, we help businesses attract top talent while empowering
            candidates to take the next step in their professional journey.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            To connect exceptional talent with outstanding employers by
            delivering professional, reliable, and innovative recruitment
            solutions. We are committed to helping organisations build
            high-performing teams while empowering job seekers to achieve
            meaningful career success through integrity, excellence, and
            personalised service.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Our Vision</h2>
          <p>
            To be the leading recruitment agency recognised for connecting
            exceptional talent with outstanding employers, delivering innovative
            workforce solutions, and building lasting partnerships founded on
            trust, professionalism, and excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About