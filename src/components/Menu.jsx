import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1.25;
  background-color: ${({theme}) => theme.bgLighter};
  height: 100vh;
  color: ${({theme}) => theme.text};
  overflow: auto;
  height: 100vh;
  position: sticky;
  top: 0;
  ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: transparent; 
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`
const Wrapper = styled.div`
  padding: 18px 26px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`
const Img = styled.img`
  height: 25px;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;
`
const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({theme}) => theme.textSoft};
`

const Signin = styled.div`
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
  margin-top: 10px;
`

const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
          <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
            <Logo>
              <Img src={logo}/>
              myTube
            </Logo>
          </Link>
          <Item>
            <HomeIcon />  
            Home 
          </Item>
          <Item>
            <ExploreIcon />  
            Explore 
          </Item>
          <Item>
            <SubscriptionsIcon />  
            Subscriptions 
          </Item>
          <Hr />
            <Signin>
              Sign in to like videos, comment and subscribe.
              <Link to="signin" style={{textDecoration: "none", color: "inherit"}}>
                <Button>
                  <AccountCircleIcon />
                  SIGN IN
                </Button>
              </Link>
            </Signin>
          <Hr />
          <Item>
            <VideoLibraryIcon />  
            Library 
          </Item>
          <Item>
            <HistoryIcon />  
            History 
          </Item>
          <Hr />
          <Item>
            <LibraryMusicIcon />  
            Music 
          </Item>
          <Item>
            <SportsBaseballIcon />  
            Sports 
          </Item>
          <Item>
            <SportsEsportsIcon />  
            Gaming 
          </Item>
          <Item>
            <MovieCreationIcon />  
            Movies 
          </Item>
          <Item>
            <ArticleIcon />  
            News 
          </Item>
          <Item>
            <LiveTvIcon />  
            Live 
          </Item>
          <Hr />
          <Item>
            <SettingsIcon />  
            Settings 
          </Item>
          <Item>
            <FlagIcon />  
            Report 
          </Item>
          <Item>
            <HelpIcon />  
            Help 
          </Item>
          <Item onClick={() => setDarkMode(!darkMode)}>
            <SettingsBrightnessIcon />  
            {darkMode ? "lightMode" : "darkMode"}
          </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu