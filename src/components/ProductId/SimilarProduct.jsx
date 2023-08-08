import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProduct from '../Home/CardProduct'
import "../ProductId/styles/similarProduct.css"

const SimilarProduct = ({product}) => {
  
const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}` 

const [ filterProducts, getProductByCategory] = useFetch(url)

useEffect(() => {


    if(product){
        getProductByCategory()
    }

}, [product])



  
    return (
    <section className='similar_prod'>
        <h1>Discover similar products</h1>
        <div className='similar_prod_card'>
            {
                filterProducts?.map( prod => {
                    if(prod.id !== product.id)
                    return(
                        <CardProduct
                        key={prod.id}
                        prod={prod}
                        />
                    )
                }

                )
            }
        </div>
    </section>
  )
}

export default SimilarProduct