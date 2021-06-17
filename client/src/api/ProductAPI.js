import React, {useState, useEffect} from 'react';
import axios from 'axios'

function ProductApi() {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const res = await axios.get('/api/products')
        console.log(res.data.products)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return {
        products: [products, setProducts]
    }
}

export default ProductApi;