import styles from "./banner.module.css";

import Image from "next/image";
const Banner = () => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/images/banner.png"
        alt="banner"
        fill
        priority
        className={styles.image}
      />
    </div>
  );
};
export default Banner;
