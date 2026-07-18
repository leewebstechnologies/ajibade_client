import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <Link href="/" aria-label="Lacrete Concept Home">
          <Image
            src="/images/job/logo.png"
            alt="Lacrete Concept Logo"
            width={140}
            height={35}
            className={styles.logo}
            priority
          />
        </Link>
      </div>

      <div className={styles.footerCenterOne}>
        <h4 className={styles.heading}>Quick Links</h4>

        <ul className={styles.list}>
          <li>
            <Link href="/" className={styles.footerLink}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className={styles.footerLink}>
              About Us
            </Link>
          </li>

          <li>
            <Link href="/contact" className={styles.footerLink}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.footerCenterTwo}>
        <h4 className={styles.heading}>Contact Us</h4>

        <p className={styles.address}>
          28, Abiodun Shobanjo Street, Agidingbi, Ikeja, Lagos.
        </p>

        <p className={styles.address}>Email: aliuajibade317@gmail.com</p>
        <p className={styles.address}>Phone: +234 808 483 8268</p>
      </div>

      <div className={styles.footerRight}>
        <h4 className={styles.heading}>Follow Us</h4>

        <ul className={styles.socialList}>
          <li>
            <Link
              href="https://wa.me/2348084838268"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={styles.footerLink}
            >
              <i className="fa-brands fa-square-whatsapp" />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/in/aliuajibade"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.footerLink}
            >
              <i className="fa-brands fa-linkedin" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer