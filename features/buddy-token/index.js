import React from 'react';
import styles from "../../styles/buddytoken.module.scss";

const BuddyToken = () => {
    return (
        <div className={styles.buddyToken}>
            <div className={styles.shape}></div>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h3 className={styles.question}>Need more buddy tokens?</h3>
                    <p className={styles.token}>50 Buddy Tokens</p>
                    <div className={styles.price}>
                        <button disabled="true" className={styles.btnPrice}>USD 15.99</button>
                    </div>
                    <p className={styles.des}>1 x Buddy Token for each generated AI story</p>
                </div>
            </div>
        </div>
    );
};

export default BuddyToken;