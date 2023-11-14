import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProductsGlobal: (state, action) => action.payload

    }
})

export const {setProductsGlobal} = productsSlice.actions

export default productsSlice.reducer

export const getAllProductsThunk = (url = "https://e-commerce-api-v2.academlo.tech/api/v1/products") => dispatch => {
  return axios
    .get(url)
    .then((res) => {
      dispatch(setProductsGlobal(res.data));
      return res.data; // Devuelve los datos para resolver la promesa
    })
    .catch((err) => {
      console.log(err);
      throw err; // Lanza el error para rechazar la promesa
    });
};