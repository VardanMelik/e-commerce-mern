import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

function Newsletter() {
    return (
        <Container>
            <Title>News Letter</Title>
            <Description>Get timely updates from your favorite products. </Description>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button>
                    <SendIcon/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div``
const InputContainer = styled.div``
const Input = styled.input``
const Button = styled.button``