import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Meeting() {
    
    let navigate=useNavigate();

  return (
    <Background>
        <Page>모임</Page>
        <Content>
            <div>
                <Img src="/assets/img1.png" />
                <Title>같이 밥먹을 사람?<People>3/6</People></Title>
                <Address>대구 달성군 구지면</Address>
            </div>
            <div>
                <Img src="/assets/img2.png" />
                <Title>공차 시켜 먹을 사람?<People>2/8</People></Title>
                <Address>대구 달성군 구지면</Address>
            </div>
            <div>
                <Img src="/assets/img3.png" />
                <Title>플래너 프로젝트 할 사람?<People>5/9</People></Title>
                <Address>대구 달성군 구지면</Address>
            </div>
            <div>
                <Img src="/assets/img4.png" />
                <Title>노래방 갈 사람?<People>3/4</People></Title>
                <Address>대구 달성군 구지면</Address>
            </div>
            <div>
                <Img src="/assets/img5.png" />
                <Title>프로젝트 할 사람 모여라<People>4/7</People></Title>
                <Address>대구 달성군 구지면</Address>
            </div>
            <div>
                <Img src="/assets/img6.png" />
                <Title>피자 시켜먹을 사람<People>2/4</People></Title>
                <Address>대구 달성군 구지면</Address>
            </div>
        </Content>
        <Plus onClick={()=>{ navigate('/makemeeting') }}>+</Plus>
        <Buttons>
            <Button style={{backgroundColor: '#FFDF36', color: 'white'}}>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
        </Buttons>
    </Background>
  )
}

const Background = styled.div`
    width: 1230px;
    height: 100%;
    margin: auto;
`
const Page = styled.p`
    font-size: 30px;
    text-align: left;
    margin: 0px;
`
const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: left;
`
const Img = styled.img`
    width: 100%;
`
const Title = styled.p`
    font-size: 20px;
    margin: 0px;
`
const People = styled.span`
    float: right;
`
const Address = styled.p`
    font-size: 16px;
    color: #7D7D7D;
    margin: 0px;
`
const Plus = styled.button`
    width: 50px;
    height: 50px;
    font-size: 50px;
    border: none;
    border-radius: 50%;
    background-color: #FFDF36;
    color: white;
    float: right;
    cursor: pointer;
`
const Buttons = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin: 50px auto 50px auto;
`
const Button = styled.button`
    border: none;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    background-color: white;
    width: 40px;
    height: 40px;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
`