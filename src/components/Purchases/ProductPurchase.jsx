import React from 'react'
import "../Purchases/styles/productPurchase.css"

const ProductPurchase = ({prodPurchase}) => {
  return (
    <div className='principal_purchase'>
          <article className='product_purchase'>
        <img className='img_purchase' src={prodPurchase.product.images[1].url} alt="" />
        <h3 className='tt_purchase'>{prodPurchase.product.title}</h3>
        <span className='quantity_purchase'>Purchased products {prodPurchase.quantity}</span>
        <span className='quantity_purchase xs_quantity'>${prodPurchase.quantity * prodPurchase.product.price}</span>
    </article>
    </div>

  )
}

export default ProductPurchase