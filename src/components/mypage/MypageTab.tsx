import React, { useState } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import styled from 'styled-components';
import Reservation from './Reservation';
import Writing from './Writing';
import Modify from './Modify';
import Withdrawal from './Withdrawal';

const Mypage = () => {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <Header />
      <MypageMain>
        <h2>나의 여행</h2>
        <Contents>
          <ContentsList>
            <p
              className={tab === 1 ? 'active' : undefined}
              onClick={() => setTab(1)}
            >
              예약조회
            </p>
            <p
              className={tab === 2 ? 'active' : undefined}
              onClick={() => setTab(2)}
            >
              내가 작성한 글
            </p>
            <p
              className={tab === 3 ? 'active' : undefined}
              onClick={() => setTab(3)}
            >
              회원정보수정
            </p>
            <p
              className={tab === 4 ? 'active' : undefined}
              onClick={() => setTab(4)}
            >
              회원탈퇴
            </p>
          </ContentsList>
          <ContentsMain>
            {tab !== 3 && (
              <UserInfo>
                <UserImg>
                  <img
                    src="https://www.gotogether-s.com/common/img/default_profile.png"
                    alt=""
                    style={{ width: 100 }}
                  />
                  <div>
                    <h3>님 안녕하세요 ˙ᵕ˙</h3>
                    <p>누적 결제금액 : 원</p>
                  </div>
                </UserImg>
                <UserPoint>
                  <p>포인트</p>
                  <span>0</span>
                </UserPoint>
              </UserInfo>
            )}
            <ContentsResult>
              {tab === 1 && <Reservation />}
              {tab === 2 && <Writing />}
              {tab === 3 && <Modify />}
              {tab === 4 && <Withdrawal />}
            </ContentsResult>
          </ContentsMain>
        </Contents>
      </MypageMain>
      <Footer />
    </div>
  );
};

const MypageMain = styled.div`
  width: 1184px;
  margin: 30px auto;
  > h2 {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;
const Contents = styled.div`
  width: 1184px;
  margin: 25px auto;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;
const ContentsList = styled.div`
  width: 20%;
  float: left;
  border: 1px solid #e9ecef;
  border-bottom: 0;
  > p {
    padding: 18px;
    border-bottom: 1px solid #e9ecef;
    cursor: pointer;
  }
  > .active {
    position: relative;
    background-color: #f5f6f8;
    font-weight: bold;
  }
  > .active:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: #0081c7;
  }
`;
const ContentsMain = styled.div`
  width: 70%;
  float: right;
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 70px;
  padding: 50px 0 50px 40px;
  border: 1px solid #e9ecef;
`;
const UserImg = styled.div`
  display: flex;
  align-items: center;
  width: 70%;

  > img {
    margin: 0 20px 0 0;
  }
  > div > h3 {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0 0 10px 0;
  }
`;
const UserPoint = styled.div`
  position: relative;
  text-align: center;
  width: 30%;
  > p {
    margin: 0 0 10px 0;
  }
  > span {
    font-size: 2.5rem;
  }
  > p,
  > span {
    font-weight: bold;
  }
  &:before {
    content: '';
    display: block;
    width: 1px;
    height: 100px;
    position: absolute;
    background: rgb(229, 229, 229);
    left: 0px;
    top: 50%;
    margin-top: -50px;
  }
`;
const ContentsResult = styled.div`
  > div > h2 {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

export default Mypage;