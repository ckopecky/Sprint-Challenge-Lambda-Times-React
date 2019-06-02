import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  top: 0;
  background-color: #333;
  z-index: 2
  > div {
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
    @media (min-width: 1280px) {
      width: 1280px;
    }
    > div:nth-child(1) {
      display: flex;
      justify-content: none;
      align-items: center;
      flex-direction: row;
      flex: 1;
      font-size: 11px;
      span {
        cursor: pointer;
        margin-right: 25%;
        font-weight: bold;
      }
    }
    >div:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex: 3;
      font-size: 9px;
      span {
        cursor: pointer;
        margin-right: 5%;
      }
      span:last-child {
        margin-right: 0;
      }
      span:hover {
        text-decoration: underline;
      }
    }
    > div:nth-child(3) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: row;
      flex: 1;
      font-size: 11px;
      font-weight: bold;
      span {
        cursor: pointer;
      }
    }

  }
`

const TopBar = () => {
  return (
    <TopBarComponent>
      <div>
        <div>
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        <div>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div>
          <span>LOG IN</span>
        </div>
      </div>
    </TopBarComponent>
  )
}

export default TopBar;