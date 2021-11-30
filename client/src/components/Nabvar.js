import React from 'react'
import styled from 'styled-components'
//import Badge from '@mui/material/Badge';
//import MailIcon from '@mui/icons-material/Mail';

function Nabvar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input />
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>E-commerce</Logo>
                </Center>

                <Right>
                    <MenuItem>
                        Register
                    </MenuItem>
                    <MenuItem>
                        Sign In
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="success">
                            <MailIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Nabvar

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
`

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
`

