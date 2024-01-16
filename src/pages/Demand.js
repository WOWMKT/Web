import React, { useEffect } from 'react';
import { useState } from "react";
import styled from 'styled-components';
import Header from '../components/common/Header';

function Home(){
    const [isCheck, setCheck] = useState(false);

    return (
        <>
          <div
            // 간단하게 내부에 css스타일링
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              boxSizing: "border-box",
              backgroundColor: "gray",
              width: "100%",
              height: "60px",
              color: "#fff"
            }}
          >
            // title값은 받아온 props로 넣어질것이다.
            <h1 style={{ fontSize: "30px" }}>{title}</h1>
            <button
              onClick={() => {
                // setCheck로 state값을 변경해주자.
                // e로 상태값을 받아왔다. 클릭시 상태값은 !상태값이므로 값이 반전된다 false -> true
                setCheck((e) => !e);
              }}
            >
              // 토글할 내용이 닫혀있을땐 버튼에 "+"가 열려있을땐 "-"를 보여주기위해 짧은 삼항연산자사용
              {isCheck ? "-" : "+"}
            </button>
          </div>
          // state의 값이 true라면 게시글이 나올것이고, 아니라면 게시글은 보여지지않는다. 심플하게 앤드연산자사용
          {isCheck && (
            <p
              style={{
                margin: "0",
                backgroundColor: "skyblue",
                color: "#fff",
                padding: "10px"
              }}
            >
              {content}
            </p>
          )}
        </>
      );
}


export default Home;