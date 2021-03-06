import { useState, useEffect } from 'react' 
import styled from 'styled-components'
import Product from './Product'
import { categories, popularProducts } from './SliderData'
import axios from 'axios'

function Products({ category, filters, sort }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect( () => {
        const getProducts = async () => {
            try {
                const response = await axios.post( category 
                    ? `http://localhost:5000/api/products/findall?category=${category}` 
                    : `http://localhost:5000/api/products/findall`);
                setProducts(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        getProducts();
    }, [category]);

    console.log( typeof(products))

    useEffect( () => {

        /*category &&
        setFilteredProducts(
            products.filter((item) =>
              Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
              )
            )
          );*/
      }, [products, category, filters]);

    useEffect( () => {
        if ( sort === "newest" ) {
            setFilteredProducts( prev => 
                [...prev].sort( (a,b) => a.createdAt - b.createdAt)    
            )
        } else if (( sort === "asc")) {
            setFilteredProducts( (prev) => 
                [...prev].sort((a,b) => a.price - b.price)
            )
        } else {
            setFilteredProducts( (prev) => 
                [...prev].sort( (a,b) => b.price - a.price)
            )
        }
    }, [sort])

    
    return (
        <Container>
            { category 
                ? filteredProducts.map( item => <Product item={item} key={item.id}/>) 
                : '' /*products
                    .slice(0,8)
                    .map( (item) => <Product item={item} key={item.id} />)*/
            }
        </Container>
    )
}

export default Products

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`