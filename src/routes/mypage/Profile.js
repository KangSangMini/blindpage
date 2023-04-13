/* eslint-disable prefer-const */
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { changeNickName } from "../../redux/slice/loginSlice";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((store) => {
    return store.loginState.userId;
  });
  const nowNick = useSelector((store) => {
    return store.loginState.nick;
  });
  const nowCompany = useSelector((store) => {
    return store.loginState.company;
  });

  const [nickValue, setNickValue] = useState(nowNick);
  const onChange = useCallback((e) => {
    setNickValue(e.target.value);
  });

  const changeNick = () => {
    const putNick = async () => {
      try {
        const res = await axios({
          method: "put",
          url: "http://43.200.254.222:3000/users/change_nick",
          data: {
            uid: userId,
            nick: nickValue,
          },
        });
        console.log(res);
        dispatch(
          changeNickName({
            nick: nickValue,
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    putNick();
    navigate("/mypage");
  };

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [window.innerHeight]);

  return (
    <StyledProfile>
      <div className="profile">
        <StyledTopBar>
          <div className="topbar">
            <Link to="/mypage" className="close">
              <i className="blind">Close</i>
            </Link>
            <div className="topbar-title">
              <span>프로필 수정</span>
            </div>
            <div className="topbar-apply">
              <button type="button" onClick={changeNick}>
                저장
              </button>
            </div>
          </div>
        </StyledTopBar>
        <StyledBox className="profile-nick">
          <div>
            <h2>닉네임</h2>
            <input
              type="text"
              value={nickValue}
              onChange={onChange}
              maxLength="10"
            />
            {/* <p>하루에 한 번 월 5회까지만 변경할 수 있습니다</p> */}
            <p>10자 이내 닉네임을 입력해주세요</p>
            {/* <p id="blue">사용 가능한 닉네임입니다.</p>
            <p id="red">사용 불가능한 닉네임입니다.</p> */}
          </div>
        </StyledBox>
        <StyledBox className="profile-company">
          <div>
            <h2>현 직장</h2>
            <input type="text" value={nowCompany} readOnly />
          </div>
        </StyledBox>
        {/* <StyledBox className="profile-tag">
          <div>
            <h2>마이 태그</h2>
            <input type="text" value="현재 직장" />
          </div>
        </StyledBox>
        <StyledBox className="profile-introduce">
          <div>
            <h2>소개</h2>
            <input type="text" placeholder="자기소개를 추가해주세요." />
          </div>
        </StyledBox> */}
        <div className="profile-footer">
          <p>프로필 정보는 회사채널에 나오지 않습니다.</p>
        </div>
      </div>
    </StyledProfile>
  );
}

const StyledProfile = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  font-size: 1.4rem;
  .profile {
    display: flex;
    flex-direction: column;
    height: calc((var(--vh, 1vh) * 100) - 122px);
    &-footer {
      height: 150px;
      padding: 20px;
      background-color: #f6f7fb;
      color: #939798;
      flex-grow: 1;
    }
  }
`;

const StyledTopBar = styled.div`
  height: 54px;
  border-bottom: 1px solid #d4d4d4;
  .topbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 54px;
    padding: 0 20px;
    font-size: 1.8rem;
    font-weight: 700;

    .close {
    }
    &-title {
    }
    &-apply {
      button {
        font-size: 1.8rem;
        font-weight: 700;
        color: #94969b;
      }
    }
  }
`;

const StyledBox = styled.section`
  border-bottom: 1px solid #eee;
  div {
    padding: 20px;
    h2 {
      font-weight: 700;
      color: #939798;
    }
    input {
      font-size: 1.7rem;
      margin-top: 10px;
      padding: 0;
    }
    p {
      margin-top: 4px;
      color: lightgray;
    }
  }
`;
