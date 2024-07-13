import { useContext } from 'react';
import styles from './ProductPage.module.scss';
import { CreateProduct } from '../components/CreareProduct/CreateProduct';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { Loader } from '../components/Loader/Loader';
import { Modal } from '../components/Modal/Modal';
import { Product } from '../components/Product/Product';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';
import { ModalContext } from '../context/modalContext';

export function ProductsPage() {
  const { loading, error, products, addProduct } = useProducts();
  const { modal, close, open } = useContext(ModalContext); 
  
  const createHandler = (product: IProduct) => {
      close();
      addProduct(product);
  };
  
  return (
      <div className={styles.div}>
          {loading && <Loader />}
          {error && <ErrorMessage error={error} />}
          {products.map(product => (
              <Product product={product} key={product.id} />
          ))}
          {modal && (
              <Modal title="Create new product" onClose={close}>
                  <CreateProduct onCreate={createHandler} />
              </Modal>
          )}
          <button className={styles.button} onClick={open}>Click to create</button>
      </div>
  );
}