import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: ${({theme}) => theme.bgLighter};
  position: sticky;
  top: 0;
  height: 56px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  justify-content: flex-end;
  position: relative;
`
const Search = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  width: 40%;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  cursor: pointer;
  background-color: transparent;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  border-radius: 3px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search"/>
          <SearchIcon />
        </Search>
        <Link to="signin" style={{textDecoration: "none", color: "inherit"}}>
          <Button>
            <AccountCircleIcon />
            SIGN IN
          </Button>
          </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar