import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Signin() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    let navigate=useNavigate();

    return (
        <Background>
            <Content>
                <Img src="/assets/logo.png" />
                <Form>    
                    <Input value={id}
                        onChange={(e) => setId(e.target.vlaue)}
                        type="text" placeholder='아이디를 입력하세요'
                        style={{backgroundImage: `url(/assets/input_id.png)`}}
                    />
                    <Input value={pw}
                        onChange={(e) => setPw(e.target.vlaue)}
                        type="password" placeholder='비밀번호를 입력하세요'
                        style={{backgroundImage: `url(/assets/input_pw.png)`}}
                    />
                    <Button type="submit" onClick={()=>{ navigate('/') }}>로그인</Button>
                    <p>아직 회원이 아니신가요?<Span onClick={()=>{ navigate('/signup') }}>회원가입</Span></p>
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
    padding: 80px 5px 0px 5px;
`
const Img = styled.img`
    padding: 50px 0px 0px 0px;
    width: 30%;
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
    background-position: 5px center;
    padding-left: 40px;
    background-repeat: no-repeat;
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
    margin-top: 50px;
    cursor: pointer;
`
const Span = styled.span`
    margin-left: 20px;
    color: #FFDF36;
    cursor: pointer;
`