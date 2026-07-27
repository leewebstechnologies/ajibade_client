import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Briefcase, LocateIcon, Banknote } from "lucide-react";

import Banner from "./components/banner/Banner";
import styles from "./page.module.css";

import {
  IMAGE_BASE_URL,
} from "@/config/config";
import { recruiterData } from "@/app/data";

type JobItem = {
  id: number;
  image: string;
  recruiter: string;
  email: string;
  address: string;
  slug: string;
  job: string;
  location: string;
  jobType: string;
  salary: string;
  postedDate: string;
  deadline: string;
  summary: string;
  resposiblities: string;
  requirements: string;
};

const stripHtml = (html: string) => {
  return html?.replace(/<[^>]*>/g, "") || "";
};

export default async function Home() {
  const jobs = recruiterData.map((job) => ({
    ...job,
    source: "superadmin",
  }));

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
            {jobs.map((item) => (
              <article
                key={`${item.recruiter}-${item.id}-${item.slug}`}
                className={styles.card}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image?.startsWith("/") ? item.image : `${IMAGE_BASE_URL}/${item.image}`}
                    alt={item.recruiter}
                    width={280}
                    height={160}
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
                    <span>{stripHtml(item.address)}</span>
                  </div>

                  <h3 className={styles.jobTitle}>{item.job}</h3>

                  <p className={styles.summary}>{stripHtml(item.summary)}</p>

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
                  <Link
                    href={`/jobs/${item.slug}?source=${item.source}`}
                    className={styles.button}
                  >
                    See Job Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
