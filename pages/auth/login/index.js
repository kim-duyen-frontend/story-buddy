import Image from 'next/image';
import React from 'react';
import HeaderLogin from '../../../features/header';
import styles from "../../../styles/login.module.scss";

const LoginPage = () => {
    return (
        <div className={styles.loginPage}>
            <HeaderLogin />
            <div className={styles.logo}>
                <Image priority src="/images/logo-login.png" layout="fill" objectFit="contain" />
            </div>
            <h2 className={styles.title}>Welcome Back</h2>
            <div className={styles.container}>
                <div className={styles.form}>
                    <input
                        className={styles.inputEmail}
                        placeholder="Email..."
                        type="email"
                    />
                    <input
                        className={styles.inputPassword}
                        placeholder="Password"
                        type="password"
                    />
                    <button
                        className={styles.btnlogin}
                        disabled="true"
                    >
                        Log in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;