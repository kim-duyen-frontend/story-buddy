import React from 'react';
import styles from "../../styles/packageuser.module.scss";
import Image from 'next/image';

const PackageUser = () => {
    const data = [
        {
            thumbnail: "/images/robot01.png",
            package: "Free",
            text_1: "Free 20 Buddy Tokens",
            priceOfMonth: 0,
            priceOfYear: 0,
            priceSale: 0
        },
        {
            thumbnail: "/images/robot02.png",
            package: "Storybuddy Lite",
            text_1: "Gain access to our curated library of ai-generated content",
            text_2: "Currently available in Bahasa Only",
            month: "Monthly",
            priceOfMonth: 3.00,
            year: "Annually",
            priceOfYear: 34.00,
            priceSale: 5.6
        },
        {
            thumbnail: "/images/robot03.png",
            package: "Student",
            text_1: "100 Buddy Tokens monthly",
            month: "Monthly",
            priceOfMonth: 15.99,
            year: "Annually",
            priceOfYear: 160.00,
            priceSale: 16.6
        },
        {
            thumbnail: "/images/robot04.png",
            package: "Basic",
            text_1: "100 Buddy Tokens monthly",
            month: "Monthly",
            priceOfMonth: 28.99,
            year: "Annually",
            priceOfYear: 279.00,
            priceSale: 19.8
        },
        {
            thumbnail: "/images/robot05.png",
            package: "Professional",
            text_1: "1000 Buddy Tokens monthly",
            month: "Monthly",
            priceOfMonth: 230.00,
            year: "Annually",
            priceOfYear: 2400.00,
            priceSale: 13
        }
    ]
    return (
        <div className={styles.packageUser}>
            <div className="container">
                <div className={styles.slideshow}>
                    <div className={styles.container}>
                        {data.map((item, index) => (
                            <div className={styles.item} key={index}>
                                <div className={styles.image}>
                                    <Image priority src={item.thumbnail} layout="fill" objectFit="contain" />
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.name}>{item.package}</span>
                                    <span className={styles.text}>{item.text_1}</span>
                                    <span className={styles.text}>{item.text_2}</span>
                                </div>
                                <div className={styles.prices}>
                                    <span className={styles.price}>{item.month}</span>
                                    <span className={styles.price}>USD {item.priceOfMonth} / Month</span>
                                    <span className={styles.price}>{item.year}</span>
                                    <span className={styles.price}>USD {item.priceOfYear} / Year</span>
                                    <span className={styles.price}>Cheaper by {item.priceSale}%!</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageUser;