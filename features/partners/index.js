import Image from 'next/image';
import React from 'react';
import styles from "../../styles/partners.module.scss";

const Partners = () => {
    const data = [
        {
            thumbnail: "/images/brand01.png"
        },
        {
            thumbnail: "/images/brand02.png"
        },
        {
            thumbnail: "/images/brand03.png"
        },
        {
            thumbnail: "/images/brand04.png"
        },
        {
            thumbnail: "/images/brand05.png"
        },
        {
            thumbnail: "/images/brand06.png"
        },
        {
            thumbnail: "/images/brand07.png"
        },
        {
            thumbnail: "/images/brand08.png"
        },
        {
            thumbnail: "/images/brand09.png"
        },
        {
            thumbnail: "/images/brand10.png"
        },
        {
            thumbnail: "/images/brand11.jpg"
        },
        {
            thumbnail: "/images/brand12.png"
        },
        {
            thumbnail: "/images/brand13.png"
        },
        {
            thumbnail: "/images/brand14.png"
        },
        {
            thumbnail: "/images/brand15.png"
        },
    ]
    return (
        <div className={styles.partners}>
            <div className="container">
                <h3 className={styles.title}>Our Clients and Partners</h3>
                <div className={styles.container}>
                    {data.map((item, index) => (
                        <div className={styles.image} key={index}>
                            <Image src={item.thumbnail} layout="fill" objectFit="contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;