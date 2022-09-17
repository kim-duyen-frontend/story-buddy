import React from 'react';
import styles from "../styles/youtubeembed.module.scss";

const YoutubeEmbed = () => {
    return (
        <div className={styles.youtubeEmbed}>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Ue9DHTc8bi0"
                frameBorder="0"
                allowFullScreen
                title="YouTube video player"
            />
        </div>
    );
};

export default YoutubeEmbed;