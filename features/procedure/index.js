import Image from 'next/image';
import React from 'react';
import styles from "../../styles/procedure.module.scss";

const Procedure = () => {
    const data = [
        {
            title: "Learn How To Craft Creative Content Yourself!",
            text: "Over time, Kob-i will help you internalise the steps and learn the best practices for content creation in the market."
        },
        {
            title: "Write Versatile Copy",
            text: "Create captivating content in seconds using our instant content generator tool!"
        },
        {
            title: "Curated For Your Target Audience",
            text: "Improve your content pipeline by consistently creating more content at a high level, in record time."
        }
    ]
    return (
        <div className={styles.guideuse}>
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.leftCol}>
                        <div className={styles.image}>
                            <Image src="/images/pic02.png" layout="fill" objectFit="contain" />
                        </div>
                    </div>
                    <div className={styles.rightCol}>
                        {data.map((item, index) => (
                            <div className={styles.text} key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Procedure;