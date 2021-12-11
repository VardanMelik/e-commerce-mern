import { useState, useEffect } from 'react' 
import styled from 'styled-components'
import Product from './Product'
import { categories, popularProducts } from './SliderData'
import axios from 'axios'

function Products({ category, filters, sort }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilterdProducts] = useState([])

    useEffect( () => {
        const getProducts = async () => {
            try {
                const response = await axios.post( category 
                    ? `http://localhost:5000/api/products/findall?category=${category}` 
                    : `http://localhost:5000/api/products/findall`);
                setProducts(response.data);
                console.log(products);
            } catch (error) {
                console.log(error)
            }
        }
        getProducts();
    }, [category]);

    useEffect(() => {
        category &&
        setFilterdProducts(
            products.filter((item) =>
              Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
              )
            )
          );
      }, [products, category, filters]);

    
    return (
        <Container>
            {filteredProducts.map( item => (
                <Product item={item} key={item.id}/>
            ))}
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