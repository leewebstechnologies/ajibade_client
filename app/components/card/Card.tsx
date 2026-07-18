import { Clock, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./card.module.css";

const Card = () => {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Essential Articles</h2>

        <p className={styles.sectionSubtitle}>
          Expert insights and comprehensive guides
        </p>

        <div className={styles.articlesGrid}>
          {/* Article 1 */}
          <div className={styles.articleCard}>
            <Image
              src="/images/resources/article-1.jpg"
              alt="How to Choose the Right Study Destination"
              className={styles.articleImg}
              width={600}
              height={400}
            />

            <div className={styles.articleContent}>
              <div className={styles.articleTagWrapper}>
                <span className={`${styles.articleTag} ${styles.blue}`}>
                  Study Abroad
                </span>
              </div>

              <h3 className={styles.articleTitle}>
                How to Choose the Right Study Destination
              </h3>

              <div className={styles.articleMeta}>
                <div className={styles.articleReadTime}>
                  <Clock size={14} />5 min read
                </div>

                <Link
                  href="/resources/resources-details"
                  className={styles.readMoreLink}
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Article 2 */}
          <div className={styles.articleCard}>
            <Image
              src="/images/resources/article-2.jpg"
              alt="Complete Student Visa Application Guide"
              className={styles.articleImg}
              width={600}
              height={400}
            />

            <div className={styles.articleContent}>
              <div className={styles.articleTagWrapper}>
                <span className={`${styles.articleTag} ${styles.green}`}>
                  Visa Guide
                </span>
              </div>

              <h3 className={styles.articleTitle}>
                Complete Student Visa Application Guide
              </h3>

              <div className={styles.articleMeta}>
                <div className={styles.articleReadTime}>
                  <Clock size={14} />8 min read
                </div>

                <Link
                  href="/resources/resources-details"
                  className={styles.readMoreLink}
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Article 3 */}
          <div className={styles.articleCard}>
            <Image
              src="/images/resources/article-3.jpg"
              alt="Top Scholarships for International Students"
              className={styles.articleImg}
              width={600}
              height={400}
            />

            <div className={styles.articleContent}>
              <div className={styles.articleTagWrapper}>
                <span className={`${styles.articleTag} ${styles.orange}`}>
                  Scholarships
                </span>
              </div>

              <h3 className={styles.articleTitle}>
                Top Scholarships for International Students
              </h3>

              <div className={styles.articleMeta}>
                <div className={styles.articleReadTime}>
                  <Clock size={14} />6 min read
                </div>

                <Link
                  href="/resources/resources-details"
                  className={styles.readMoreLink}
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Card;
