import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Banknote,
  CalendarDays,
  Clock,
} from "lucide-react";
import { notFound } from "next/navigation";

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
  responsibilities: string | string[];
  requirements: string | string[];
};

type JobSource =
  | "superadmin"
  | "admin1"
  | "admin2"
  | "admin3"
  | "admin4"
  | "admin5";

// Remove HTML tags
const stripHtml = (html: string | null | undefined) => {
  if (!html) {
    return "";
  }

  return html.replace(/<[^>]*>/g, "");
};

// Format dates
const formatDate = (date: string | null | undefined) => {
  if (!date) {
    return "Not specified";
  }

  const formattedDate = new Date(date);

  if (isNaN(formattedDate.getTime())) {
    return date;
  }

  return formattedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Convert JSON/string data to array
const convertToArray = (
  value: string | string[] | null | undefined,
): string[] => {
  if (!value) {
    return [];
  }

  // Already an array
  if (Array.isArray(value)) {
    return value;
  }

  // Try to decode JSON
  try {
    const parsed = JSON.parse(value);

    if (Array.isArray(parsed)) {
      return parsed;
    }

    return [String(parsed)];
  } catch {
    // Normal string
    return [value];
  }
};

// Get jobs based on admin source
const getJobsBySource = async (source: JobSource): Promise<JobItem[]> => {
  const apiUrls: Record<JobSource, string> = {
    superadmin: API_BASE_URL_SUPERADMIN,
    admin1: API_BASE_URL_ADMIN1,
    admin2: API_BASE_URL_ADMIN2,
    admin3: API_BASE_URL_ADMIN3,
    admin4: API_BASE_URL_ADMIN4,
    admin5: API_BASE_URL_ADMIN5,
  };

  const res = await fetch(`${apiUrls[source]}/job`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${source} jobs`);
  }

  const data = await res.json();

  return data;
};

export default async function JobDetails({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ source?: string }>;
}) {
  // Get slug from URL
  const { slug } = await params;

  // Get source from query string
  const { source } = await searchParams;

  // Valid admin sources
  const validSources: JobSource[] = [
    "superadmin",
    "admin1",
    "admin2",
    "admin3",
    "admin4",
    "admin5",
  ];

  // Check if source is valid
  if (!source || !validSources.includes(source as JobSource)) {
    notFound();
  }

  // Fetch jobs from the correct API
  const jobs = await getJobsBySource(source as JobSource);

  // Find selected job
  const job = jobs.find((item) => item.slug === slug);

  // If job does not exist
  if (!job) {
    notFound();
  }

  // Convert responsibilities to array
  const responsibilities = convertToArray(job.responsibilities);

  // Convert requirements to array
  const requirements = convertToArray(job.requirements);

  return (
    <main className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Back to Jobs */}
        <Link href="/" className={styles.backButton}>
          <ArrowLeft size={18} />
          <span>Back to Jobs</span>
        </Link>

        <article className={styles.card}>
          {/* ================================= */}
          {/* JOB HEADER */}
          {/* ================================= */}

          <header className={styles.header}>
            {/* Job Image */}
            <div className={styles.logoWrapper}>
              <Image
                src={`${IMAGE_BASE_URL}/${job.image}`}
                alt={job.recruiter}
                width={300}
                height={200}
                className={styles.logo}
              />
            </div>

            {/* Job Information */}
            <div className={styles.headerInfo}>
              <h1 className={styles.jobTitle}>{job.job}</h1>

              <p className={styles.company}>{job.recruiter}</p>

              <div className={styles.meta}>
                <span>
                  <MapPin size={18} />
                  {job.location}
                </span>

                <span>
                  <Briefcase size={18} />
                  {job.job_type}
                </span>

                <span>
                  <Banknote size={18} />
                  {job.salary || "Not specified"}
                </span>
              </div>
            </div>
          </header>

          {/* ================================= */}
          {/* MAIN CONTENT */}
          {/* ================================= */}

          <div className={styles.content}>
            {/* ================================= */}
            {/* JOB OVERVIEW */}
            {/* ================================= */}

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Job Overview</h2>

              <div className={styles.overviewGrid}>
                {/* Location */}
                <div className={styles.overviewItem}>
                  <MapPin size={20} />

                  <div>
                    <span>Location</span>

                    <strong>{job.location || "Not specified"}</strong>
                  </div>
                </div>

                {/* Employment Type */}
                <div className={styles.overviewItem}>
                  <Briefcase size={20} />

                  <div>
                    <span>Employment Type</span>

                    <strong>{job.job_type || "Not specified"}</strong>
                  </div>
                </div>

                {/* Salary */}
                <div className={styles.overviewItem}>
                  <Banknote size={20} />

                  <div>
                    <span>Salary</span>

                    <strong>{job.salary || "Not specified"}</strong>
                  </div>
                </div>

                {/* Date Posted */}
                <div className={styles.overviewItem}>
                  <CalendarDays size={20} />

                  <div>
                    <span>Date Posted</span>

                    <strong>{formatDate(job.posted_date)}</strong>
                  </div>
                </div>

                {/* Application Deadline */}
                <div className={styles.overviewItem}>
                  <Clock size={20} />

                  <div>
                    <span>Application Deadline</span>

                    <strong>{formatDate(job.deadline)}</strong>
                  </div>
                </div>
              </div>
            </section>

            {/* ================================= */}
            {/* JOB DESCRIPTION */}
            {/* ================================= */}

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Job Description</h2>

              <p className={styles.description}>{stripHtml(job.summary)}</p>
            </section>

            {/* ================================= */}
            {/* RESPONSIBILITIES */}
            {/* ================================= */}

            {responsibilities.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Key Responsibilities</h2>

                <ul className={styles.list}>
                  {responsibilities.map((responsibility, index) => (
                    <li key={index}>{stripHtml(responsibility)}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* ================================= */}
            {/* REQUIREMENTS */}
            {/* ================================= */}

            {requirements.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Requirements</h2>

                <ul className={styles.list}>
                  {requirements.map((requirement, index) => (
                    <li key={index}>{stripHtml(requirement)}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* ================================= */}
            {/* EMPLOYER INFORMATION */}
            {/* ================================= */}

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>About the Employer</h2>

              <div className={styles.companyInfo}>
                <p>
                  <strong>Recruiter:</strong> {job.recruiter}
                </p>

                <p>
                  <strong>Address:</strong> {stripHtml(job.address)}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  <span className={styles.email}>{job.email}</span>
                </p>
              </div>
            </section>

            {/* ================================= */}
            {/* HOW TO APPLY */}
            {/* ================================= */}

            <section className={styles.applicationBox}>
              <h2 className={styles.applicationTitle}>How to Apply</h2>

              <p className={styles.applicationText}>
                Interested and qualified candidates should send their CV to{" "}
                <strong className={styles.email}>{job.email}</strong> using the
                job title <strong>{job.job}</strong> as the subject of the
                email.
              </p>

              <p className={styles.applicationNote}>
                Please ensure that your CV is up to date and includes relevant
                qualifications and experience.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
