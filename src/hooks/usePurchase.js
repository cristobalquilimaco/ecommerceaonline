import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"

const usePurchase = () => {

    const [purchases, setPurchases] = useState()

    const dispatch = useDispatch()

    const buyThisCart = () =>{
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/purchases`
        axios.post(url, {}, getConfigToken())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductsCartThunk())
        })
        .catch(err => console.log(err))
    }

const getAllProductsPurchases = () =>{
const url = `https://e-commerce-api-v2.academlo.tech/api/v1/purchases`
axios.get(url, getConfigToken())
.then(res => setPurchases(res.data))
.catch(err => console.log(err))

}

return { purchases, getAllProductsPurchases, buyThisCart }

}

export default usePurchase