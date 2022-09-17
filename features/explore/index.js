import Image from 'next/image';
import React from 'react';
import styles from "../../styles/explore.module.scss";

const Explore = () => {
    const data = [
        {
            title: "Curated For Your Target Audience",
            text: "Stressed staring at a blank page? Keep calm and let Kob-i write creative content for you!"
        },
        {
            title: "Write Versatile Copy",
            text: "From writing thought-provoking articles to creating engaging social media captions, Kob-i has you covered."
        },
        {
            title: "Curated For Your Target Audience",
            text: "Let Kob-i craft a copy that deeply resonates with your ideal customers."
        }
    ]
    return (
        <div className={styles.explore}>
            <div className="container">
                <div className={styles.title}>
                    <h3>Explore The Full Extent Of Kob-i’s Capabilities</h3>
                    <p>Leverage Our AI Powered Storytelling Tool</p>
                </div>
                <div className={styles.container}>
                    <div className={styles.colLeft}>
                        {data.map((item, index) => (
                            <div className={styles.text} key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.colRight}>
                        <div className={styles.image}>
                            <Image priority src="/images/pic01.png" layout="fill" objectFit="contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;