import axios from 'axios'
import React from 'react'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
export async function getStaticProps({ locale}: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['custom'])),
    },
  };
}
async function Products() {
    const res=await axios.get<Product[]>('https://fakestoreapi.com/products');
    const products=res.data;
    console.log(products);
    const { t } = useTranslation('custom');
  return (
    <>
      {products.map((product,i)=>(
        <div key={product.id} className='product-item'>
                <div className='product-img'>
                    <Image className='img' width={200} height={200} src={product.image} alt='product-image'/>
                </div>
                <div className='product-content'>
                    <div className='product-categories'>
                        <p className='category'>{product.category}</p>
                    </div>
                    <div className='product-title'>
                        <h2 className='title'>{product.title}</h2>
                    </div>
                    <div className='product-description'>
                        <p className='description'>{product.description}</p>
                    </div>
                    <div className='product-price'>
                        <p className='price'>${product.price.toFixed(2)}</p>
                    </div>
                    <div className='add-to-cart-btn'>
                        <a href=''>أضف إلي السلة</a>
                    </div>
        
                </div>
            </div>
      ))}
    </>
  )
}

export default Products
