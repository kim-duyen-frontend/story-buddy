import React from 'react';
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <div className={styles.listMenu}>
                        <div className={styles.logo}>STORYBUDDY</div>
                        <ul className={styles.list}>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Plan</a>
                            </li>
                        </ul>
                    </div>
                    <ul className={styles.account}>
                        <li>
                            <a>Login</a>
                        </li>
                        <li>
                            <a className={styles.signup}>Sign up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;