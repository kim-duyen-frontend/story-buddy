import React from 'react';
import ComboboxLanguage from '../../components/combobox-language';
import styles from "../../styles/headerlogin.module.scss";

const HeaderLogin = () => {
    return (
        <div className={styles.headerLogin}>
            <div className={styles.logo}>storybuddy</div>
            <div className={styles.combobox}>
                <ComboboxLanguage />
            </div>
        </div>
    );
};

export default HeaderLogin;