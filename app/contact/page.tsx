"use client";

import { API_BASE_URL_SUPERADMIN } from "@/config/config";
import styles from "./contact.module.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(`${API_BASE_URL_SUPERADMIN}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error
            ? JSON.stringify(errorData.errors)
            : "Something went wrong",
        );
      }

      setSuccessMessage("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setErrorMessage("Failed to send message!");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <h1>Get in Touch</h1>
          <p>
            We&apos;d love to hear from you. Whether you&apos;re an employer
            looking for top talent or a job seeker exploring new opportunities,
            our team is here to help.
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactForm}>
            <h2>Send Us a Message</h2>

            <form onSubmit={handleSubmit}>
              {successMessage && (
                <p className={styles.successMessage}>{successMessage}</p>
              )}
              {errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Your full name"
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Your email"
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  placeholder="Subject of your message"
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  rows={5}
                  placeholder="Type your message here..."
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending ..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className={styles.contactInfo}>
            <h2>Contact Details</h2>

            <p>
              <strong>Address:</strong> 28, Abiodun Shobanjo Street, Agidingbi,
              Ikeja, Lagos.
            </p>

            <p>
              <strong>Phone:</strong> +234 802 875 2742
            </p>

            <p>
              <strong>Email:</strong> info@ajibaderecruitingagency.com
            </p>

            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63411.34650611288!2d3.2885464919797114!3d6.62092010694631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s28%20abiodun%20shobajo%20street!5e0!3m2!1sen!2sng!4v1735844278596!5m2!1sen!2sng"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Ajibade Recruiting Agency Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
