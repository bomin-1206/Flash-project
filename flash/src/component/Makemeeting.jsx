import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './Post';

export default function Makemeeting() {
    const [enroll_company, setEnroll_company] = useState({
        address:'',
    });  
    
    const [popup, setPopup] = useState(false);
    const [Address2, SetAddress2] = useState("");   

    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
        e.preventDefault();
        setEnroll_company(e.target.value);
    }

    const handleComplete = (data) => {
        setPopup(!popup);
    }
    const address2Handler = (e) => {
        e.preventDefault();
        SetAddress2(e.target.value);
    }
  return (
    <Background>
        <Page>모임 만들기</Page>
        <p>제목</p>
        <Title type="text" />
        <p>주소</p>
        <Div>
              <Address type="text" required={true} name="address"
              onChange={handleInput} value={enroll_company.address} />
              <Button id='find' onClick={handleComplete}>찾기</Button>
                {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
              <Addre2 type="text" id="detailaddress" name="address2" value={Address2} onChange={address2Handler} />
        </Div>
        <p>내용</p>
        <textarea />
        <div>
            <p>프로필 이미지</p>
            <input type="file" />
        </div>
        <p>최대 인원 수</p>
        <select>
            <option>인원을 선택하세요</option>
            {
                // forEach문
                // option이 1~100명까지 나오도록
            }
        </select>
        <Back>뒤로가기</Back>
        <Make>모임 만들기</Make>
    </Background>
  )
}

const Background = styled.div`
    width: 1130px;
    height: 100%;
    margin: auto;
    text-align: left;
`
const Page = styled.p`
    font-size: 30px;
    text-align: left;
    margin: 0px;
`
const Title = styled.input`
    width: 600px;
    height: 35px;
    font-size: 18px;
    outline: none;
    border: 1px solid #A4A4A4;
`
const Div = styled.div`
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Address = styled.input`
    width: 480px;
    height: 35px;
    font-size: 18px;
    outline: none;
    border: 1px solid #A4A4A4;
`
const Button = styled.button`
    width: 100px;
    height: 40px;
    font-size: 18px;
    border: none;
    color: white;
    background-color: #FFDF36;
`
const Addre2 = styled.input`
    width: 600px;
    height: 35px;
    font-size: 18px;
    outline: none;
    border: 1px solid #A4A4A4;
`
const Back = styled.button`
    width: 200px;
    height: 56px;
    background: white;
    border: 1px solid #FFDF36;
    color: A4A4A4;
    font-size: 18px;
`
const Make = styled.button`
    width: 200px;
    height: 56px;
    background: #FFDF36;
    border: none;
    color: white;
    font-size: 18px;
`