import React, { useState } from 'react'
import '../Home/styles/productidinfo.css'
import useCrudCart from '../../hooks/useCrudCart';

// productsIdInfo.css


const ProductIdInfo = ({product}) => {
  const [quantity, setQuantity] = useState(1)
  const { AddProductToCart } = useCrudCart()

  const handlePlus = () => {setQuantity(quantity +1)}
  const handleminus = () => {
    if(quantity - 1>= 1){
    setQuantity(quantity -1)}
    }


    const handleToCart = () => {
      const data = {
quantity,
productId: product.id

      }
AddProductToCart(data)
    }



    return (
    <section className='product__info__card'>
        <h3 className='product__info__brand'>{product?.brand}</h3>
        <h2 className='product__info__title'>{product?.title}</h2>
        <p className='product__info__description'>{product?.description}</p>
        <footer className='footer__info__card'>
        <div className='info__price__card'>
            <span>Price</span>
        <span>{product?.price}</span>
        </div>
        <div className='info__add__to'>
            <span>Quantity</span>
            <div>
            <button className='btn__info__card' onClick={handleminus}>-</button>
            <div className='btn__info__card'>{quantity}</div>
            <button className='btn__info__card' onClick={handlePlus}>+</button>
            </div>
        </div>
        <button className='btn__info__add' onClick={handleToCart} >Add to car <i className='bx bx-cart-alt'></i></button>
    </footer>
    </section>

  )
}

export default ProductIdInfo