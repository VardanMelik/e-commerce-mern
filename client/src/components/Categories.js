import styled from 'styled-components'
import { categories } from './SliderData.js'
import CategoryItem from './CategoryItem'

function Categories() {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`
