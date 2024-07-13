import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { IProduct } from "../models";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addProduct (product: IProduct) {
      setProducts(prev => [...prev, product])
    }

    async function fetchProducts() {
      try {
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
      setProducts(response.data); 
      setLoading(false) }
      catch (e) {
      const error = e as AxiosError;
      setError(error.message)   
      setLoading(false)
      
      }
    }
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    return { products, error, loading, addProduct}
} 