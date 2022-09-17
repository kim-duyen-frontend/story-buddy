import React from 'react';
import Navbar from '../../components/navbar';
import YoutubeEmbed from '../../components/youtube-embed';
import styles from "../../styles/banner.module.scss";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <Navbar />
            <div className={styles.shapeCircle}></div>
            <div className={styles.description}>
                <div className={styles.grid}>
                    <div className={styles.text}>
                        <h2 className={styles.title}>
                            <span className={styles.newline}>Asia’s First AI-Powered</span> <span className={styles.newline}>Writing Tool</span>
                        </h2>
                        <p className={styles.smallText}>
                            <span className={styles.newline}>Use Powerful Storytelling Techniques To</span><span className={styles.newline}>Create Content At A High Level!</span>
                        </p>
                        <div className={styles.btnSignup}>sign up for free!</div>
                    </div>
                    <div className={styles.video}>
                        <YoutubeEmbed />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;