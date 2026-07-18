import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Briefcase, LocateIcon, Banknote } from "lucide-react";
import Banner from "./components/banner/Banner";
import styles from "./page.module.css";
import { recruiterData } from "./data";

export default function Home() {
  return (
    <>
      <Banner />
      <div className={styles.sectionWrapper}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Job Opportunities</h2>
          <p className={styles.sectionSubtitle}>
            Browse available positions and connect with top recruiters
          </p>
          <div className={styles.cards}>
            {recruiterData.map((item) => (
              <article key={item.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.recruiter}
                    width={190}
                    height={100}
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.name}>
                    <span>{item.recruiter}</span>
                  </div>
                  <div className={styles.email}>
                    <Mail size={16} />
                    <span>{item.email}</span>
                  </div>
                  <div className={styles.address}>
                    <LocateIcon size={16} />
                    <span>{item.address}</span>
                  </div>

                  <h3 className={styles.jobTitle}>{item.job}</h3>

                  <p className={styles.company}>{item.company}</p>

                  <p className={styles.summary}>{item.summary}</p>

                  <div className={styles.meta}>
                    <span>
                      <MapPin size={15} />
                      {item.location}
                    </span>

                    <span>
                      <Briefcase size={15} />
                      {item.jobType}
                    </span>

                    <span>
                      <Banknote size={15} />
                      {item.salary}
                    </span>
                  </div>
                </div>

                <div className={styles.footer}>
                  <Link href={`/jobs/${item.slug}`} className={styles.button}>
                    See Job Details
                  </Link>
                </div>
              </article>
            ))}

            {/* Card 2 */}
            {/* <article className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/job/dangote.jpg"
                  alt="Dangote Group"
                  width={180}
                  height={90}
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <div className={styles.email}>
                  <span>Dangote Limited</span>
                </div>
                <div className={styles.email}>
                  <Mail size={16} />
                  <span>dangote@gmail.com</span>
                </div>
                <div className={styles.address}>
                  <LocateIcon size={16} />
                  <span>126, Lagos-Abeokuta Express Road, Lagos</span>
                </div>

                <h3 className={styles.jobTitle}>Frontend Developer</h3>

                <p className={styles.company}>Dangote Group</p>

                <p className={styles.summary}>
                  Looking for a React/Next.js developer with experience building
                  responsive web applications and integrating REST APIs.
                </p>

                <div className={styles.meta}>
                  <span>
                    <MapPin size={15} />
                    Lagos, Nigeria
                  </span>

                  <span>
                    <Briefcase size={15} />
                    Hybrid
                  </span>
                </div>
              </div>

              <div className={styles.footer}>
                <Link href="/jobs/frontend-developer" className={styles.button}>
                  See Job Details
                </Link>
              </div>
            </article> */}
          </div>
        </section>
      </div>
    </>
  );
}
