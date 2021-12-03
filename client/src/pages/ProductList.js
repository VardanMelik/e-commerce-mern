import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Nabvar from '../components/Nabvar'
import Products from '../components/Products'
import NewsLetter from '../components/Newsletter'
import Footer from '../components/Footer'

function ProductList() {
    return (
        <Container>
            <Announcement />
            <Nabvar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products
                        <Select>
                            <Option disabled selected>
                                Color
                            </Option>
                            <Option>White</Option>
                            <Option>Black</Option>
                            <Option>Red</Option>
                            <Option>Blue</Option>
                            <Option>Yellow</Option>
                            <Option>Green</Option>
                        </Select>
                        <Select>
                            <Option disabled selected>
                                Size
                            </Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </FilterText>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products
                        <Select>
                            <Option selected>Newest</Option>
                            <Option>Price (asc)</Option>
                            <Option>Price (desc)</Option>
                        </Select>
                    </FilterText>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default ProductList

const Container = styled.div``

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled.h1`
    margin: 20px;
`

const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
     
const Option = styled.option`

`