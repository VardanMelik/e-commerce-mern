import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Nabvar from '../components/Nabvar'

function Cart() {
    return (
        <Container>
            <Announcement/>
            <Nabvar/>
            <Wrapper>
                <Title>Your back</Title>
                <Top>
                    <TopBotton>Continue shopping</TopBotton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>

                    </TopTexts>
                    <TopBotton type="filled">Checkout now</TopBotton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://image.made-in-china.com/202f0j00oOStnyLzMgcF/Modern-Fashion-Elegant-Women-Clothes.webp" />
                                <Details>
                                    <ProductName><b>Product: </b>It's looks very nice</ProductName>
                                    <ProductId><b>Product ID: </b> 1345625789</ProductId>
                                    <ProductColor/>
                                    <ProductSize><b>Size: </b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>Price</PriceDetail>
                            <PriceDetail></PriceDetail>
                        </Product>
                    </Info>
                    <Summary>Summary</Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopBotton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`

`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 10px
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Summary = styled.div`
    flex: 1;
`
const Product = styled.div``
    
const ProductDetail = styled.div``

const PriceDetail = styled.div``

const Image = styled.img``

const Details = styled.div``

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div``

const ProductSize = styled.span``