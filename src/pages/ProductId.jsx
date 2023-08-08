import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/ProductId/ProductIdInfo'
import Slidermgs from '../components/ProductId/Slidermgs'
import SimilarProduct from '../components/ProductId/SimilarProduct'
import "../pages/styles/productId.css"

const ProductId = () => {
const { id } = useParams()

const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`

const [product, getProductById] = useFetch(url)

useEffect(() => {
getProductById()
}, [id])

  return (
    <>
        <div className='productid1'>
      <section className='product_slider'>
      <Slidermgs product={product}/>
  <ProductIdInfo product={product} />
  </section>
  <SimilarProduct product={product}/>
    </div>
    </>

  )
}

export default ProductId