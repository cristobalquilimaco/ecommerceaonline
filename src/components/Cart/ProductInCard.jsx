import React from 'react'
import useCrudCart from '../../hooks/useCrudCart'
import '../Cart/styles/productINcard.css'

const ProductInCard = ({ prodCart }) => {

    const {deleteProductFromCart }  =  useCrudCart()

const handleDeleteCart = () =>{
deleteProductFromCart(prodCart.id)
}

  return (
    <article className='product_in_cart'>
        <header className='product_in_cart_header'>
            <img className='product_in_cart_images' src={prodCart.product.images[0].url} alt="" />
        </header>
            <h3 className='product_in_cart_title'>{prodCart.product.title}</h3>
        <button className='btn_product_delete' onClick={handleDeleteCart}>
        <i className='bx bx-trash'></i>
        </button>
        <footer className='product_in_cart_footer'>
            <span className='product_in_cart_quantity'>{prodCart.quantity}</span>
            <div className='product_in_cart_subtotal'>
                <span className='product_in_cart_label'>Subtotal</span>
                <span className='product_in_cart_price'>{prodCart.product.price * prodCart.quantity}</span>
            </div>
        </footer>
    </article>
  )
}

export default ProductInCard