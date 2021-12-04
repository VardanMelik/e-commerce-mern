import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Nabvar from '../components/Nabvar'
import Newsletter from '../components/Newsletter'
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { mobile } from '../responsive'


function Product() {
    return (
        <Container>
            <Announcement/>
            <Nabvar/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://cdn.cliqueinc.com/posts/279627/dreamy-outfits-279627-1556722118571-image.500x0c.jpg"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Lorem Ipsum</Title>
                    <Description>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Description>
                    <Price>$ 20 </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <CancelPresentationOutlinedIcon/>
                            <Amount>1</Amount>
                            <AddOutlinedIcon/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product

const Container = styled.div``

const Wrapper =styled.div`
    display: flex;
    padding: 50px;

    ${mobile(
        {
            padding: "10px",
            flexDirection: "column"
        }
    )}
`

const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${mobile(
        {
            height: "40vh"
        }
    )}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;

    ${mobile(
        {
            padding: "10px"
        }
    )}
`

const Title = styled.h1`
    font-weight: 200;
`

const Description = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

    ${mobile(
        {
            width: "100%"
        }
    )}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;

    ${mobile(
        {
            width: "100%"
        }
    )}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #f8f4f4;
    }
`