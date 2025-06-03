import React from 'react'
import Image from 'next/image'
function product() {
  return (
    <>
    <div className='product-item'>
        <div className='product-img'>
            
        </div>
        <div className='product-content'>
            <div className='product-categories'>
                <p className='category'></p>
            </div>
            <div className='product-title'>
                <h2 className='title'></h2>
            </div>
            <div className='product-description'>
                <p className='description'></p>
            </div>
            <div className='product-price'>
                <p className='price'></p>
            </div>
            <div className='add-to-cart-btn'>
                <a href=''>أضف إلي السلة</a>
            </div>

        </div>
    </div>
      
    </>
  )
}

export default product
