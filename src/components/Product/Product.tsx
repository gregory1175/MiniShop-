import styles from './Product.module.scss';
import { IProduct } from '../../models';
import { useState } from 'react';

interface ProductProps {
    product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
    const [isDetails, setDetails] = useState(false);

    const openPop = () => {
        setDetails(!isDetails);
    };

    return (
        <div className={styles.main_div}>
            <div className={styles.image_container}>
                <img src={product.image} className={styles.image} />
            </div>
            <p>{product.title}</p>
            <span>{`${product.price}`}</span>  

            <button className={isDetails ? styles.button_open : styles.button_close} onClick={openPop}>
                {isDetails ? 'Hide Details' : 'Show Details'}
            </button>
            
            {isDetails && (
                <div className={styles.details}>
                    <p>{product.description}</p>
                    <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
                </div>
            )}
        </div>
    );
};
