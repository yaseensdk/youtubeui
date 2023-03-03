import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined"
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined"
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined"
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined"
import Comments from '../components/Comments'
import Card from '../components/Card'

const Container = styled.div`
  display: flex;
  gap: 24px;
`
const Content = styled.div`
  flex: 4;
`
const Recommendations = styled.div`
flex: 3;
`
const VideoWrapper = styled.div``
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.text};
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Info = styled.span`
  color: ${({theme}) => theme.textSoft};
`
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme}) => theme.text};

`
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  border: none;
  cursor: pointer;
`
const Hr = styled.hr`
  border: 0.5px solid ${({theme}) => theme.soft};
  margin: 15px 0;
`
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #999;
`
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
`
const ChannelName = styled.h2`
  font-size: 16px;
  font-weight: 500;
`
const ChannelCounter = styled.span`
  margin-bottom: 20px;
  margin-top: 5px;
  font-size: 12px;
  color: ${({theme}) => theme.textSoft};
`
const Description = styled.p`
font-size: 14px;
`
const Subscribe = styled.button`
background-color: #cc1a00;
color: white;
border: none;
border-radius: 5px;
height: max-content;
padding: 10px 20px;
cursor: pointer;
`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </VideoWrapper>
        <Title>Test Vid</Title>
        <Details>
          <Info>5,715,123 view | Sep 22, 2022</Info>
          <Buttons>
          <Button>
              <ThumbUpOutlinedIcon /> 213K
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://www.logolynx.com/images/logolynx/90/90cdeb260df361a39d97540d9c75a814.png" />
            <ChannelDetail>
              <ChannelName>Yaseensdk</ChannelName>
              <ChannelCounter>680K Subscribers</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio quo enim ab magnam consequatur reprehenderit quaerat minus,
                 eos cum id non eius accusantium laudantium ea veritatis incidunt dolore fuga.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendations>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
      </Recommendations>
    </Container>
  )
}

export default Video