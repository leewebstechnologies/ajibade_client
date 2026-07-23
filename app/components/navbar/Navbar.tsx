"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Navbar = () => {
  const currentPath = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/images/logo.png"
          alt="logo"
          width={140}
          height={35}
        />
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link
            className={clsx(
              styles.item,
              currentPath === "/" && styles.activeLink,
            )}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={clsx(
              styles.item,
              currentPath === "/about" && styles.activeLink,
            )}
            href="/about"
          >
            About Us
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={clsx(
              styles.item,
              currentPath === "/contact" && styles.activeLink,
            )}
            href="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <ul className={styles.socialMediaIcons}>
        <li className={styles.socialMediaIcon}>
          <Link
            className={styles.icon}
            href="https://www.tiktok.com/@lacrete_concept?_t=ZM-8tR5goUupDp&_r=1"
          >
            <i className="icon fa-brands fa-linkedin-in"></i>
          </Link>
        </li>
        <li className={styles.socialMediaIcon}>
          <Link className={styles.icon} href="https://wa.me/+2348028752742">
            <i className="icon fa-brands fa-square-whatsapp"></i>
          </Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className={styles.menu}
        style={{ right: open ? "0px" : "-50vw" }}
      >
        <li className={styles.menuItem}>
          <Link className={styles.item} href="/">
            Home
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.item} href="/about">
            About Us
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.item} href="/contact">
            Contact Us
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.icon} href="https://www.linkedin.com/in/aliuajibade">
             <i className="icon fa-brands fa-linkedin-in"></i>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.icon} href="https://wa.me/+2348084838268">
            <i className="icon fa-brands fa-square-whatsapp"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;

{
  /* <ul className={styles.socialMediaIcons}>
  <li className={styles.socialMediaIcon}>
    <Link
      className={styles.icon}
      href="https://web.facebook.com/Lacreteconcept"
    >
      <i className="icon fa-brands fa-square-facebook"></i>
    </Link>
  </li>
  <li className={styles.socialMediaIcon}>
    <Link
      className={styles.icon}
      href="https://www.tiktok.com/@lacrete_concept?_t=ZM-8tR5goUupDp&_r=1"
    >
      <i className="icon fa-brands fa-tiktok"></i>
    </Link>
  </li>
  <li className={styles.socialMediaIcon}>
    <Link className={styles.icon} href="https://www.instagram.com/lacrete2025">
      <i className="icon fa-brands fa-square-instagram"></i>
    </Link>
  </li>
  <li className={styles.socialMediaIcon}>
    <Link className={styles.icon} href="https://wa.me/+2348028752742">
      <i className="icon fa-brands fa-square-whatsapp"></i>
    </Link>
  </li>
</ul>; */
}
