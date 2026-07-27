import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Briefcase, LocateIcon, Banknote } from "lucide-react";

import Banner from "./components/banner/Banner";
import styles from "./page.module.css";

import {
  API_BASE_URL_SUPERADMIN,
  API_BASE_URL_ADMIN1,
  API_BASE_URL_ADMIN2,
  API_BASE_URL_ADMIN3,
  API_BASE_URL_ADMIN4,
  API_BASE_URL_ADMIN5,
  IMAGE_BASE_URL,
} from "@/config/config";

type JobItem = {
  id: number;
  image: string;
  recruiter: string;
  email: string;
  address: string;
  slug: string;
  job: string;
  location: string;
  job_type: string;
  salary: string;
  posted_date: string;
  deadline: string;
  summary: string;
  resposiblities: string;
  requirements: string;
};

const stripHtml = (html: string) => {
  return html?.replace(/<[^>]*>/g, "") || "";
};

// SuperAdmin Jobs
const getSuperAdminJob = async (): Promise<JobItem[]> => {
  const res = await fetch(`${API_BASE_URL_SUPERADMIN}/job`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch SuperAdmin jobs");
  }

  return res.json();
};

// Admin 1 Jobs
const getAdmin1Job = async (): Promise<JobItem[]> => {
  const res = await fetch(`${API_BASE_URL_ADMIN1}/job`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Admin1 jobs");
  }

  return res.json();
};

// Admin 2 Jobs
const getAdmin2Job = async (): Promise<JobItem[]> => {
  const res = await fetch(`${API_BASE_URL_ADMIN2}/job`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Admin2 jobs");
  }

  return res.json();
};

// Admin 3 Jobs
const getAdmin3Job = async (): Promise<JobItem[]> => {
  const res = await fetch(`${API_BASE_URL_ADMIN3}/job`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Admin3 jobs");
  }

  return res.json();
};

// Admin 4 Jobs
const getAdmin4Job = async (): Promise<JobItem[]> => {
  const res = await fetch(`${API_BASE_URL_ADMIN4}/job`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Admin4 jobs");
  }

  return res.json();
};

// Admin 5 Jobs
const getAdmin5Job = async (): Promise<JobItem[]> => {
  const res = await fetch(`${API_BASE_URL_ADMIN5}/job`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Admin5 jobs");
  }

  return res.json();
};

export default async function Home() {
  // Fetch all six sources at the same time
  const [
    superAdminJobs,
    admin1Jobs,
    admin2Jobs,
    admin3Jobs,
    admin4Jobs,
    admin5Jobs,
  ] = await Promise.all([
    getSuperAdminJob(),
    getAdmin1Job(),
    getAdmin2Job(),
    getAdmin3Job(),
    getAdmin4Job(),
    getAdmin5Job(),
  ]);

  // Combine all jobs into one array
  const jobs = [
    ...superAdminJobs.map((job) => ({
      ...job,
      source: "superadmin",
    })),

    ...admin1Jobs.map((job) => ({
      ...job,
      source: "admin1",
    })),

    ...admin2Jobs.map((job) => ({
      ...job,
      source: "admin2",
    })),

    ...admin3Jobs.map((job) => ({
      ...job,
      source: "admin3",
    })),

    ...admin4Jobs.map((job) => ({
      ...job,
      source: "admin4",
    })),

    ...admin5Jobs.map((job) => ({
      ...job,
      source: "admin5",
    })),
  ];

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
                    src={`${IMAGE_BASE_URL}/${item.image}`}
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
                      {item.job_type}
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
