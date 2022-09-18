import React from 'react';
import Link from "next/link";
import styles from "../../styles/footer.module.scss";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.col}>
                        <div className={styles.logo}>storybuddy</div>
                        <div className={styles.license}>
                            <Link href="#!">
                                <a>Rights reserved @StoryBuddy 2022</a>
                            </Link>
                            <Link href="#!">
                                <a>Terms of service I</a>
                            </Link>
                            <Link href="#!">
                                <a>Privacy policy</a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <span className={styles.title}>Visit us</span>
                        <p className={styles.address}>Oxley tower, 138 Robinson Rd, Singapore 068906</p>
                    </div>
                    <div className={styles.col}>
                        <span className={styles.title}>contact us</span>
                        <p className={styles.email}>enquiry@storybuddy.co</p>
                        <p className={styles.webLink}>https://storybuddy.co</p>
                        <div className={styles.socials}>
                            <Link href="#!">
                                <a>
                                    <FaFacebookSquare />
                                </a>
                            </Link>
                            <Link href="#!">
                                <a>
                                    <FaInstagram />
                                </a>
                            </Link>
                            <Link href="#!">
                                <a>
                                    <FaLinkedin />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;