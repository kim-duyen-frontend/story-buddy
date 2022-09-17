import Image from 'next/image';
import React from 'react';
import styles from "../../styles/guideuse.module.scss";

const GuideUse = () => {
    const data = [
        {
            title: "Start An Account",
            thumbnail: "/images/create-account.png",
            text: "Start your journey by creating a new account with us. This will take 3 minutes to complete."
        },
        {
            title: "Pick A Profile",
            thumbnail: "/images/profile.png",
            text: "Start your journey by creating a new account with us. This will take 3 minutes to complete."
        },
        {
            title: "Start A Story",
            thumbnail: "/images/story.png",
            text: "Once your profile is selected, you can choose between various tones and scenarios to craft your unique brand voice and tone.",
            note: "Start creating and sharing your story!"
        }
    ]
    return (
        <div className={styles.guideUse}>
            <div className="container">
                <div className={styles.title}>
                    <h3>Differentiate Your Branding Using Storytelling</h3>
                    <p>Breathe Personality Into Your Brand And Emotionally Connect With Your Audience</p>
                </div>
                <div className={styles.container}>
                    {data.map((item, index) => (
                        <div className={styles.col} key={index}>
                            <h3 className={styles.title}>{index + 1}. {item.title}</h3>
                            <div className={styles.image}>
                                <Image src={item.thumbnail} layout="fill" objectFit="contain" />
                            </div>
                            <p className={styles.des}>{item.text}</p>
                            <p className={styles.note}>{item.note}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GuideUse;