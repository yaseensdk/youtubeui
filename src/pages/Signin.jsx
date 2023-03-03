import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
  height: calc(100vh - 56px);
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.bgLighter};
  border: 1px solid ${({theme}) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`
const Title = styled.h1`
  font-size: 24px;

`
const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`
const Input = styled.input`
  border: 1px solid ${({theme}) => theme.soft};
  border-radius: 3px;
  background-color: transparent;
  width: 100%;
  padding: 10px;
`
const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  background-color: ${({theme}) => theme.soft};
  color: ${({theme}) => theme.textSoft};
  font-weight: 500;
  cursor: pointer;
`
const More = styled.div`
  display: flex;
  font-size: 12px;
  color: ${({theme}) => theme.textSoft};
  margin-top: 10px;
`
const Links = styled.div`
margin-left: 50px;
`
const Link = styled.span`
margin-left: 20px;
`

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Signin</Title>
        <Subtitle>to continue to myTube</Subtitle>
        <Input placeholder="username"/>
        <Input placeholder="password" type="password"/>
        <Button>Sign in</Button>
        <Title>Or</Title>
        <Input placeholder="username"/>
        <Input placeholder="email" type="email"/>
        <Input placeholder="password" type="password"/>
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Privacy</Link>
        </Links>
      </More>
    </Container>
  )
}

export default Signin