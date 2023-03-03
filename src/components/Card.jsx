import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: ${(props) => props.type !== "small" && "300px"};
    margin-bottom: ${(props) => props.type === "small" ? "10px" : "45px"};
    display: ${(props) => props.type === "small" && "flex"};
    gap: 10px;
`
const Image = styled.img`
    width: 100%;
    height: ${(props) => props.type === "small" ? "120px" : "202px"};
    flex: 1;
`
const Details = styled.div`
    display: flex;
    gap: 12px;
    margin-top: ${(props) => props.type !== "small" && "16px"};
    flex: 1;
`
const ChannelImg = styled.img`
    display: ${(props) => props.type === "small" && "none"};
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`
const Texts = styled.div``

const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({theme}) => theme.text};
`
const ChannelName = styled.h2`
font-size: 14px;
color: ${({theme}) => theme.textSoft};
margin: 9px 0;
`
const Info = styled.div`
font-size: 14px;
color: ${({theme}) => theme.textSoft};
`

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration: "none"}}>
        <Container type={type}>
            <Image type={type} src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
            <Details type={type}>
                <ChannelImg type={type} src="https://www.logolynx.com/images/logolynx/90/90cdeb260df361a39d97540d9c75a814.png"/>
                <Texts>
                    <Title>Test video</Title>
                    <ChannelName>yaseensdk</ChannelName>
                    <Info>
                        1M views | 1 day ago
                    </Info>
                </Texts>
            </Details>
        </Container>
    </Link>
  )
}

export default Card