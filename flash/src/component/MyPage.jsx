import React from 'react';
import styled from 'styled-components';

export default function MyPage() {
  return (
    <PageContainer>
      <Profile>
        <Selection>
            <SectionTitle>내 정보</SectionTitle>
            <SectionContainer>
                <ImageContainer>
                <Image src="/assets/mypage1.png" alt="그림1" />
                </ImageContainer>
                <ButtonContainer>
                <SectionContent>정보를 수정하고 싶으신가요?</SectionContent>
                <Button style={{backgroundColor : "#FFDF36"}}>회원정보 수정</Button>
                <SectionContent>회원을 탈퇴하고 싶으신가요?</SectionContent>
                <Button style={{backgroundColor : "#D4D4D4"}}>회원탈퇴</Button>
                </ButtonContainer>
            </SectionContainer>
        </Selection>
        <Selection>
            <SectionTitle>내 성격</SectionTitle>
            <SectionContainer>
                <ImageContainer>
                <Image src="/assets/mypage2.png" alt="그림2" />
                </ImageContainer>
                <ButtonContainer>
                <SectionContent>자신의 성격을<br />다시입력하고 싶으신가요?</SectionContent>
                <Button style={{backgroundColor : "#FF9898"}}>바로가기</Button>
                <SectionContent>입력한 자신의 성격이<br />어떤지 궁금하신 가요?</SectionContent>
                <Button style={{backgroundColor : "#6AA6FF"}}>바로가기</Button>
                </ButtonContainer>
            </SectionContainer>
        </Selection>
      </Profile>
        <SectionTitle>내 모임</SectionTitle>
        <Content>
            <Selection>
                <Img src="/assets/img2.png" />
                <Title>공차 시켜 먹을 사람?<People>2/8</People></Title>
                <Address>대구 달성군 구지면</Address>
            </Selection>
            <Selection>
                <Img src="/assets/img3.png" />
                <Title>플래너 프로젝트 할 사람?<People>5/9</People></Title>
                <Address>대구 달성군 구지면</Address>
            </Selection>
            <Selection>
                <Img src="/assets/img5.png" />
                <Title>프로젝트 할 사람 모여라<People>4/7</People></Title>
                <Address>대구 달성군 구지면</Address>
            </Selection>
        </Content>
    </PageContainer>
  )
}
const PageContainer = styled.div`
  width: 1230px;
  height: 100%;
  margin: auto;
`;
const Profile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
const Selection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #CCCCCC;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 10px;
  width: 350px;
  height: 200px;
`;
const SectionTitle = styled.p`
  font-size: 16px;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 60%;
  height: auto;
`;
const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;
const SectionContent = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #CCCCCC;
  margin: 0px;
  text-align: left;
`;
const Button = styled.button`
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 130px;
  height: 40px;
`;
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