import React, {createContext, useState} from 'react'
import ProductAPI from "./api/ProductAPI";
import axios from 'axios'

export const GlobalState = createContext()

export const DataProvider = ({children}) =>{


    const [token, setToken] =useState(false);

    const refreshToken =
        async ()=>{
        const refresh= await axios.get('/user/refresh_token')
            console.log(token)
        }
    const state={
        token: [token, setToken],
        productsAPI: ProductAPI()
    }
    ProductAPI()

    return (
        <GlobalState.Provider value={state}>
            {children}

        </GlobalState.Provider>
    )
}