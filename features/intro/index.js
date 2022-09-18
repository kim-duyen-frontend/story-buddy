import React from 'react';
import styles from "../../styles/intro.module.scss";

const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className="container">
                <div className={styles.bg}>
                    <div className={styles.text}>
                        <h3 className={styles.title}>Explore a membership plan best suited for you</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;