import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Home from "./component/Home";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import Meeting from "./component/Meeting";
import Makemeeting from "./component/Makemeeting";
import "./App.css";
import MyPage from "./component/MyPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/makemeeting" element={<Makemeeting />} />
        <Route path="/mypage" element={<MyPage />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

function Navbar() {
  let navigate = useNavigate();

  if (
    window.location.pathname === "/signin" ||
    window.location.pathname === "/signup"
  )
    return null;
  return (
    <Header>
      <Content>
        <Img src="/assets/logo.png" />
        <Input />
        <Link href="/">홈</Link>
        <Link href="/meeting">모임</Link>
        <Link href="/mypage">내 정보</Link>
      </Content>
      <Logout
        href="/signin"
        onClick={() => {
          navigate("/signin");
        }}
      >
        로그아웃
      </Logout>
    </Header>
  );
}

const Header = styled.div`
  width: 1620px;
  margin: auto;
  display: flex;
  margin-top: 14px;
  align-items: center;
  justify-content: space-between;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 100px;
  margin: 0px 14px 0px 14px;
`;
const Input = styled.input`
  width: 230px;
  height: 30px;
  outline: none;
  font-size: 16px;
`;
const Link = styled.a`
  margin-left: 34px;
  font-size: 22px;
  text-decoration: none;
  color: black;
`;
const Logout = styled.p`
  float: right;
  cursor: pointer;
`;
const FooterContainer = styled.div`
  background-color: black;
  color: white;
  padding: 20px 600px 20px 600px;
  display: flex;
  flex-direction: column;
  align-items: self-start;
`;
const Logo = styled.div`
  width: 100px; /* 로고의 너비에 맞게 조정 */
  height: 50px; /* 로고의 높이에 맞게 조정 */
`;
const LogoImage = styled.img`
  width: 100%;
`;
const ContactInfo = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  font-size: 14px;
  justify-content: center;
`;
const ContactItem = styled.div`
  margin-right: 20px;
  text-align: left;
`;

function Footer() {
  if (
    window.location.pathname === "/signin" ||
    window.location.pathname === "/signup"
  )
    return null;
  return (
    <FooterContainer>
      <Logo>
        <LogoImage src="/assets/footer_logo.png" alt="로고" />
      </Logo>
      <ContactInfo>
        <ContactItem>고객 문의: gbm5959@gmail.com</ContactItem>
        <ContactItem>
          주소: 대구소프트웨어마이스터고등학교
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대구광역시
          달성군 구지면 창리로 11길 93
        </ContactItem>
        <ContactItem>모임: Show</ContactItem>
      </ContactInfo>
    </FooterContainer>
  );
}

export default App;
