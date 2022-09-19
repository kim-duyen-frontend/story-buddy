import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderLogin from '../../../features/header';
import styles from "../../../styles/login.module.scss";
import { loginUser } from "../../../redux/actions";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from 'next/router';

const LoginPage = () => {
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");
    const [isDisabled, setDisabled] = useState(false);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.isLoading);
    const router = useRouter();

    const handleSubmitLogin = async () => {
        dispatch(loginUser(email, password));
        setDisabled(true);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (localStorage.getItem("token")) {
                toast.success("Login Successfull!");
                router.push("/home")
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [isDisabled])

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
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        className={styles.inputPassword}
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button
                        className={styles.btnlogin}
                        disabled={isDisabled}
                        onClick={handleSubmitLogin}
                    >
                        {isLoading ? "Loading" : "Log in"}
                    </button>
                </div>
            </div>
            <ToastContainer className="toast-position"
                position="bottom-right"
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default LoginPage;