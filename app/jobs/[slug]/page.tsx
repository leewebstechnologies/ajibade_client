import Image from "next/image";
import Link from "next/link";
import { MapPin, Briefcase, Banknote, ArrowLeft } from "lucide-react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { recruiterData } from "@/app/data";

export default async function JobDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = recruiterData.find((item) => item.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <Link href="/" className={styles.backButton}>
          <ArrowLeft size={18} />
          <span>Back to Jobs</span>
        </Link>
        
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.logoWrapper}>
              <Image
                src={job.image}
                alt={job.recruiter}
                width={120}
                height={120}
                className={styles.logo}
              />
            </div>
            <div className={styles.headerInfo}>
              <h1 className={styles.jobTitle}>{job.job}</h1>
              <p className={styles.recruiterName}>{job.recruiter}</p>
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
          </div>

          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Job Description</h2>
            <p className={styles.summary}>{job.summary}</p>
            
            <div className={styles.applicationBox}>
              <h3 className={styles.applicationTitle}>Method of Application</h3>
              <p className={styles.applicationText}>
                Interested and qualified candidates should send their CV to:
                <a 
                  href={`mailto:${job.email}?subject=Application for ${encodeURIComponent(job.job)}`}
                  className={styles.emailLink}
                >
                  {job.email}
                </a>
                using the Job Title as the subject of mail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
