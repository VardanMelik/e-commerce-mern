import styled from 'styled-components'
import Product from './Product'
import { categories, popularProducts } from './SliderData'

function Products({ category, filter, sort }) {
    console.log(category, filter, sort)

    
    return (
        <Container>
            {popularProducts.map( item => (
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