import React from 'react';
import { useSelector } from 'react-redux';
import styles from "../../styles/navbarhome.module.scss";

const NavbarHome = () => {
    const email = useSelector((state) => state.email);

    const handleSignOut = () => {
        localStorage.removeItem("token");
        window.location.href = "/auth/login";
    }
    
    return (
        <div className={styles.navbarHome}>
            <div className={styles.container}>
                <div className={styles.logo}>storybuddy</div>
                <div className={styles.infoUser}>
                    <div className={styles.email}>{email}</div>
                    <a className={styles.linkOut} onClick={handleSignOut}>Đăng xuất</a>
                </div>
            </div>
        </div>
    );
};

export default NavbarHome;