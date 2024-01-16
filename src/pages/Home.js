import React, { Component } from 'react';
import { useState } from 'react'; // useState를 react에서 불러오기
import styled from 'styled-components';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCateory: false,
      showOptions: false,
    };
  }

  toggleCategory = () => {
    this.setState((prevState) => ({
      showCateory: !prevState.showCateory,
    }));
  };

  toggleOptions = () => {
    this.setState((prevState) => ({
      showOptions: !prevState.showOptions,
    }));
  };

  // const [isOn, setisOn] = useState(false); // useState를 클래스 컴포넌트에서 사용할 수 없습니다.
  // 클래스 컴포넌트에서는 state를 사용해야 합니다.
  state = {
    isOn: false,
  };

  toggleHandler = () => {
    // isOn의 상태를 변경하는 메소드를 구현
    this.setState((prevState) => ({
      isOn: !prevState.isOn,
    }));
  };

  render() {
    const { isOn } = this.state;

    return (
      <div>
        
          <StyledUl>

              <StyledLi1>판매</StyledLi1>
              <StyledLi2>수요조사</StyledLi2>

        
            <StyledLi3>+등록하기</StyledLi3>
         
          </StyledUl>
            {/* <StyledLi3>+등록하기</StyledLi3> */}
        
          <p>총 개</p>
        
        <button onClick={this.toggleCategory}>전체</button>
        {this.state.showCateory && (
          <div>
            <p>의류</p>
            <p>문구</p>
            <p>스티커</p>
            <p>인형</p>
            <p>뱃지</p>
          </div>
        )}

        <button onClick={this.toggleOptions}>임박순</button>
        {this.state.showOptions && (
          <div>
            <p>인기순</p>
            <p>등록순</p>
          </div>
        )}
        <p>우리학교</p>

        <ToggleContainer
          onClick={this.toggleHandler}
        >
          <div className={`toggle-container ${isOn ? 'toggle--checked' : ''}`} />
          <div className={`toggle-circle ${isOn ? 'toggle--checked' : ''}`} />
        </ToggleContainer>
      </div>
    );
  }
}

export default Home;

const StyledUl = styled.ul`
  display: flex; 
  justify-content: space-between;
  margin-top: 13.5rem;
  margin-left: 3rem;
`
const StyledLi1 = styled.li`
  background-color: red;
  font-size: 2rem;
`

const StyledLi2 = styled.li`
  background-color: red;
  font-size: 2rem;
  margin-right: 7rem;
`

const StyledLi3 = styled.li`
  background-color: red;
  font-size: 2rem;
  margin-right: 3rem;
`

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: rgb(233, 233, 234);
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
    &.toggle--checked {
      background-color: rgb(0, 200, 102);
      transition: 0.5s;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: 0.5s;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
    &.toggle--checked {
      left: 27px;
      transition: 0.5s;
    }
  }
`;

