import React from 'react';
import styles from "../../styles/contact.module.scss";

const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.shape}></div>
            <div className={styles.text}>
                <p>Curious To Find Out More?</p>
                <p>We Are Here To help!</p>
            </div>
            <div className={styles.container}>
                <label>Name:</label>
                <input className={styles.inputName} />
                <label>Email:</label>
                <input className={styles.inputEmail} />
                <label>Inquiry:</label>
                <textarea cols="50" rows="20" className={styles.inputText} />
                <div className={styles.btn}>
                    <button className={styles.btnSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;