import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div``
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #999;
`
const Input = styled.input`
    background-color: transparent;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.soft};
    padding: 5px;
    outline: none;
`

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src="https://www.logolynx.com/images/logolynx/90/90cdeb260df361a39d97540d9c75a814.png"/>
            <Input placeholder="Add a comment..."/>
        </NewComment>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </Container>
  )
}

export default Comments