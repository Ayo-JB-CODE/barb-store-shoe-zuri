import React from 'react';
import styles from './Items.module.css';

const Items = ({ image, title, new_price, old_price }) => {
    return (
        <div className={styles.item_container}>
            <div className={styles.img_container}>
                <img src={image} alt={image} />

                <h3>{title}</h3>
            </div>
            <div className={styles.prices}>
                <p>NGN {new_price}</p>
                <p>NGN {old_price}</p>
            </div>
        </div>
    )
}

export default Items;