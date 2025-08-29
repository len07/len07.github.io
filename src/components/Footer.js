import React from "react";

import styles from "../styles/components/Footer.module.css";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/alena-luo-06b18a20b/"
            className={styles.socialLink}
            title="LinkedIn"
          >
            <FaLinkedin color="white" size="25px" style={{ margin: "1rem" }} />
          </a>
          <a
            href="https://github.com/len07"
            className={styles.socialLink}
            title="GitHub"
          >
            <FaGithub color="white" size="25px" style={{ margin: "1rem" }} />
          </a>
        </div>
        <p className={styles.footerText} style={{ color: "white" }}>
          &copy; 2025 Alena Luo. Built with modern web technologies.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
