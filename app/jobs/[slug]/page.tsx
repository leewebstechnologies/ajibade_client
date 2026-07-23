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
import { recruiterData } from "@/app/data";

export default async function JobDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const job = recruiterData.find((item) => item.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <main className={styles.pageWrapper}>
      <div className={styles.container}>

        {/* Back to Jobs */}
        <Link href="/" className={styles.backButton}>
          <ArrowLeft size={18} />
          <span>Back to Jobs</span>
        </Link>

        <article className={styles.card}>

          {/* Job Header */}
          <header className={styles.header}>

            <div className={styles.logoWrapper}>
              <Image
                src={job.image}
                alt={`${job.company} logo`}
                width={120}
                height={120}
                className={styles.logo}
              />
            </div>

            <div className={styles.headerInfo}>
              <h1 className={styles.jobTitle}>
                {job.job}
              </h1>

              <p className={styles.company}>
                {job.company}
              </p>

              <div className={styles.meta}>

                <span>
                  <MapPin size={18} />
                  {job.location}
                </span>

                <span>
                  <Briefcase size={18} />
                  {job.jobType}
                </span>

                <span>
                  <Banknote size={18} />
                  {job.salary}
                </span>

              </div>
            </div>

          </header>


          {/* Main Content */}
          <div className={styles.content}>

            {/* Job Overview */}
            <section className={styles.section}>

              <h2 className={styles.sectionTitle}>
                Job Overview
              </h2>

              <div className={styles.overviewGrid}>

                <div className={styles.overviewItem}>
                  <MapPin size={20} />
                  <div>
                    <span>Location</span>
                    <strong>{job.location}</strong>
                  </div>
                </div>

                <div className={styles.overviewItem}>
                  <Briefcase size={20} />
                  <div>
                    <span>Employment Type</span>
                    <strong>{job.jobType}</strong>
                  </div>
                </div>

                <div className={styles.overviewItem}>
                  <Banknote size={20} />
                  <div>
                    <span>Salary</span>
                    <strong>{job.salary}</strong>
                  </div>
                </div>

                <div className={styles.overviewItem}>
                  <CalendarDays size={20} />
                  <div>
                    <span>Date Posted</span>
                    <strong>{job.postedDate}</strong>
                  </div>
                </div>

                <div className={styles.overviewItem}>
                  <Clock size={20} />
                  <div>
                    <span>Application Deadline</span>
                    <strong>{job.deadline}</strong>
                  </div>
                </div>

              </div>

            </section>


            {/* Job Description */}
            <section className={styles.section}>

              <h2 className={styles.sectionTitle}>
                Job Description
              </h2>

              <p className={styles.description}>
                {job.summary}
              </p>

            </section>


            {/* Responsibilities */}
            <section className={styles.section}>

              <h2 className={styles.sectionTitle}>
                Key Responsibilities
              </h2>

              <ul className={styles.list}>

                {job.responsibilities.map(
                  (responsibility, index) => (
                    <li key={index}>
                      {responsibility}
                    </li>
                  )
                )}

              </ul>

            </section>


            {/* Requirements */}
            <section className={styles.section}>

              <h2 className={styles.sectionTitle}>
                Requirements
              </h2>

              <ul className={styles.list}>

                {job.requirements.map(
                  (requirement, index) => (
                    <li key={index}>
                      {requirement}
                    </li>
                  )
                )}

              </ul>

            </section>


            {/* Company Information */}
            <section className={styles.section}>

              <h2 className={styles.sectionTitle}>
                About the Employer
              </h2>

              <div className={styles.companyInfo}>

                <p>
                  <strong>Company:</strong>{" "}
                  {job.company}
                </p>

                <p>
                  <strong>Address:</strong>{" "}
                  {job.address}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  <span className={styles.email}>
                    {job.email}
                  </span>
                </p>

              </div>

            </section>


            {/* Application */}
            <section className={styles.applicationBox}>

              <h2 className={styles.applicationTitle}>
                How to Apply
              </h2>

              <p className={styles.applicationText}>
                Interested and qualified candidates should
                send their CV to{" "}
                <strong className={styles.email}>
                  {job.email}
                </strong>{" "}
                using the job title
                <strong>
                  {job.job}
                </strong>
                as the subject of the email.
              </p>

              <p className={styles.applicationNote}>
                Please ensure that your CV is up to date
                and includes relevant qualifications and
                experience.
              </p>

            </section>

          </div>

        </article>

      </div>
    </main>
  );
}

