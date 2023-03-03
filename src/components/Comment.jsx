import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0;
`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #999;
`
const Details = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
color: ${({theme}) => theme.text}
`
const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    margin-left: 5px;
    color: ${({theme}) => theme.textSoft};
`
const Text = styled.span`
    font-size: 14px;
`

const Comment = () => {
  return (
    <Container>
        <Avatar src="https://www.logolynx.com/images/logolynx/90/90cdeb260df361a39d97540d9c75a814.png"/>
        <Details>
            <Name>First Last<Date>1 year ago</Date></Name>
            <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis id laboriosam quam dolorum? Iusto, tempore veniam. Rem, ullam laboriosam,
                 incidunt neque quaerat debitis natus officia mollitia excepturi at doloribus sit.
            </Text>
        </Details>
    </Container>
  )
}

export default Comment