import React, { useEffect } from 'react'
import usePurchase from '../hooks/usePurchase'
import ProductPurchase from '../components/Purchases/ProductPurchase'

const Purchases = () => {

const { purchases, getAllProductsPurchases } = usePurchase()

useEffect(() => {
getAllProductsPurchases()
}, [])



  return (
    <div>
        <h1>Purchases</h1>
        <div>
            {
                purchases?.map(prodPurchase => (
                    <ProductPurchase 
                    key={prodPurchase.id}
                    prodPurchase={prodPurchase}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Purchases