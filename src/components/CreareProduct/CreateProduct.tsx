import React, { useState } from 'react';
import styles from './CreateProduct.module.scss';
import { IProduct } from '../../models';
import axios from 'axios';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
  
// определяем интерфейсы
const initialProductData: IProduct = {
  id: null,
  title: '',
  price: 0.25,
  description: '',
  image: '',
  category: 'electronic',
  rating: {
    rate: 4,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {

    // стейты
    const [error, setError] = useState('');
    const [productData, setProductData] = useState(initialProductData);

    // валидация - todo вынести в хук или контекст 
    const validateTitle = (title: string) => {
        return /[a-zA-Z]/.test(title);
      };

    const validatePrice = (price: number) => {
        return price >= 0 && price <= 10000; 
    };

    // передаем данные с карточкой
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let newValue: string | number = value;
    


    setProductData(prevData => ({
            ...prevData,
            [name]: newValue,
    }));
    };

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
      
    if (!validateTitle(productData.title) || !validatePrice(productData.price) || !productData.description || !productData.image) {
        setError('Please check the product details');
        return;
      }

      try {
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
        onCreate(response.data);
      } catch (err) {
        const error = err as Error;
        setError(error.message);
      }
    };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        name='title'
        type='text'
        className={styles.input_style}
        placeholder='Enter product title...'
        value={productData.title}
        onChange={changeHandler}
      />
      <input
        name='price'
        type='number'
        className={styles.input_style}
        min='0'
        max='10000'
        step='1'
        placeholder='Enter product price...'
        value={productData.price}
        onChange={changeHandler}
      />
      <input
        name='description'
        type='text'
        className={styles.input_style}
        placeholder='Enter product description...'
        value={productData.description}
        onChange={changeHandler}
      />
      <input
        name='image'
        type='text'
        className={styles.input_style}
        placeholder='Enter product image URL...'
        value={productData.image}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}
      <button type='submit' className={styles.button}>Create</button>
    </form>
  );
}
