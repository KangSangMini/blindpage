import React from "react";
import styled from "styled-components";

export default function Members() {
  // const [isCheck, setIsChecked] = useState(false);
  // const [checkItems, setCheckItems] = useState([]);

  // const toggleCheck = () => {
  //   setIsChecked(!isCheck);
  // };
  // const singleCheck = (checked, id) => {
  //   if (checked) {
  //     setCheckItems((prev) => [...prev, id]);
  //   } else {
  //     setCheckItems(checkItems.filter((el) => el !== id));
  //   }
  // };
  // const allCheck = (checked) => {
  //   if (checked) {
  //     const idArray = [];
  //     data.forEach((el) => idArray.push(el.id));
  //     setCheckItems(idArray);
  //   } else {
  //     setCheckItems([]);
  //   }
  // };

  return (
    <StyledMembers>
      <div className="members">
        <div className="members-header">
          <h1>회원 관리</h1>
        </div>
        <div className="members-body">
          <div className="members-body-info">
            <p className="members-body-info-num">총 회원수: 20명</p>
            <div>
              <button className="members-body-info-edit" type="button">
                관리
              </button>
              <button className="members-body-info-edit" type="button">
                탈퇴/삭제
              </button>
            </div>
          </div>

          <table className="members-body-table">
            <thead>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>No.</td>
                <td>이메일</td>
                <td>닉네임</td>
                <td>회사 이름</td>
              </tr>
            </thead>
            <tbody>
              <td>
                <input type="checkbox" />
              </td>
              <td>uid</td>
              <td>email</td>
              <td>nick</td>
              <td>company</td>
            </tbody>
          </table>
          <div className="members-body-btn">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        </div>
      </div>
    </StyledMembers>
  );
}

const StyledMembers = styled.div`
  @media screen and (min-width: 1100px) {
    .members {
      max-width: 1140px;
    }
  }
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /* background-color: #f4f5f8; */
  .members {
    width: 100%;
    margin: 0 auto;

    &-header {
      height: 54px;
      border-bottom: 5px solid #c14949;
      /* background-color: #c14949; */
      h1 {
        font-size: 2rem;
        /* color: #fff; */
        text-align: center;
        line-height: 54px;
      }
    }

    &-body {
      padding: 0 20px;
      margin-top: 10px;
      &-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-num {
          font-size: 1.5rem;
        }
        &-edit {
          padding: 3px 10px;
          border: 1px solid #222;
          border-radius: 3px;
          margin: 8px 1px;
        }
      }

      &-table {
        width: 100%;
        border: 1px solid black;
        font-size: 1.5rem;
        td,
        th {
          height: 20px;
          padding: 10px 20px;
          border: 1px solid black;
        }
        td:nth-of-type(1) {
          width: 4%;
        }
        td:nth-of-type(2) {
          width: 6%;
        }
      }
      &-btn {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        cursor: pointer;
        ul {
          display: flex;
          li {
            font-size: 1.5rem;
            margin-right: 15px;
          }
        }
      }
    }
  }
`;
