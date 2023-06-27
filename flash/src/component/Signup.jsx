import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import styled from 'styled-components';

export default function Signup() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [checkpw, setCheckpw] = useState('');
    const [name, setName] = useState('');

    let navigate=useNavigate();
    
    return (
        <Background>
            <Content>
                <Img src="/assets/logo.png" />
                <Form>
                    <Label>아이디</Label>
                    <Input type="text" value={id} onChange={(e) => setId(e.target.vlaue)} placeholder='아이디를 입력하세요' />
                    <Label>비밀번호</Label>
                    <Input type="password" value={pw} onChange={(e) => setPw(e.target.vlaue)} placeholder='비밀번호를 입력하세요' />
                    <Label>비밀번호 확인</Label>
                    <Input type="password" value={checkpw} onChange={(e) => setCheckpw(e.target.vlaue)} placeholder='비밀번호를 입력하세요' />
                    <Label>이름</Label>
                    <Input type="text" value={name} onChange={(e) => setName(e.target.vlaue)} placeholder='이름을 입력하세요' />
                    <Button type="submit">회원가입</Button>
                    <p>이미 회원이신가요?<Span onClick={()=>{ navigate('/signin') }}>로그인</Span></p>
                </Form>
            </Content>
        </Background>
    )
}

const Background = styled.div`
    width: 100vw;
    height: 100vh;
`
const Content = styled.div`
    width: 500px;
    height: 700px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 60px;
    box-sizing: border-box;
`
const Form = styled.form`
    padding: 50px 5px 0px 5px;
`
const Img = styled.img`
    width: 30%;
`
const Label = styled.label`
    float: left;
`
const Input = styled.input`
    outline: none;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    margin-bottom: 25px;
    border: none;
    border-bottom: 1px solid grey;
    outline: none;
    font-size: 16px;
`
const Button = styled.button`
    width: 100%;
    height: 40px;
    font-size: 20px;
    background: #FFDF36;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 30px;
    cursor: pointer;
`
const Span = styled.span`
    margin-left: 20px;
    color: #FFDF36;
    cursor: pointer;
`